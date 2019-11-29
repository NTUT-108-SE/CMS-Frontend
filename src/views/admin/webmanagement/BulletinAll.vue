<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          sort-by="bulletinNum"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>公告列表</v-toolbar-title>
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
export default class BulletinAll extends Vue {
  search: string = "";
  headers: Object = [
    {
      text: "公告號碼",
      align: "left",
      value: "bulletinNum"
    },
    { text: "公告日期", value: "bulletinDate" },
    { text: "標題", value: "title" },
    { text: "點閱率", value: "ctr" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        bulletinNum: "0",
        bulletinDate: "2019-10-20",
        title: "測試文章",
        ctr: "1"
      },
      {
        bulletinNum: "1",
        bulletinDate: "2019-10-20",
        title: "測試文章2",
        ctr: "10"
      }
    ];
  }
}
</script>
