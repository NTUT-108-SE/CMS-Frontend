<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="5">
        <v-card>
          <v-form class="py-3" v-model="valid">
            <v-row justify="center">
              <v-col md="5">
                <v-text-field
                  label="病人身分證"
                  v-model="id"
                  :rules="[
                    () => !!account || '病人身分證必須填入',
                    () => account.length == 10 || '必須是10個字元'
                  ]"
                  :counter="10"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-text-field
                  label="姓名"
                  v-model="name"
                  :rules="[() => !!name || '必須填入']"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-select
                  v-model="select"
                  :items="gender"
                  :rules="[() => !!select || '必須填入']"
                  label="性別"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-text-field
                  label="電話"
                  v-model="telecome"
                  :rules="[() => !!telecome || '必須填入']"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-text-field
                  label="生日"
                  v-model="brithDay"
                  :rules="[() => !!brithDay || '必須填入']"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-text-field
                  label="地址"
                  v-model="address"
                  :rules="[() => !!address || '必須填入']"
                  clearable
                  outlined
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="center">
              <v-col md="5">
                <v-btn class="mr-4" @click="submit">送出</v-btn>
                <v-btn @click="clear">清除</v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Account extends Vue {
  valid: boolean = true;
  select: string = "";
  gender: Object = ["男", "女"];
  permission: Object = ["admin", "doctor", "employee"];
}
</script>
