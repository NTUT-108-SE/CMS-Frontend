<template>
  <h1>This is a Home page</h1>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Centered from "@/components/Centered.vue";

@Component
export default class Home extends Vue {}
</script>
