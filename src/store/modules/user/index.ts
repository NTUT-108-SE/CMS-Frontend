import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState } from "./types";
import { RootState } from "@/store/types";

export const state: UserState = {
  user: undefined,
  error: false
};

const namespaced: boolean = true;
export const User: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
