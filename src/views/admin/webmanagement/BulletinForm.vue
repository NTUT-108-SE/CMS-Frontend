<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>新增公告</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="">
                  <v-col md="6">
                    <v-text-field
                      label="公告標題"
                      prepend-icon="mdi-bulletin-board"
                      v-model="bulletinTitle"
                      :rules="[() => !!bulletinTitle || '必須填入']"
                      clearable
                      dense
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row justify="">
                  <v-col md="12">
                    <v-textarea
                      label="公告內容"
                      prepend-icon="mdi-file-document-edit-outline"
                      v-model="bulletinContent"
                      :rules="[() => !!bulletinContent || '必須填入']"
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
export default class BulletinForm extends Vue {
  bulletinContent: string = "";
  bulletinTitle: string = "";
  action: string = "add";

  clear() {}
}
</script>
