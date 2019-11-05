<template>
  <v-container class="grey lighten-5">
    <v-row>
      <v-carousel>
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          :href="item.href"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </v-row>
    <v-row class="py-2"></v-row>
    <v-row justify="center">
      <v-col md="2">
        <v-card class="elevation-12">
          <RegistrationInfo />
        </v-card>
      </v-col>
      <v-col md="6">
        <v-card class="elevation-12">
          <LastestNewsSheet />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Centered from "@/components/Centered.vue";
import RegistrationInfo from "@/components/RegistrationInfo.vue";
import LastestNewsSheet from "@/components/LastestNewsSheet.vue";

@Component({ components: { RegistrationInfo, LastestNewsSheet } })
export default class Home extends Vue {
  data() {
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4"
      ],
      items: [
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          href: "https://google.com"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          href: "https://google.com"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          href: "https://google.com"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          href: "https://google.com"
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
}
</script>
