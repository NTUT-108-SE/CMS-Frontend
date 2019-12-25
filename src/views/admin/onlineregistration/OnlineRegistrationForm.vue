<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>新增掛號</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3" ref="form" v-model="valid" lazy-validation>
                <v-row justify="center">
                  <v-col md="6">
                    <v-text-field
                      label="身分證"
                      prepend-icon="mdi-account-badge-horizontal-outline"
                      v-model="identifier"
                      :rules="[
                        () => !!identifier || '必須填入',
                        () => identifier.length == 10 || '身分證必須是10個字元'
                      ]"
                      clearable
                      dense
                      outlined
                      v-on:input="checkID"
                      @click:clear="clearIDAndBD"
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="6">
                    <v-menu
                      ref="birthMenu"
                      v-model="birthMenu"
                      :close-on-content-click="false"
                      :return-value.sync="birthDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="birthDate"
                          :rules="[() => !!birthDate || '必須填入']"
                          label="出生年月日"
                          prepend-icon="mdi-calendar-blank"
                          readonly
                          v-on="on"
                          dense
                          outlined
                          :disabled="controlbirthDateActive"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="birthDate" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="birthMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.birthMenu.save(birthDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="6">
                    <v-menu
                      ref="OnlineRegistrationMenu"
                      v-model="OnlineRegistrationMenu"
                      :close-on-content-click="false"
                      :return-value.sync="OnlineRegistrationDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="OnlineRegistrationDate"
                          :rules="[
                            () => !!OnlineRegistrationDate || '必須填入'
                          ]"
                          label="掛號日期"
                          prepend-icon="mdi-calendar-blank"
                          readonly
                          v-on="on"
                          dense
                          outlined
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="OnlineRegistrationDate"
                        no-title
                        scrollable
                      >
                        <v-spacer></v-spacer>
                        <v-btn
                          text
                          color="primary"
                          @click="OnlineRegistrationMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="
                            $refs.OnlineRegistrationMenu.save(
                              OnlineRegistrationDate
                            )
                          "
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-btn
                    class="mx-12"
                    dark
                    color="primary"
                    @click="submit"
                    v-if="action == 'add'"
                  >
                    <v-icon left>mdi-send-check</v-icon>
                    送出
                  </v-btn>

                  <v-btn
                    class="mx-12"
                    @click="clear"
                    v-if="action == 'add'"
                    dark
                    color="secondary"
                  >
                    <v-icon left>mdi-autorenew</v-icon>
                    清除
                  </v-btn>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component
export default class OnlineRegistrationForm extends Vue {
  @Mutation("Loader/setOverLay") setOverLay!: Function;
  identifier: string = "";
  birthDate: string = "";
  OnlineRegistrationDate: string = "";
  action: string = "add";
  private valid: Boolean = true;
  private controlbirthDateActive: Boolean = false;
  data() {
    return {
      birthDate: "",
      OnlineRegistrationDate: "",
      OnlineRegistrationMenu: false,
      birthMenu: false
    };
  }
  clear() {
    this.identifier = "";
    this.birthDate = "";
    this.OnlineRegistrationDate = "";
  }
  checkID() {
    if (this.identifier.length == 10) {
      this.setOverLay(true);
      var order = "/patient/" + this.identifier;
      this.axios
        .get(order)
        .then(data => data.data)
        .then(({ patient }) => {
          this.birthDate = patient["birthDate"];
          this.controlbirthDateActive = true;
          this.setOverLay(false);
        })
        .catch(data => {
          this.setOverLay(false);
          this.$toasted.show(`請確認輸入是否正確`, {
            type: "error",
            position: "top-right",
            duration: 3000
          });
        });
    }
  }
  clearIDAndBD() {
    this.birthDate = "";
    this.controlbirthDateActive = false;
  }
  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.setOverLay(true);
      this.axios
        .post(
          "/registration",
          JSON.stringify({
            identifier: this.identifier,
            birthDate: this.birthDate,
            registrationDate: this.OnlineRegistrationDate
          })
        )
        .then(data => data.data)
        .then(({ ok }) => {
          this.$toasted.show(`新增成功`, {
            type: "success",
            position: "top-right",
            duration: 3000
          });
          this.setOverLay(false);
          this.$router.push({
            path: "/admin/onlineregistration/onlineregistration"
          });
        })
        .catch(data => {
          this.setOverLay(false);
          this.$toasted.show(`新增失敗`, {
            type: "error",
            position: "top-right",
            duration: 3000
          });
        });
    }
  }
}
</script>
