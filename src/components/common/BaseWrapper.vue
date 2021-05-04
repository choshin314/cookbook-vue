<template>
	<section class="wrapper">
		<slot></slot>
	</section>
</template>

<script>
export default {
	name: "BaseWrapper"
};
</script>

<style lang="scss" scoped>
.wrapper {
	width: 100%;
	max-width: $media-m;
	margin: 0 auto;
	position: relative;
	padding: 0.5rem 1rem;
	@media (min-width: $media-l) {
		padding: 0.5rem 0;
	}
}
</style>
