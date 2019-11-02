<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="healthRecordID"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>病歷列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋病歷"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
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
export default class HealthRecord extends Vue {
  search: string = "";
  headers: Object = [
    {
      text: "病歷號碼",
      align: "left",
      sortable: false,
      value: "healthRecordID"
    },
    { text: "身分證", value: "patientID" },
    { text: "姓名", value: "name" },
    { text: "看診日期", value: "createHealthRecordDate" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        healthRecordID: "0",
        patientID: "AXXXXXXXXX",
        name: "前端測試帳號",
        createHealthRecordDate: "2019-10-20"
      },
      {
        healthRecordID: "1",
        patientID: "DXXXXXXXXX",
        name: "前端測試帳號",
        createHealthRecordDate: "2019-10-20"
      }
    ];
  }
}
</script>
