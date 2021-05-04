import Vue from "vue";
import Router from "vue-router";

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
	}
];

const router = new Router({
	mode: "history",
	routes
});

export default router;
