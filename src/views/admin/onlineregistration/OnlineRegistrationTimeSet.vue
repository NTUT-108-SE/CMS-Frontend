<template>
  <v-container class="fill-height">
    <v-row justify="center" align="center">
      <v-col md="6">
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>掛號時間設定</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <v-container>
              <v-form class="py-3">
                <v-row justify="center">
                  <v-col md="6">
                    <v-menu
                      ref="menu"
                      v-model="menu2"
                      :close-on-content-click="false"
                      :nudge-right="40"
                      :return-value.sync="time"
                      transition="scale-transition"
                      offset-y
                      max-width="290px"
                      min-width="290px"
                    >
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          v-model="time"
                          label="掛號終止時間"
                          prepend-icon="mdi-clock-outline "
                          :rules="[() => !!time || '必須填入']"
                          readonly
                          v-on="on"
                          dense
                          outlined
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        v-if="menu2"
                        v-model="time"
                        full-width
                        @click:minute="$refs.menu.save(time)"
                      ></v-time-picker>
                    </v-menu>
                  </v-col>
                </v-row>
                <v-row justify="center pb-3">
                  <v-btn class="mx-12" dark color="primary" @click="edit">
                    <v-icon left>mdi-send-check</v-icon>
                    設定
                  </v-btn>
                  <v-btn class="mx-12" @click="Close" dark color="red">
                    <v-icon left>mdi-close </v-icon>
                    關閉
                  </v-btn>
                  <v-btn class="mx-12" @click="Clear" dark color="secondary">
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
export default class OnlineRegistrationTimeSet extends Vue {
  menu2: boolean = false;
  time = null;
}
</script>
