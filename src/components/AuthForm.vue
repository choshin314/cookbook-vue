<template>
  <base-card class="form-wrapper">
    <h1 class="form-title">
      <img src="@/assets/cookbook-logo.png" alt="cookbook" />
    </h1>
    <slot name="formErrors"></slot>
    <form class="form" v-bind="$attrs" v-on="$listeners" novalidate="true">
      <slot></slot>
    </form>
  </base-card>
</template>

<script>
export default {
  name: "AuthForm",
  inheritAttrs: false
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  margin: $space-m auto;
  position: relative;
  max-width: 400px;
  padding: $space-m;
}

.form-title {
  text-align: center;
}

.form {
  background-color: #fff;
  border-radius: 5px;
  position: relative;
  @media (min-width: $media-m) {
    padding: $space-m $space-l;
  }
  display: flex;
  flex-direction: column;
}
</style>
