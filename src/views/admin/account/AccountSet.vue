<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>個人資料設定</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="請輸入舊的密碼"
                      type="password"
                      prepend-icon="mdi-account"
                      v-model="oldUserPassword"
                      :rules="[() => !!oldUserPassword || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
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
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="請輸入新的密碼"
                      type="password"
                      prepend-icon="mdi-lock-reset"
                      v-model="newUserPassword"
                      :rules="[
                        () => !!newUserPassword || '必須填入',
                        () =>
                          newUserPassword.length >= 8 || '密碼介於8-20字元之間',
                        () =>
                          newUserPassword.length <= 20 || '密碼介於8-20字元之間'
                      ]"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="請重複輸入新的密碼"
                      type="password"
                      prepend-icon="mdi-lock-reset"
                      v-model="againNewUserPassword"
                      :rules="[
                        () => !!againNewUserPassword || '必須填入',
                        () =>
                          againNewUserPassword.length >= 8 ||
                          '密碼介於8-20字元之間',
                        () =>
                          againNewUserPassword.length <= 20 ||
                          '密碼介於8-20字元之間',
                        () =>
                          againNewUserPassword == newUserPassword ||
                          '與新的密碼不一致'
                      ]"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
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
                <v-row justify="center pb-3">
                  <v-btn class="mx-12" dark color="primary" @click="edit">
                    <v-icon left>mdi-send-check</v-icon>
                    編輯
                  </v-btn>
                  <v-btn class="mx-12" @click="Close" dark color="red">
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn class="mx-12" @click="Clear" dark color="secondary">
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
export default class AccountSet extends Vue {
  oldUserPassword: string = "";
  newUserPassword: string = "";
  againNewUserPassword: string = "";
  genderText: string = "";
  firstName: string = "";
  lastName: string = "";
  gender: Object = ["男", "女", "其他", "不願提供"];
  Close() {
    if (confirm("確定不要設定資料嗎?")) {
      this.$router.push("/admin/account/accountall");
    }
  }
  Clear() {
    this.oldUserPassword = "";
    this.newUserPassword = "";
    this.againNewUserPassword = "";
    this.genderText = "";
    this.firstName = "";
    this.lastName = "";
  }
}
</script>
