<template>
  <v-container class="grey lighten-5">
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      :href="item.href"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
  </v-container>

  

</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Centered from "@/components/Centered.vue";

@Component
export default class Home extends Vue {
   data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            href:'https://google.com',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            href:'https://google.com',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            href:'https://google.com',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
            href:'https://google.com',
          },
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    };
}
</script>
