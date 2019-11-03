<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="financialNum"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>收據列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋收據"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:item.action="{ item }">
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
export default class Financial extends Vue {
  search: string = "";
  headers: Object = [
    {
      text: "收據號碼",
      align: "left",
      value: "financialNum"
    },

    { text: "姓名", value: "name" },
    { text: "身分證", value: "patientID" },
    { text: "建立時間", value: "createTime" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        financialNum: "0",
        name: "前端測試帳號",
        patientID: "A000000000",
        createTime: "2019-10-20"
      },
      {
        financialNum: "1",
        name: "前端測試帳號",
        patientID: "B000000000",
        createTime: "2019-10-20"
      }
    ];
  }
}
</script>
