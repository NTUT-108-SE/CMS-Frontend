<template>
    <v-container class="grey lighten-5">
    <v-row justify="center">
        <v-col md="12">
            <v-data-table
                :headers="headers"
                :items="desserts"
                :search="search"
                sort-by="createtime"
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
                    <v-icon
                   
                    class="mr-2"
                    @click="editItem(item)"
                    >
                    mdi-account-edit-outline
                    </v-icon>
                    <v-icon
                    class="mr-2"
                    @click="deleteItem(item)"
                    >
                    mdi-delete
                    </v-icon>
                    <v-icon
                    class="mr-2"
                    @click="deleteItem(item)"
                    >
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
   search: string = '';
    headers: Object = [
        {
            text: '使用者名稱',
            align: 'left',
            sortable: false,
            value: 'uesername',
        },
        { text: '姓名', value: 'name' },
        { text: '性別', value: 'gender' },
        { text: '權限', value: 'permission'},
        { text: '建立時間', value: 'createtime' },
        { text: '修改時間', value: 'edittime' },
        { text: '操作', value: 'action', sortable: false  },
    ];
    desserts: object = [
          {
            uesername: 'Admin000',
            name: '軟工開發小組',
            gender :'男',
            permission: 'admin',
            createtime: '2019/10/20',
            edittime: '2019/10/20',
            action:'delete'
          }
        ] 
}
</script>