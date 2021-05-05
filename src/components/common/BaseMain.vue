<template>
	<main class="main">
		<slot></slot>
	</main>
</template>

<script>
export default {
	name: "BaseMain"
};
</script>

<style lang="scss" scoped>
.main {
	width: 100%;
	max-width: $media-m;
	position: relative;
	padding: 1rem 0;
	@media (min-width: $media-m) {
		margin: 1rem 0;
	}
}
</style>
