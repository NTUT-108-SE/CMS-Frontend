<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="12">
        <v-data-table
          :headers="headers"
          :items="desserts"
          :search="search"
          sort-by="createtime"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-toolbar-title>病人列表</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                label="搜尋病人"
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
  search: string = "";
  headers: Object = [
    {
      text: "病人身分證",
      align: "left",
      sortable: false,
      value: "id"
    },
    { text: "姓名", value: "name" },
    { text: "性別", value: "gender" },
    { text: "電話", value: "telecom" },
    { text: "生日", value: "birthDate"},
    { text: "地址", value: "address"},
    { text: "建立時間", value: "createtime" },
    { text: "修改時間", value: "edittime" },
    { text: "操作", value: "action", sortable: false }
  ];
  desserts: object = [];
  created() {
    this.initialize();
  }
  initialize() {
    this.desserts = [
      {
        id: "FXXXXXXXXX",
        name: "王小名",
        gender: "男",
        telecom:"09XXXXXXXX",
        birthDate:"2010-05-03",
        address:"北科大XXXX",
        createtime: "2019/10/20",
        edittime: "2019/10/20"
      },
      {
        id: "FXXXXXXXXX",
        name: "王小美",
        gender: "女",
        telecom:"09XXXXXXXX",
        birthDate:"2010-05-09",
        address:"北科大XXXX",
        createtime: "2019/10/20",
        edittime: "2019/10/20"
      },
      {
        id: "FXXXXXXXXX",
        name: "王大熊",
        gender: "男",
        telecom:"09XXXXXXXX",
        birthDate:"2010-12-09",
        address:"北科大XXXX",
        createtime: "2019/10/20",
        edittime: "2019/10/20"
      }
    ];
  }
}
</script>

