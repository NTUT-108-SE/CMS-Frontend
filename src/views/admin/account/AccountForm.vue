<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>新增帳號</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="使用者帳號"
                      prepend-icon="mdi-account"
                      v-model="userAccount"
                      :rules="[() => !!userAccount || '必須填入']"
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
                      v-model="permissionText"
                      prepend-icon="mdi-account-multiple-check"
                      :items="permission"
                      :rules="[() => !!permissionText || '必須填入']"
                      label="權限"
                      required
                      dense
                      outlined
                    ></v-select>
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
export default class AccountForm extends Vue {
  action: string = "add";
  genderText: string = "";
  userAccount: string = "";
  firstName: string = "";
  lastName: string = "";
  permissionText: string = "";
  gender: Object = ["男", "女", "其他", "不願提供"];
  permission: Object = ["醫生", "護理師"];
  clear() {
    this.genderText = "";
    this.userAccount = "";
    this.firstName = "";
    this.lastName = "";
    this.permissionText = "";
  }
}
</script>
