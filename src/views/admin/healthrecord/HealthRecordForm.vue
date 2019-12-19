<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>{{ formTitle }}</v-toolbar-title>
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
                      :disabled="activeForm"
                      v-on:input="checkID"
                      @click:clear="clearIDAndName"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-menu
                      ref="birthMenu"
                      v-model="birthMenu"
                      :close-on-content-click="false"
                      :return-value.sync="createHealthRecordDate"
                      transition="scale-transition"
                      offset-y
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="createHealthRecordDate"
                          :rules="[
                            () => !!createHealthRecordDate || '必須填入'
                          ]"
                          label="看診日期"
                          prepend-icon="mdi-calendar-blank"
                          readonly
                          v-on="on"
                          dense
                          outlined
                          :disabled="activeForm"
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="createHealthRecordDate"
                        no-title
                        scrollable
                        min="1919-01-01"
                      >
                        <v-spacer></v-spacer>
                        <v-btn text color="primary" @click="birthMenu = false"
                          >Cancel</v-btn
                        >
                        <v-btn
                          text
                          color="primary"
                          @click="$refs.birthMenu.save(createHealthRecordDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="6">
                    <v-text-field
                      label="姓名"
                      prepend-icon="mdi-account"
                      v-model="name"
                      :rules="[() => !!name || '必須填入']"
                      clearable
                      dense
                      outlined
                      :disabled="activeForm"
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-select v-show="false"></v-select>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="12">
                    <v-textarea
                      label="病況描述"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="conditionDescription"
                      :rules="[() => !!conditionDescription || '必須填入']"
                      clearable
                      dense
                      outlined
                      :disabled="activeForm"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="center">
                  <v-col md="12">
                    <v-textarea
                      label="藥物治療描述"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="medicationDescription"
                      :rules="[() => !!medicationDescription || '必須填入']"
                      clearable
                      dense
                      outlined
                      :disabled="activeForm"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-overlay :value="overlay">
                  <v-progress-circular
                    indeterminate
                    size="64"
                  ></v-progress-circular>
                </v-overlay>
                <v-row justify="center">
                  <v-btn
                    class="mx-12"
                    dark
                    color="primary"
                    @click="submit"
                    v-if="buttionAction == 'add'"
                  >
                    <v-icon left>mdi-send-check</v-icon>
                    送出
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="close"
                    dark
                    color="red"
                    v-else-if="buttionAction != 'add'"
                  >
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="clear"
                    v-if="buttionAction == 'add'"
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

@Component
export default class HealthRecordForm extends Vue {
  private formTitle: string = "新增病歷";
  private identifier: string = "";
  private name: string = "";
  private createHealthRecordDate: string = "";
  private conditionDescription: string = "";
  private medicationDescription: string = "";
  private valid: Boolean = true;
  private activeForm: Boolean = false;
  private buttionAction: string = "add";
  private tempID: number = 0;
  private overlay: Boolean = false;

  clearIDAndName() {
    this.name = "";
  }

  checkID() {
    if (this.identifier.length == 10) {
      this.overlay = true;
      var order = "/patient/" + this.identifier;
      this.axios
        .get(order)
        .then(data => data.data)
        .then(({ patient }) => {
          this.name = patient["family"] + patient["given"];
          this.tempID = patient["id"];
          this.overlay = false;
        })
        .catch(data => {
          this.overlay = false;
          this.$toasted.show(`讀取不到身分證對應的名字`, {
            type: "error",
            position: "top-right",
            duration: 3000
          });
        });
    }
  }
  created() {
    if (this.$route.query.action == "show") {
      this.formTitle = "顯示病歷";
      this.getShowData();
      this.activeForm = true;
      this.buttionAction = "close";
    }
  }
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      treatDate: new Date().toISOString().substr(0, 10),
      createHealthRecordDate: "",
      treatMenu: false,
      birthMenu: false
    };
  }
  clear() {
    this.identifier = "";
    this.name = "";
    this.createHealthRecordDate = "";
    this.conditionDescription = "";
    this.medicationDescription = "";
  }
  getShowData() {
    this.overlay = true;
    var order = "/healthrecord/" + this.$route.query.id;
    this.axios
      .get(order)
      .then(data => data.data)
      .then(({ healthRecord }) => {
        this.identifier = healthRecord.identifier;
        this.name = healthRecord.name;
        this.conditionDescription = healthRecord.code;
        this.medicationDescription = healthRecord.medication;
        this.createHealthRecordDate = healthRecord.date;
        this.overlay = false;
      })
      .catch(data => {
        this.overlay = false;
        this.$toasted.show(`資料讀取失敗，請重新整理一次`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
      });
  }
  close() {
    this.$router.push({
      path: "/admin/healthrecord/healthrecord"
    });
  }
  submit(): void {
    if ((this.$refs.form as Vue & { validate: () => boolean }).validate()) {
      this.pullHealthRecord();
    }
  }
  pullHealthRecord() {
    this.overlay = true;
    var order = "/healthrecord";
    this.axios
      .post(
        order,
        JSON.stringify({
          patientId: this.tempID,
          code: this.conditionDescription,
          medication: this.medicationDescription,
          identifier: this.identifier,
          name: this.name
        })
      )
      .then(data => data.data)
      .then(({ ok }) => {
        this.$toasted.show(`新增成功`, {
          type: "success",
          position: "top-right",
          duration: 3000
        });
        this.overlay = false;
        this.$router.push({
          path: "/admin/healthrecord/healthrecord"
        });
      })
      .catch(data => {
        this.$toasted.show(`新增失敗，請重新確認輸入資料`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
      });
  }
}
</script>
