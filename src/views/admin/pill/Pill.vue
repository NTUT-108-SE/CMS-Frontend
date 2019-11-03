<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="pillNum"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>藥品列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋藥品"
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
export default class Pill extends Vue {
  search: string = "";
  headers: Object = [
    {
      text: "藥品號碼",
      align: "left",
      value: "pillNum"
    },
    { text: "藥品學名", value: "pillScientificName" },
    { text: "藥品商品名", value: "pillName" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        pillNum: "0",
        pillScientificName: "acetaminophen",
        pillName: "普拿疼"
      },
      {
        pillNum: "1",
        pillScientificName: "aspirin",
        pillName: "阿斯匹林"
      }
    ];
  }
}
</script>
