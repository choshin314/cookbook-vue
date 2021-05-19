<template>
  <div class="input-container">
    <label :for="$attrs.id" v-if="label" class="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      :id="$attrs.id || $attrs.name || ''"
      class="input"
      :value="value"
      v-on="listeners"
    />
  </div>
</template>

<script>
import inputMixin from "@/mixins/inputMixin";
export default {
  mixins: [inputMixin],
  name: "BaseInput"
};
</script>

<style lang="scss" scoped>
.input-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: $space-m;
}

.label {
  font-weight: 500;
  margin-top: $space-s;
  margin-bottom: $space-s;
}

.input {
  border: none;
  font-family: inherit;
  font-size: inherit;
  line-height: 1.25;
  padding: $space-s;
  border-bottom: 2px solid $med-lite-grey;
  flex: auto;
  &[type="number"] {
    -moz-appearance: textfield;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
}
</style>
