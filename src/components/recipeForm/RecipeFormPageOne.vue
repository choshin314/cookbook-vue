<template>
	<div class="container">
		<section>
			<label for="file-input">Select File</label>
			<input
				id="file-input"
				type="file"
				accept="image/png, image/jpeg, image/jpg"
				@input="handleFileInput"
				:files="recipe.coverImg"
			/>
		</section>
		<section>
			<base-input
				id="title"
				type="text"
				label="Recipe Title"
				placeholder="What are we making?"
				v-model="recipe.title"
			/>
			<base-textarea
				id="intro"
				label="Introduction"
				rows="8"
				placeholder="Give a short and sweet intro about your recipe"
				v-model="recipe.intro"
			/>
		</section>
		<section></section>
		<section>
			<div class="recipe-times">
				<base-input
					type="number"
					label="Prep (Mins.)"
					min="1"
					v-model="recipe.prepTime"
				/>
				<base-input
					type="number"
					label="Cook (Mins.)"
					min="1"
					v-model="recipe.cookTime"
				/>
				<base-input
					type="number"
					label="Servings"
					min="1"
					v-model="recipe.servings"
				/>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "RecipeFormPageOne",
	props: {
		recipe: Object
	},
	methods: {
		handleFileInput(event) {
			if (event.target.files && event.target.files.length) {
				this.recipe.coverImg = event.target.files;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
.container {
	display: grid;

	gap: $space-s;
	@media (min-width: $media-m) {
		gap: $space-m;
		grid-template-columns: 50% 50%;
		grid-template-rows: 1fr 1fr;
	}
}

.recipe-times {
	display: flex;
	justify-content: space-between;
	& > div {
		flex: 0 1 30%;
		max-width: 30%;
		& input {
			width: 100%;
		}
	}
}
</style>
