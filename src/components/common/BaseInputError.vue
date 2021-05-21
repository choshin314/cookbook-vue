<template>
  <span v-if="!!errorMsg" class="inputError">
    {{ errorMsg }}
  </span>
</template>

<script>
export default {
  name: "BaseInputError",
  props: { errorMsg: String }
};
</script>

<style scoped lang="scss">
.inputError {
  color: red;
  font-size: $font-s;
}
</style>
