<template>
	<footer class="footer">
		<p>
			{{ "Cookbook was created by " }}
			<a href="https://www.shincho.me" target="_blank" rel="noreferrer"
				>Shin Cho</a
			>
		</p>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
	padding: 1rem 0;
	background-color: var(--lite-grey);
	text-align: center;
	font-size: 1rem;
	a {
		font-weight: 600;
	}
}
</style>
