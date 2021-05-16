<template>
  <BaseMain>
    <AuthLoginForm v-if="authMode === 'login'" />
    <AuthRegisterForm v-if="authMode === 'register'" />
  </BaseMain>
</template>

<script>
import AuthLoginForm from "@/components/AuthLoginForm";
import AuthRegisterForm from "@/components/AuthRegisterForm";
export default {
  name: "Auth",
  props: {
    authMode: { type: String, required: true }
  },
  components: {
    AuthLoginForm,
    AuthRegisterForm
  }
};
</script>

<style lang="scss" scoped></style>
