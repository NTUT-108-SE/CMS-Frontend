import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { Dashboard } from "./modules/dashboard/index";
import { User } from "./modules/user/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: { Dashboard, User }
};
export default new Vuex.Store<RootState>(store);
