import Vue from "vue";
import Router from "vue-router";

import RecipeCreate from "@/views/RecipeCreate";
import Auth from "@/views/Auth";

Vue.use(Router);

const routes = [
  {
    path: "/",
    redirect: "/feeds/top"
  },
  {
    path: "/feeds",
    redirect: "/feeds/top"
  },
  {
    path: "/feeds/top",
    name: "home-public",
    props: { feedType: "public" }
  },
  {
    path: "/feeds/home",
    name: "home-private",
    props: { feedType: "private" }
  },
  {
    path: "/recipes/create",
    name: "create-recipe",
    component: RecipeCreate
  },
  {
    path: "/account/login",
    name: "auth-login",
    component: Auth,
    props: { authMode: "login" }
  },
  {
    path: "/account/register",
    name: "auth-register",
    component: Auth,
    props: { authMode: "register" }
  }
];

const router = new Router({
  mode: "history",
  routes
});

export default router;
