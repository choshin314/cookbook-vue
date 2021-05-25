<template v-show="someError">
  <div class="form-errors">
    <template v-if="errorCategory === 'input'">
      <h6 class="form-errors__heading">Uh oh! Please fix the following:</h6>
      <ul class="form-errors__list">
        <li class="form-errors__item" v-for="err of errors" :key="err.field">
          {{ err.messageLong }}
        </li>
      </ul>
    </template>
    <template v-else-if="errorCategory === 'server'">
      <p class="form-errors__heading">{{ serverError }}</p>
    </template>
    <template v-else></template>
  </div>
</template>

<script>
export default {
  name: "FormErrors",
  props: { 
    inputErrors: { type: Array, required: true } ,
    serverError: { type: String, required: true }
    },
  computed: {
    errorCategory() {
      if (this.inputErrors.length) return 'input'
      if (this.serverError) return 'server'
      return null
    },
    someError() {
      return !!this.inputErrors.length || !!this.serverError
    }
  }
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
