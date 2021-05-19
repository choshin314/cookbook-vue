<template>
  <div class="container">
    <section>
      <base-file-input
        name="coverImg"
        label="Cover Image"
        v-model="recipe.coverImg"
      />
    </section>
    <section>
      <base-input
        name="title"
        type="text"
        label="Recipe Title"
        placeholder="What are we making?"
        v-model="recipe.title"
      />
      <base-textarea
        name="intro"
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
          id="prep-time"
          name="prepTime"
          step="1"
          :noDecimals="true"
          v-model.number="recipe.prepTime"
        />
        <base-input
          id="cook-time"
          name="cookTime"
          type="number"
          label="Cook (Mins.)"
          min="1"
          step="1"
          :noDecimals="true"
          v-model.number="recipe.cookTime"
        />
        <base-input
          name="servings"
          type="number"
          label="Servings"
          min="1"
          step="1"
          :noDecimals="true"
          v-model.number="recipe.servings"
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
