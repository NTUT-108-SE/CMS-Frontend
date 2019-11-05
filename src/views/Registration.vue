<template>
  <v-container class="grey lighten-5">
    <v-row justify="center">
      <v-col md="2">
        <v-card class="elevation-12">
          <RegistrationInfo />
        </v-card>
      </v-col>

      <v-col md="6">
        <v-card class="elevation-12"
          ><!--
          <v-toolbar dark color="primary">
            <v-toolbar-title>掛號</v-toolbar-title>
          </v-toolbar>-->
          <v-card-title class="py-2" color="grey">
            掛號
          </v-card-title>
          <v-divider class="mx-4"></v-divider>
          <v-form class="py-3">
            <v-row justify="center">
              <v-col md="6">
                <v-text-field
                  label="身分證字號"
                  prepend-icon="mdi-account-card-details-outline"
                  v-model="id"
                  placeholder="ex:A000000000"
                  :rules="[() => !!id || '必須填入']"
                  clearable
                  dense
                  outlined
                  rounded
                ></v-text-field>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col md="6">
                <v-menu
                  ref="birthMenu"
                  v-model="birthMenu"
                  :close-on-content-click="false"
                  :return-value.sync="birthDate"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="birthDate"
                      label="出生日期"
                      prepend-icon="mdi-calendar-blank"
                      readonly
                      v-on="on"
                      dense
                      outlined
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="birthDate"
                    no-title
                    scrollable
                    min="1900-01-01"
                    max="2019-11-29"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="birthMenu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.birthMenu.save(birthDate)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row justify="center">
              <v-col md="6">
                <v-menu
                  ref="treatMenu"
                  v-model="treatMenu"
                  :close-on-content-click="false"
                  :return-value.sync="treatDate"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="treatDate"
                      label="看診日期"
                      prepend-icon="mdi-calendar-blank"
                      readonly
                      v-on="on"
                      dense
                      outlined
                      rounded
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="treatDate"
                    no-title
                    scrollable
                    min="2019-10-29"
                    max="2019-11-29"
                  >
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="treatMenu = false"
                      >Cancel</v-btn
                    >
                    <v-btn
                      text
                      color="primary"
                      @click="$refs.treatMenu.save(treatDate)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
            </v-row>

            <v-row justify="center pb-3">
              <v-btn
                rounded
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
                rounded
                class="mx-12"
                @click="clear"
                v-if="action == 'add'"
                dark
                color="secondary"
              >
                <v-icon left>mdi-autorenew</v-icon>
                清除
              </v-btn>
            </v-row>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import RegistrationInfo from "@/components/RegistrationInfo.vue";

@Component({ components: { RegistrationInfo } })
export default class Registration extends Vue {
  action: string = "add";
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      treatDate: new Date().toISOString().substr(0, 10),
      birthDate: "1900-01-01",
      treatMenu: false,
      birthMenu: false
    };
  }
}
</script>
