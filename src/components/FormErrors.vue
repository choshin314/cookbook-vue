<template>
  <div class="form-errors">
    <h6 class="form-errors__heading">Uh oh! Please fix the following:</h6>
    <ul class="form-errors__list">
      <li class="form-errors__item" v-for="err of errors" :key="err.field">
        {{ err.messageLong }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: { errors: { type: Array, required: false } }
};
</script>

<style scoped lang="scss">
.form-errors {
  padding: $space-m;
  padding-left: $space-l;
  color: red;
}
.form-errors__heading {
  font-size: $font-s;
  margin: $space-s 0;
}
.form-errors__list {
  list-style: square;
  color: inherit;
  font-size: $font-s;
}
.form-errors__item {
  font-size: $font-s;
}
</style>
