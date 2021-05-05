import Vue from "vue";
import Router from "vue-router";

import RecipeCreate from "@/views/RecipeCreate";

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
	}
];

const router = new Router({
	mode: "history",
	routes
});

export default router;
