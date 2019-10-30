<template>
  <v-app id="login">
    <v-content id="login container">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary" dark flat>
                <v-toolbar-title>Login form</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    autofocus
                    label="Login"
                    name="login"
                    v-model="email"
                    placeholder="user@example.com"
                    prepend-icon="mdi-account"
                    type="text"
                  ></v-text-field>
                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    v-model="password"
                    prepend-icon="mdi-lock"
                    type="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click.stop="onLogin()">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { Mutation } from "vuex-class";

@Component
export default class Login extends Vue {
  @Mutation("User/UserLoaded") userLoaded!: Function;
  private email: string = "";
  private password: string = "";
  onLogin() {
    this.axios
      .post(
        "/login",
        JSON.stringify({
          email: this.email,
          password: this.password
        })
      )
      .then(data => data.data)
      .then(({ user }) => {
        this.$toasted.show(`Login success!! Welcom ${user.name}`, {
          type: "success",
          position: "top-right",
          duration: 3000
        });
        this.userLoaded(user);
        this.$router.push({ name: "admin" });
      })
      .catch(data => {
        this.$toasted.show(`Login failed!!`, {
          type: "error",
          position: "top-right",
          duration: 3000
        });
      });
  }
}
</script>
