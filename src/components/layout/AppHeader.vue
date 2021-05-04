<template>
	<header class="header">
		<base-wrapper>
			<div class="content">
				<router-link to="home" class="logo">
					<div class="logo-img">
						<img src="@/assets/cookbook-logo.png" />
					</div>
					<div class="logo-img-sm">
						<img src="@/assets/cookbook-logo-abbrev.png" />
					</div>
				</router-link>
				<NavBar />
			</div>
		</base-wrapper>
	</header>
</template>

<script>
import NavBar from "../nav/NavBar";

export default {
	name: "AppHeader",
	components: {
		NavBar
	}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
	box-shadow: 0px 4px 8px;
	position: relative;
	z-index: 3;
}

.content-wrapper {
	max-width: 800px;
	margin: 0 auto;
}

.content {
	display: flex;
	justify-content: center;
	@media (min-width: $media-s) {
		justify-content: space-between;
	}
}

.logo {
	margin: auto 0;
	text-align: center;
	flex: 0 1 200px;
}

.logo-img {
	width: 162px;
	height: 40px;
	display: none;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (min-width: $media-m) {
		display: block;
	}
}

.logo-img-sm {
	width: 32px;
	height: 20px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	@media (min-width: $media-s) {
		width: 64px;
		height: 40px;
	}
	@media (min-width: $media-m) {
		display: none;
	}
}
</style>
