<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="id"
          class="elevation-1"
          :loading="loading"
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
import { State, Mutation } from "vuex-class";
@Component
export default class Pill extends Vue {
  private search: string = "";
  private loading: Boolean = true;
  private headers: Object = [
    { text: "藥品號碼", value: "id" },
    { text: "藥品學名", value: "name" },
    { text: "藥品名稱", value: "name" },
    { text: "操作", value: "action", sortable: false }
  ];
  private desserts: Array<Object> = [];
  created() {

  }
  deleteItem(item: any) {
    
  }
  showItem(item: any) {
    
  }
  editItem(item: any) {
    
  }
}
</script>
