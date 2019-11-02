<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="userNum"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>使用者帳戶列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋帳號"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon class="mr-2" @click="editItem(item)">
              mdi-account-edit-outline
            </v-icon>
            <v-icon class="mr-2" @click="deleteItem(item)">
              mdi-delete
            </v-icon>
            <v-icon class="mr-2" @click="showItem(item)">
              mdi-file-eye-outline
            </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class AccountAll extends Vue {
  search: string = "";
  headers: Object = [
    {
      text: "使用者號碼",
      align: "left",
      value: "userNum"
    },
    { text: "使用者帳號", value: "userAccount" },
    { text: "姓名", value: "name" },
    { text: "性別", value: "gender" },
    { text: "權限", value: "permission" },
    { text: "建立時間", value: "createTime" },
    { text: "修改時間", value: "editTime" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        userNum: "0",
        userAccount: "test000",
        name: "前端測試帳號",
        gender: "男",
        permission: "doctor",
        createTime: "2019-10-20",
        editTime: "2019-10-20"
      },
      {
        userNum: "1",
        userAccount: "test001",
        name: "前端測試帳號",
        gender: "男",
        permission: "employee",
        createTime: "2019-10-20",
        editTime: "2019-10-20"
      }
    ];
  }
}
</script>
