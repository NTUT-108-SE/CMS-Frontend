<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Login from "@/views/Login.vue";

@Component({ components: { Login } })
export default class App extends Vue {}
</script>
