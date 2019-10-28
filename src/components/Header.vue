<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">Clinic Management System</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text>
      <router-link to="/" tag="span">Home</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="Registration" tag="span">掛號</router-link>
    </v-btn>
    <v-btn text>
      <router-link to="About" tag="span">About</router-link>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
