<template>
  <section class="recipe-section">
    <h2 v-if="subtitle" class="recipe-subtitle">{{ subtitle }}</h2>
    <slot></slot>
  </section>
</template>

<script>
export default {
  name: "RecipeSection",
  props: { subtitle: { type: String, required: false } }
};
</script>

<style scoped lang="scss">
.recipe-subtitle {
  text-align: left;
  margin: $space-m 0;
  font-size: $font-l;
  @media (min-width: $media-l) {
    margin: $space-l 0;
  }
}
.recipe-section {
  position: relative;
  padding-top: $space-m;
  padding-bottom: $space-m;
  line-height: 1.5;
  font-size: $font-m;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    margin: 0 auto;
    width: calc(100% - 2rem);
    height: 2px;
    background-color: $lite-grey;
    border-radius: 5px;
  }
}
</style>
