<template>
  <v-container class="grey lighten-5">

    <v-row justify="center">
      <v-col md="2">
        <v-card class="pa-2" tile >
          <v-list rounded>
            <v-list-item-group v-model="item" color="primary">
              <v-list-item
                v-for="(item, i) in items"
                :key="i"
              >
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card class="pa-2" tile >
          <v-card-title class="headline mb-1">院所介紹</v-card-title>
<p>
&emsp;本診所管理系統為一 Web Application，目的為提供診所一個簡易、通用的管理介面，
並開源程式碼、開放擴充，使診所能針對各自領域的不同進行擴充，同時也能兼具通用管
理的功能。<br><br>
&emsp;系統開發上，前端介面使用 Vue.js 框架技術實做；後端使用 Python；資料庫使用
MongoDB 及 FHIR Server；資料的查詢（query）及更新使用 GraphQL 進行。
</p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";


@Component
export default class About extends Vue {
  items: Array<Object> =  [
        { text: '院所介紹', icon: 'mdi-hospital-building' },
        { text: '主治項目', icon: 'mdi-stethoscope' },
        { text: '醫師介紹', icon: 'mdi-doctor' },
        { text: '院所位置', icon: 'mdi-map-marker' }
      ]
  Introduction: String="123";
}
</script>
