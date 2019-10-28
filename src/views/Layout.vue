<template>
  <v-app>
    <Header />
    <v-content>
      <transition>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </transition>
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { Vue, Component } from "vue-property-decorator";

@Component({ components: { Header, Footer } })
export default class Layout extends Vue {}
</script>
