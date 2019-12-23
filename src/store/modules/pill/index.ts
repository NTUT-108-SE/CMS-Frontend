import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { PillState } from "./types";
import { RootState } from "@/store/types";

export const state: PillState = {
  pill: undefined,
  error: false
};

const namespaced: boolean = true;
export const Pill: Module<PillState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
