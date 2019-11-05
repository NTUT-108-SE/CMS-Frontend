<template>
  <div>
    <v-navigation-drawer v-model="drawer" dark app clipped>
      <v-list dense>
        <v-list-item>
          <v-list-item-avatar>
            <v-img :src="User.url" v-if="User.url != ''"></v-img>
            <span class="white--text" v-else>{{ User.name }}</span>
          </v-list-item-avatar>

          <v-list-item-title>{{ User.name }}</v-list-item-title>

          <v-btn icon @click.stop="drawer = !drawer">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>
      <v-list>
        <v-list-group
          v-for="item in items"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
          </template>
          <v-list-item
            v-for="subItem in item.items"
            :key="subItem.title"
            link
            :to="subItem.path"
          >
            <v-list-item-content>
              <v-list-item-title v-text="subItem.title"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense color="#fcb69f" dark :src="image">
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(40,84,84,.3), rgba(128,208,199,.9)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center"
        ><span class="title">CMS DashBoard</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon @click="Logout">
        <v-icon>mdi-exit-to-app </v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
@Component
export default class Toolbar extends Vue {
  @State("image", { namespace: "Dashboard" }) image!: String;
  @State("user", { namespace: "User" }) User!: Object;
  @Mutation("User/UserLogout") userLogout!: Function;

  drawer: Boolean = true;
  Logout() {
    if (confirm("確定要離開CMS系統嗎?")) {
      this.userLogout();
      this.$router.push("/");
    }
  }

  items: Array<Object> = [
    {
      icon: "mdi-account-group",
      title: "使用者管理",
      items: [
        { title: "瀏覽使用者帳戶", path: "/admin/account/accountall" },
        { title: "新增使用者帳戶", path: "/admin/account/accountform" }
      ]
    },
    {
      icon: "mdi-account-lock",
      title: "病人資訊管理",
      items: [
        {
          title: "瀏覽病人",
          path: "/admin/patientmanagement/patientmanagement"
        },
        {
          title: "新增病人",
          path: "/admin/patientmanagement/patientmanagementform"
        }
      ]
    },
    {
      icon: "mdi-clipboard-text-outline",
      title: "病歷管理",
      items: [
        { title: "瀏覽病歷", path: "/admin/healthrecord/healthrecord" },
        { title: "新增病歷", path: "/admin/healthrecord/healthrecordform" }
      ]
    },
    {
      icon: "mdi-plus-network-outline",
      title: "掛號管理",
      items: [
        {
          title: "瀏覽掛號",
          path: "/admin/onlineregistration/onlineregistration"
        },
        {
          title: "新增掛號",
          path: "/admin/onlineregistration/onlineregistrationform"
        }
      ]
    },
    {
      icon: "mdi-pill",
      title: "藥品管理",
      items: [
        { title: "瀏覽藥品", path: "/admin/pill/pill" },
        { title: "新增藥品", path: "/admin/pill/pillform" }
      ]
    },
    {
      icon: "mdi-receipt",
      title: "財務管理",
      items: [
        { title: "瀏覽收據", path: "/admin/financial/financial" },
        { title: "新增收據", path: "/admin/financial/financialform" }
      ]
    }
  ];
}
</script>
