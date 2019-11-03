<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>新增藥物</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="藥品學名"
                      prepend-icon="mdi-pill"
                      v-model="pillScientificName"
                      :rules="[() => !!pillScientificName || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col md="6">
                    <v-text-field
                      label="藥品商品名"
                      prepend-icon="mdi-pill"
                      v-model="pillName"
                      :rules="[() => !!pillName || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="藥品成份"
                      prepend-icon="mdi-file-document-box-outline"
                      v-model="pillComposition"
                      :rules="[() => !!pillComposition || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="副作用"
                      prepend-icon="mdi-file-document-box-outline"
                      v-model="pillSideEffect"
                      :rules="[() => !!pillSideEffect || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="適應症"
                      prepend-icon="mdi-file-document-box-outline"
                      v-model="indication"
                      :rules="[() => !!indication || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="投藥指引"
                      prepend-icon="mdi-file-document-box-outline"
                      v-model="standardGuidelines"
                      :rules="[() => !!standardGuidelines || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-row justify="center pb-3">
                  <v-btn
                    class="mx-12"
                    dark
                    color="primary"
                    @click="submit"
                    v-if="action == 'add'"
                  >
                    <v-icon left>mdi-send-check</v-icon>
                    送出
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    dark
                    color="primary"
                    @click="edit"
                    v-else-if="action === 'edit'"
                  >
                    <v-icon left>mdi-send-check</v-icon>
                    編輯
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="close"
                    dark
                    color="red"
                    v-else-if="action === 'close'"
                  >
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn
                    class="mx-12"
                    @click="clear"
                    v-if="action != 'close'"
                    dark
                    color="secondary"
                  >
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
export default class PillForm extends Vue {
  action: string = "add";
  pillName: string = "";
  pillScientificName: string = "";
  pillComposition: string = "";
  pillSideEffect: string = "";
  indication = "";
  standardGuidelines = "";
  clear() {
    this.pillScientificName = "";
    this.pillName = "";
    this.pillComposition = "";
    this.pillSideEffect = "";
    this.indication = "";
    this.standardGuidelines = "";
  }
}
</script>
