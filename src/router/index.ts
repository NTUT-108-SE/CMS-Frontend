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
          path: "account/accountall",
          name: "account/accountall",
          component: () => import("@/views/admin/account/AccountAll.vue")
        },
        {
          path: "account/accounttemp",
          name: "account/accounttemp",
          component: () => import("@/views/admin/account/AccountTemp.vue")
        },
        {
          path: "financial/financialtemp",
          name: "financial/financialtemp",
          component: () => import("@/views/admin/financial/FinancialTemp.vue")
        },
        {
          path: "financial/financial",
          name: "financial/financial",
          component: () => import("@/views/admin/financial/Financial.vue")
        },
        {
          path:"pill/pill",
          name:"pill/pill",
          component: () => import("@/views/admin/pill/Pill.vue")
        },
        {
          path:"pill/pilltemp",
          name:"pill/pilltemp",
          component: () => import("@/views/admin/pill/PillTemp.vue")
        },
        {
          path:"healthrecord/healthrecord",
          name:"healthrecord/healthrecord",
          component: () => import("@/views/admin/healthrecord/HealthRecord.vue")
        },
        {
          path:"healthrecord/healthrecordtemp",
          name:"healthrecord/healthrecordtemp",
          component: () => import("@/views/admin/healthrecord/HealthRecordTemp.vue")
        },
        {
          path:"onlineregistration/onlineregistration",
          name:"onlineregistration/onlineregistration",
          component: () => import("@/views/admin/onlineregistration/OnlineRegistration.vue")
        },
        {
          path:"onlineregistration/onlineregistrationtemp",
          name:"onlineregistration/onlineregistrationtemp",
          component: () => import("@/views/admin/onlineregistration/OnlineRegistrationTemp.vue")
        },
        {
          path:"patientmanagement/patientmanagement",
          name:"patientmanagement/patientmanagement",
          component: () => import("@/views/admin/patientmanagement/PatientManagement.vue")
        },
        {
          path:"patientmanagement/patientmanagementtemp",
          name:"patientmanagement/patientmanagementtemp",
          component: () => import("@/views/admin/patientmanagement/PatientManagementTemp.vue")
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
