<template>
    <v-container class="grey lighten-5">
    <v-row justify="center">
        <v-col md="8">
            <v-card >
                <v-simple-table>
                <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">發布日期</th>
                                <th class="text-left">標題</th>
                                <th class="text-right">觀看次數</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="item in desserts" :key="item.name">
                                <td>{{ item.updateTime }}</td>
                                <td>
                                    <a :href="item.url">{{ item.title }}</a>
                                </td>
                                <td class="text-right">{{ item.viewsNumber }}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-card>
        </v-col>
    </v-row>
    </v-container>
  
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Registration extends Vue {
    search: string = '';
    headers: Object = [
        {
        text: '更新日期',
        align: 'left',
        sortable: false,
        value: 'name',
        },
        { text: '標題', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
    ];
    desserts: object = [
          {
            updateTime: '2019-10-29',
            url: "https://rnd.ntut.edu.tw/p/404-1042-96433-1.php",
            title: "【公告】臺北醫學大學舉辦108學年度「提升研究創新能量」，歡迎踴躍參加！",
            viewsNumber: 0
          }
        ];

}
</script>
