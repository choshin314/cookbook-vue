<template>
  <BaseMain>
    <AuthLoginFormContainer v-if="authMode === 'login'" />
    <AuthRegisterFormContainer v-else-if="authMode === 'register'" />
    {{ referrer }}
  </BaseMain>
</template>

<script>
import AuthLoginFormContainer from "@/components/AuthLoginFormContainer";
import AuthRegisterFormContainer from "@/components/AuthRegisterFormContainer";
export default {
  name: "Auth",
  props: {
    authMode: { type: String, required: true },
    referrer: { type: String }
  },
  components: {
    AuthLoginFormContainer,
    AuthRegisterFormContainer
  }
};
</script>

<style lang="scss" scoped></style>
