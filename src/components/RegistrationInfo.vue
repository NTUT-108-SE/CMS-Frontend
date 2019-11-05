<template>
  <div>
    <v-card-title class="py-2" color="grey">
      看診資訊
    </v-card-title>

    <v-divider class="mx-4"></v-divider>

    <v-row>
      <v-card-text class="py-2 px-6">
        看診醫生： {{ registrationInfoContent.doctorName }}
      </v-card-text>
    </v-row>

    <v-row>
      <v-card-text class="py-2 px-6">
        今日掛號人數： {{ registrationInfoContent.totleRegistration }}
      </v-card-text>
    </v-row>

    <v-row>
      <v-card-text class="py-2 px-6 pb-4">
        目前看診進度： {{ registrationInfoContent.nowRegistration }}
      </v-card-text>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class RegistrationInfo extends Vue {
  registrationInfoContent: Object = {
    doctorName: "黃俊凱",
    totleRegistration: 87,
    nowRegistration: 78
  };
}
</script>
