<template>
  <v-app-bar app>
    <v-toolbar-title class="headline text-uppercase">
      <span class="font-weight-light">Clinic Management System</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn
      text
      href="https://github.com/NTUT-108-SE/CMS-Frontend"
      target="_blank"
    >
      <span class="mr-2">Github</span>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>
