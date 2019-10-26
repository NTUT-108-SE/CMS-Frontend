<template>
  <v-footer>
    <v-col class="text-center" cols="12">
      <span class>
        &copy; {{ new Date().getFullYear() }} —
        <strong>NTUT-SELAB</strong>
      </span>
    </v-col>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class layout extends Vue {}
</script>
