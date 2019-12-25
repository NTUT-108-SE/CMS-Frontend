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
              <v-text-field
                v-model="totleRegistration"
                :disabled="true"
                color="primary"
              ></v-text-field>
            </v-card-text>
          </v-row>
          <v-row>
            <v-card-text class="py-2 px-6 pb-4">
              <v-text-field
                v-model="nowRegistration"
                :disabled="true"
                color="primary"
              ></v-text-field>
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
          <v-row justify="center">
            <v-card-actions align="center">
              <v-switch
                v-model="singleSelect"
                label="只顯示今日掛號"
                v-on:change="process()"
              ></v-switch>
            </v-card-actions>
          </v-row>
        </v-card>
      </v-col>
      <v-col md="10">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="registrationDate"
          class="elevation-1"
          :loading="loading"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>掛號病人列表</v-toolbar-title>
              <v-spacer></v-spacer>

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
import { State, Mutation } from "vuex-class";
@Component
export default class OnlineRegistration extends Vue {
  @Mutation("Loader/setOverLay") setOverLay!: Function;
  private search: string = "";
  private headers: Object = [
    { text: "掛號順序", value: "order" },
    { text: "身分證號碼", value: "identifier" },
    { text: "姓名", value: "name" },
    { text: "出生年月日", value: "birthDate" },
    { text: "掛號日期", value: "registrationDate" }
  ];
  private loading: Boolean = true;

  private totleRegistration: string = "今日掛號人數：";
  private nowRegistration: string = "目前看診進度：";

  private singleSelect: Boolean = false;
  private desserts: Array<Object> = [];
  process() {
    if (this.singleSelect) {
      var tzoffset = new Date().getTimezoneOffset() * 60000;
      this.desserts = [];
      this.loading = true;
      var currentDate = new Date(Date.now() - tzoffset)
        .toISOString()
        .substr(0, 10);
      var api = "/registration?date=" + currentDate;
      this.axios
        .get(api)
        .then(data => data.data)
        .then(({ registrations }) => {
          this.desserts = registrations;
          this.loading = false;
        })
        .catch(data => {
          this.$toasted.show(`資料讀取失敗，請重新整理`, {
            type: "error",
            position: "top-right",
            duration: 3000
          });
        });
    } else {
      this.desserts = [];
      this.loading = true;
      this.getRegistrationAll();
    }
  }
  created() {
    this.getCurrentRegistrationInfo();
    this.getRegistrationAll();
  }
  
  getRegistrationAll() {
    this.axios
      .get("/registration")
      .then(data => data.data)
      .then(({ registrations }) => {
        this.desserts = registrations;
        this.loading = false;
      })
      .catch(data => {
        this.$toasted.show(`資料讀取失敗，請重新整理`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
      });
  }
  getCurrentRegistrationInfo() {
    this.axios
      .get("/registration/order")
      .then(data => data)
      .then(({ data }) => {

        this.totleRegistration += data.total;
        this.nowRegistration += data.order;
      })
      .catch(data => {
        this.$toasted.show(`資料讀取失敗，請重新整理`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
      });
  }
  
}
</script>