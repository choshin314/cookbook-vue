<template>
	<div class="card">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: "BaseCard"
};
</script>

<style lang="scss" scoped>
.card {
	border-radius: 5px;
	position: relative;
	box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
