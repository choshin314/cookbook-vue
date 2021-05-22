<template>
  <div class="quick-facts">
    <table class="quick-facts__table">
      <caption>
        Recipe Time and Yield
      </caption>
      <thead>
        <tr>
          <th scope="col">Prep</th>
          <th scope="col">Cook</th>
          <th scope="col">Total</th>
          <th scope="col">Serves</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ prepTime }} mins</td>
          <td>{{ cookTime }} mins</td>
          <td>{{ totalTime }} mins</td>
          <td>{{ servings }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "RecipeViewIntroFactTable",
  props: {
    prepTime: { type: Number, required: true },
    cookTime: { type: Number, required: true },
    servings: { type: Number, required: true }
  },
  computed: {
    totalTime() {
      return this.prepTime + this.cookTime;
    }
  }
};
</script>

<style scoped lang="scss">
.quick-facts {
  background-color: $lite-grey;
  padding: 1rem 0.5rem;
  border-radius: 5px;
  position: relative;
}

.quick-facts__table {
  border-radius: 5px;
  width: 100%;
  font-size: $font-s;
  caption {
    margin-bottom: $space-xs;
    font-size: $font-m;
    font-weight: 500;
  }
  tr {
    display: grid;
    grid-template-columns: repeat(4, minmax(10px, 1fr));
    text-align: center;
  }

  thead {
    background-color: $primary;
    color: white;
  }
  tbody {
    background-color: white;
  }

  td,
  th {
    padding: $space-s $space-m;
  }

  @media (min-width: $media-m) {
    font-size: $font-m;
  }
}
</style>
