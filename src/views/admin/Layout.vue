<template>
  <v-app id="inspire">
    <Toolbar />
    <transition>
      <keep-alive>
        <v-content>
          <router-view></router-view>
        </v-content>
      </keep-alive>
    </transition>
    <Footer :dark="true" />
  </v-app>
</template>

<script lang="ts">
import Toolbar from "@/components/admin/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import { Vue, Component } from "vue-property-decorator";
import { State } from "vuex-class";

@Component({ components: { Footer, Toolbar } })
export default class Layout extends Vue {
  @State("user", { namespace: "User" }) user!: Object;
  beforeRouteEnter(to: any, from: any, next: (vm: any) => void) {
    next((vm: any) => {
      if (vm.user == undefined) {
        vm.$router.push("/login");
      }
    });
  }
}
</script>
