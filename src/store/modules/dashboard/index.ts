import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { DashboardState } from "./types";
import { RootState } from "@/store/types";

export const state: DashboardState = {
  drawer: false,
  color: "success",
  image:
    "https://demos.creative-tim.com/vue-material-dashboard/img/sidebar-2.32103624.jpg"
};

const namespaced: boolean = true;
export const Dashboard: Module<DashboardState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
