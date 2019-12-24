<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="2">
        <v-card>
          <v-card-title class="py-2" color="grey">
            看診資訊
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-row>
            <v-card-text class="py-2 px-6">
              今日掛號人數： {{ totleRegistration }}
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text class="py-2 px-6 pb-4">
              目前看診進度： {{ nowRegistration }}
            </v-card-text>
          </v-row>
          <v-divider class="mx-4"></v-divider>
          <v-row justify="center">
            <v-card-actions align="center">
              <v-btn dark color="primary" @click="nextNum">
                <v-icon left>mdi-chevron-right</v-icon>
                下一號
              </v-btn>
            </v-card-actions>
            <v-card-actions align="center">
              <v-btn dark color="red" @click="skipNum">
                <v-icon left>mdi-chevron-right</v-icon>
                跳號
              </v-btn>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="10">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="onlineRegistrationNum"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>掛號病人列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋掛號病人"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class OnlineRegistration extends Vue {
  private search: string = "";
  private headers: Object = [
    { text: "掛號順序", value: "order" },
    { text: "身分證號碼", value: "identifier" },
    { text: "姓名", value: "name" },
    { text: "出生年月日", value: "birthDate" },
    { text: "掛號日期", value: "registrationDate" }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        onlineRegistrationNum: "0",
        patientID: "A000000000",
        name: "前端測試帳號",
        registrationDate: "2019-10-20",
        birthDate: "2019-10-20"
      },
      {
        onlineRegistrationNum: "1",
        patientID: "A000000001",
        name: "前端測試帳號",
        registrationDate: "2019-10-20",
        birthDate: "2019-10-20"
      },
      {
        onlineRegistrationNum: "2",
        patientID: "A000000002",
        name: "前端測試帳號",
        registrationDate: "2019-10-20",
        birthDate: "2019-10-20"
      }
    ];
  }
}
</script>
