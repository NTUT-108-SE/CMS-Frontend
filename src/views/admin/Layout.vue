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
    <Loader />
    <Footer :dark="true" />
  </v-app>
</template>

<script lang="ts">
import Loader from "@/components/admin/Loader.vue";
import Toolbar from "@/components/admin/Toolbar.vue";
import Footer from "@/components/Footer.vue";
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";

@Component({ components: { Footer, Toolbar, Loader } })
export default class Layout extends Vue {
  @State("user", { namespace: "User" }) user!: Object;
  @Mutation("User/UserLogout") userLogout!: Function;
  beforeRouteEnter(to: any, from: any, next: (vm: any) => void) {
    next((vm: any) => {
      if (vm.user == undefined) {
        vm.$router.push("/login");
      }
    });
  }
  beforeRouteUpdate() {
    this.axios
      .get("/check")
      .then(data => data.data)
      .catch(data => {
        this.userLogout();
        this.$toasted.show(`登入失效，請重新登入`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
        this.$router.push("/login");
      });
  }
}
</script>
