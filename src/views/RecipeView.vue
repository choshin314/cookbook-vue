<template>
  <base-main>
    <base-wrapper>
      <section>
        <div class="recipe-header">
          <h1 class="recipe-title">{{ recipe.title }}</h1>
        </div>
      </section>
      <RecipeViewIntro :recipe="recipe" />
      <section class="recipe-section">
        ingredients
      </section>
      <section class="recipe-section">
        instructions
      </section>
      <section class="recipe-section">
        tags
      </section>
      <section class="recipe-section">
        reviews
      </section>
    </base-wrapper>
  </base-main>
</template>

<script>
import RecipeViewIntro from "@/components/RecipeViewIntro";
export default {
  name: "RecipeView",
  components: {
    RecipeViewIntro
  },
  props: {
    recipe: { type: Object, required: true }
  }
};
</script>

<style lang="scss" scoped>
.recipe-header {
  display: flex;
  justify-content: space-between;
  position: relative;
}
.recipe-title {
  font-size: $font-l;
  margin-bottom: $space-s;
  text-align: left;
  @media (min-width: $media-m) {
    font-size: $font-xl;
    margin-bottom: $space-m;
  }
}
</style>
