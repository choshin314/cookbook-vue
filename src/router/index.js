import Vue from "vue";
import Router from "vue-router";

import store from "@/store";
import RecipeCreate from "@/views/RecipeCreate";
import RecipeView from "@/views/RecipeView";
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
    props: { feedType: "private" },
    meta: {
      requiresAuth: true,
      redirectOnNoAuth: true
    }
  },
  {
    path: "/recipes/create",
    name: "recipe-create",
    component: RecipeCreate,
    meta: {
      requiresAuth: true,
      redirectOnNoAuth: false
    }
  },
  {
    path: "/recipes/view/:id-:slug",
    name: "recipe-view",
    component: RecipeView,
    props: true,
    async beforeEnter(routeTo, routeFrom, next) {
      const { id } = routeTo.params;
      const { recipe, error } = await store.dispatch("recipe/fetchRecipe", id);
      if (recipe) {
        routeTo.params.recipe = recipe;
        next();
      } else {
        next({ path: `/${error}`, params: { referrer: routeFrom.name } });
      }
    }
  },
  {
    path: "/auth/:authMode",
    name: "auth",
    component: Auth,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      if (store.getters["auth/hasAuthData"]) {
        //redirect if already logged in
        next({ name: "home-private" });
      } else if (!["login", "register"].includes(routeTo.params.authMode)) {
        next(false);
        //TODO: Replace this with redirect to 404 not found page
      } else {
        next();
      }
    }
  }
];

const router = new Router({
  mode: "history",
  routes
});

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth && !store.getters["auth/hasAuthData"]) {
    //if protected route but no auth data in store, redirect to login with redirect ref
    //login page will be watching on create for redirectedFrom.
    //if login has redirectedFrom property, will auto clear the store to flush stale tokens
    next({
      name: "auth",
      params: {
        authMode: "login",
        referrer: { name: to.name }
      }
    });
  } else next();
});

export default router;
