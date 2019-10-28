import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout.vue";
import Home from "@/views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home
      },
      {
        path: "/about",
        name: "about",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/About.vue")
      },
      {
        path: "/registration",
        name: "registration",
        component: () => import("@/views/Registration.vue")
      }
    ]
  },
  {
    path: "/admin",
    component: () => import("@/views/admin/Layout.vue"),
    children: [
      {
        path: "account",
        name: "account",
        component: () => import("@/views/admin/Account.vue")
      },
      {
        path: "pill",
        name: "pill",
        component: () => import("@/views/admin/Pill.vue")
      },
      {
        path: "patientmanagement",
        name: "patientmanagement",
        component: () => import("@/views/admin/PatientManagement.vue")
      },
      {
        path: "healthrecord",
        name: "healthrecord",
        component: () => import("@/views/admin/HealthRecord.vue")
      },
      {
        path: "financial",
        name: "financial",
        component: () => import("@/views/admin/Financial.vue")
      },
      {
        path: "onlineregistration",
        name: "onlineregistration",
        component: () => import("@/views/admin/OnlineRegistration.vue")
      }
    ]
  },
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/Login.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
