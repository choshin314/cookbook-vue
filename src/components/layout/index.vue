<template>
	<div class="single-column">
		<AppHeader />
		<div class="three-column">
			<aside></aside>
			<slot></slot>
			<div></div>
		</div>
		<AppFooter />
	</div>
</template>

<script>
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";

export default {
	name: "Layout",
	components: {
		AppHeader,
		AppFooter
	}
};
</script>

<style lang="scss" scoped>
.single-column {
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	height: 100%;
}

.three-column {
	flex: 1 0 auto;
	display: flex;
	width: 100%;
	aside,
	& > *:last-child {
		flex: auto;
		position: relative;
	}
}
</style>
