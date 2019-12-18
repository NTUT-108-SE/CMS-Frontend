<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>新增病人</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
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
                    ></v-text-field>
                  </v-col>
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
                          label="出生年月日"
                          prepend-icon="mdi-calendar-blank"
                          readonly
                          v-on="on"
                          dense
                          outlined
                        ></v-text-field>
                      </template>
                      <v-date-picker
                        v-model="birthDate"
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
                          @click="$refs.birthMenu.save(birthDate)"
                          >OK</v-btn
                        >
                      </v-date-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="姓氏"
                      prepend-icon="mdi-account"
                      v-model="firstName"
                      :rules="[() => !!firstName || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="名字"
                      prepend-icon="mdi-account"
                      v-model="lastName"
                      :rules="[() => !!lastName || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-select
                      v-model="genderText"
                      prepend-icon="mdi-gender-non-binary"
                      :items="gender"
                      :rules="[() => !!genderText || '必須填入']"
                      label="性別"
                      required
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                  <v-col md="6">
                    <v-select
                      v-model="maritalText"
                      prepend-icon="mdi-heart-multiple"
                      :items="maritalStatus"
                      :rules="[() => !!maritalText || '必須填入']"
                      label="婚姻"
                      required
                      dense
                      outlined
                    ></v-select>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="電話"
                      prepend-icon="mdi-phone-forward"
                      v-model="telephone"
                      :rules="[
                        () => !!telephone || '必須填入',
                        () => telephone.length <= 20 || '電話最多輸入20個字元'
                      ]"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-textarea
                      label="地址"
                      prepend-icon="mdi-home-edit"
                      v-model="address"
                      :rules="[() => !!address || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="center pb-3">
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
                    dark
                    color="primary"
                    @click="edit"
                    v-else-if="action === 'edit'"
                  >
                    <v-icon left>mdi-send-check</v-icon>
                    編輯
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="close"
                    dark
                    color="red"
                    v-else-if="action === 'close'"
                  >
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="clear"
                    v-if="action != 'close'"
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
export default class PatientManagementForm extends Vue {
  private formTitle: string = "新增病人";
  identifier: string = "";
  firstName: string = "";
  lastName: string = "";
  genderText: string = "";
  maritalText: string = "";
  telephone: string = "";
  address: string = "";
  birthDate: string = "";
  action: string = "add";
  gender: Object = ["男", "女", "其他", "不願提供"];
  maritalStatus: Object = ["未婚", "已婚", "離婚", "喪偶", "不願提供"];
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      treatDate: new Date().toISOString().substr(0, 10),
      birthDate: "",
      treatMenu: false,
      birthMenu: false
    };
  }
  clear() {
    this.identifier = "";
    this.firstName = "";
    this.lastName = "";
    this.genderText = "";
    this.maritalText = "";
    this.telephone = "";
    this.address = "";
    this.birthDate = "";
    this.gender = ["男", "女", "其他", "不願提供"];
    this.maritalStatus = ["未婚", "已婚", "離婚", "喪偶", "不願提供"];
  }
  created() {
    if (this.$route.query.action == "show") {
      this.formTitle = "顯示病人資料";
      this.getShowData();
      // this.activeForm = true;
      // this.buttionAction = "close";
    } else if (this.$route.query.action == "edit") {
      this.formTitle = "更新病人權限";
      // this.buttionAction = "edit";
      this.getShowData();
    }
  }

  getShowData() {}
}
</script>
