import Vue from "vue";
import Router from "vue-router";

import store from '@/store'
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
    props: { feedType: "private" },
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/recipes/create",
    name: "create-recipe",
    component: RecipeCreate,
    meta: {
      requiresAuth: true
    }
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

router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!store.getters['auth/hasAuthData']) {
      //if protected route but no auth data in store, redirect to login with redirect ref
      //login page will be watching on create for redirectedFrom. 
      //if login has redirectedFrom property, will auto clear the store to flush stale tokens
      next({ name: 'auth-login', redirectedFrom: { name: to.name }})
    } else {
      //send request
      //if rejected (after attempting refresh), redirect
      try {
        //
      } catch (err) {
        if (err.response.status === 401 || err.response.status === 403) {
          //if 
          next({ name: 'auth-login', redirectedFrom: { name: to.name }})
        }
      }
    }
  } else next() 
}))

export default router;
