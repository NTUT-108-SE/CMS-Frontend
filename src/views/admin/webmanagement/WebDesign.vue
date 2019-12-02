<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>網頁內容設定</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="圖片網址1"
                      prepend-icon="mdi-image"
                      v-model="imageUrlOne"
                      :rules="[() => !!imageUrlOne || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="圖片網址2"
                      prepend-icon="mdi-image"
                      v-model="imageUrlTwo"
                      :rules="[() => !!imageUrlTwo || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="圖片網址3"
                      prepend-icon="mdi-image"
                      v-model="imageUrlThree"
                      :rules="[() => !!imageUrlThree || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="圖片網址4"
                      prepend-icon="mdi-image"
                      v-model="imageUrlFour"
                      :rules="[() => !!imageUrlFour || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="目標網址1"
                      prepend-icon="mdi-image"
                      v-model="targetUrlOne"
                      :rules="[() => !!targetUrlOne || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="目標網址2"
                      prepend-icon="mdi-image"
                      v-model="targetUrlTwo"
                      :rules="[() => !!targetUrlTwo || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="目標網址3"
                      prepend-icon="mdi-image"
                      v-model="targetUrlThree"
                      :rules="[() => !!targetUrlThree || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="目標網址4"
                      prepend-icon="mdi-image"
                      v-model="targetUrlFour"
                      :rules="[() => !!targetUrlFour || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="院所介紹"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="clinicIntroduction"
                      :rules="[() => !!clinicIntroduction || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="主治項目"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="indications"
                      :rules="[() => !!indications || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="醫師介紹"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="doctorIntroduction"
                      :rules="[() => !!doctorIntroduction || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="院所位置"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="clinicLocation"
                      :rules="[() => !!clinicLocation || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="center pb-3">
                  <v-btn class="mx-4" dark color="primary" @click="submit">
                    <v-icon left>mdi-send-check</v-icon>
                    設定
                  </v-btn>
                  <v-btn class="mx-4" @click="close" dark color="red">
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn class="mx-4" @click="clear" dark color="secondary">
                    <v-icon left>mdi-autorenew</v-icon>
                    清除
                  </v-btn>
                </v-row>
              </v-form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class WebDesign extends Vue {
  imageUrlOne: string = "";
  imageUrlTwo: string = "";
  imageUrlThree: string = "";
  imageUrlFour: string = "";
  targetUrlOne: string = "";
  targetUrlTwo: string = "";
  targetUrlThree: string = "";
  targetUrlFour: string = "";
  clinicIntroduction: string = "";
  indications: string = "";
  doctorIntroduction: string = "";
  clinicLocation: string = "";
}
</script>
