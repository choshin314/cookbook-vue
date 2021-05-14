<template>
	<div class="container">
		<section>
			<div>
				<label for="cover-img-input">Select File</label>
				<div class="preview-div" v-if="previewImg">
					<img :src="previewImg" alt="" />
				</div>
				<input
					id="cover-img-input"
					name="coverImg"
					type="file"
					accept="image/png, image/jpeg, image/jpg"
					@input="handleInput"
					:files="recipe.coverImg"
				/>
			</div>
		</section>
		<section>
			<base-input
				name="title"
				type="text"
				label="Recipe Title"
				placeholder="What are we making?"
				@input="handleInput"
				:value="recipe.title"
			/>
			<base-textarea
				name="intro"
				label="Introduction"
				rows="8"
				placeholder="Give a short and sweet intro about your recipe"
				@input="handleInput"
				:value="recipe.intro"
			/>
		</section>
		<section></section>
		<section>
			<div class="recipe-times">
				<base-input
					type="number"
					label="Prep (Mins.)"
					min="1"
					id="prep-time"
					name="prepTime"
					@input="handleInput"
					:value="recipe.prepTime"
				/>
				<base-input
					id="cook-time"
					name="cookTime"
					type="number"
					label="Cook (Mins.)"
					min="1"
					@input="handleInput"
					:value="recipe.cookTime"
				/>
				<base-input
					name="servings"
					type="number"
					label="Servings"
					min="1"
					@input="handleInput"
					:value="recipe.servings"
				/>
			</div>
		</section>
	</div>
</template>

<script>
export default {
	name: "RecipeFormPageOne",
	props: {
		recipe: Object,
		handleInput: Function
	},
	methods: {
		// handleInput(event) {
		// 	const { name, value, files } = event.target;
		// 	this.recipe[name] = value;
		// 	if (files) {
		// 		this.recipe[name] = files;
		// 	}
		// }  move this up to main RecipeCreate
	},
	computed: {
		previewImg: function() {
			if (this.recipe.coverImg) {
				return URL.createObjectURL(this.recipe.coverImg[0]);
			}
			return "";
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

.preview-div {
	overflow: hidden;
	& > img {
		object-fit: cover;
		height: 100%;
		width: 100%;
	}
}
</style>
