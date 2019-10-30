<template>
  <v-container class="fill-height">
    <v-row justify="center">
      <v-col md="2">
        <v-card>
          <v-card-title class="py-2" color="grey">
            看診資訊
          </v-card-title>

          <v-divider class="mx-4"></v-divider>

          <v-row>
            <v-card-text class="py-2 px-6">
              看診醫生： {{ registrationInfo.doctorName }}
            </v-card-text>
          </v-row>

          <v-row>
            <v-card-text class="py-2 px-6">
              今日掛號人數： {{ registrationInfo.totleRegistration }}
            </v-card-text>
          </v-row>

          <v-row>
            <v-card-text class="py-2 px-6 pb-4">
              目前看診進度： {{ registrationInfo.nowRegistration }}
            </v-card-text>
          </v-row>
        </v-card>
      </v-col>

      <v-col md="10">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="createtime"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>掛號病患列表</v-toolbar-title>
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
export default class Account extends Vue {
  registrationInfo: Object = {
    doctorName: "黃俊凱",
    totleRegistration: 87,
    nowRegistration: 78
  };
  search: string = "";
  headers: Object = [
    {
      text: "姓名",
      align: "left",
      sortable: false,
      value: "name"
    },
    { text: "身分證號碼", value: "ID" },
    { text: "掛號日期", value: "registrationDate" },
    { text: "看診日期", value: "treatDate" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        name: "黃俊凱",
        ID: "A000000000",
        registrationDate: "2019/10/20",
        treatDate: "2019/10/20"
      },
      {
        name: "蕭文全",
        ID: "B000000000",
        registrationDate: "2019/10/20",
        treatDate: "2019/10/20"
      },
      {
        name: "陳冠穎",
        ID: "C000000000",
        registrationDate: "2019/10/20",
        treatDate: "2019/10/20"
      }
    ];
  }
}
</script>
