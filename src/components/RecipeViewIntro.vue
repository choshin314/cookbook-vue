<template>
  <RecipeViewSection>
    <div class="cover-img">
      <div class="cover-img__box">
        <img :src="recipe.coverImg" :alt="coverImgAlt" />
      </div>
    </div>
    <div class="intro-text">
      <p>{{ recipe.intro }}</p>
    </div>
    <RecipeViewIntroFactTable
      :prepTime="recipe.prepTime"
      :cookTime="recipe.cookTime"
      :servings="recipe.servings"
    />
  </RecipeViewSection>
</template>

<script>
import RecipeViewSection from "./RecipeViewSection";
import RecipeViewIntroFactTable from "./RecipeViewIntroFactTable";
export default {
  name: "RecipeViewIntro",
  components: { RecipeViewIntroFactTable, RecipeViewSection },
  props: {
    recipe: { type: Object, required: true }
  },
  computed: {
    coverImgAlt() {
      return `Finished result of recipe: ${this.recipe.title}`;
    }
  }
};
</script>

<style lang="scss" scoped>
.cover-img {
  margin-bottom: 1rem;
  width: 100%;
  height: 0px;
  padding-top: 60%;
  position: relative;
}
.cover-img__box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  & > img {
    object-fit: cover;
    height: 100%;
    width: 100%;
  }
}
.intro-text {
  margin-bottom: $space-m;
  position: relative;
  padding: $space-s 0;
}
</style>
