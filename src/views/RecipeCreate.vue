<template>
	<base-main>
		<base-card class="form-wrapper">
			<form class="form" @submit.prevent="handleSubmit">
				<RecipeFormPageOne
					:recipe="recipe"
					:handleInput="handleInput"
				/>
				<div class="button-div">
					<base-button
						class="button-primary"
						:iconLeft="['fas', 'home']"
						>Home</base-button
					>
					<base-button
						type="submit"
						class="button-accent"
						:iconLeft="['fas', 'home']"
						>Home</base-button
					>
				</div>
			</form>
		</base-card>
	</base-main>
</template>

<script>
import RecipeFormPageOne from "../components/recipeForm/RecipeFormPageOne";
export default {
	data() {
		return {
			recipe: this.resetRecipe()
		};
	},
	components: {
		RecipeFormPageOne
	},
	methods: {
		resetRecipe() {
			return {
				title: "",
				intro: "",
				prepTime: "",
				cookTime: "",
				servings: "",
				coverImg: "",
				instructions: [],
				ingredients: [],
				tags: []
			};
		},
		handleInput(event) {
			const { name, value, files } = event.target;
			this.recipe[name] = value;
			if (files) {
				this.recipe[name] = files;
			}
		},
		handleSubmit() {
			console.log(this.recipe);
		}
	}
};
</script>

<style lang="scss">
.form-wrapper {
	margin-top: $space-m;
}

.form {
	padding: $space-m;
	position: relative;
	display: flex;
	flex-direction: column;
	border-radius: 5px;
	@media (min-width: $media-m) {
		padding: $space-l;
	}
}

.button-div {
	display: flex;
	justify-content: space-between;
}

.form-button {
	background: blue;
}
</style>
