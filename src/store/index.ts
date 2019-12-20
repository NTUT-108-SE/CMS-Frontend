import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { Dashboard } from "./modules/dashboard/index";
import { User } from "./modules/user/index";
import { Loader } from "./modules/loader/index";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);
const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
});

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0"
  },
  modules: { Dashboard, User, Loader },
  plugins: [vuexLocal.plugin]
};

export default new Vuex.Store<RootState>(store);
