<template>
  <AuthForm @submit.prevent="$emit('submitting-form')">
    <template #formErrors>
      <FormErrors :inputErrors="inputErrors" :serverError="serverError" />
    </template>
    <div class="input-row">
      <base-input
        type="text"
        label="Username or Email"
        name="emailUsername"
        v-model="values.emailUsername"
      />
    </div>
    <div class="input-row">
      <base-input
        type="password"
        label="Password"
        name="password"
        v-model="values.password"
      />
    </div>
    <base-button type="submit" variant="primary">Sign In</base-button>
    <router-link
      :to="{ name: 'auth', params: { authMode: 'register' } }"
      class="form-link"
      >Don't have an account? Sign up for free</router-link
    >
  </AuthForm>
</template>

<script>
import AuthForm from "./AuthForm";
import FormErrors from "./FormErrors.vue";

export default {
  name: "AuthLoginForm",
  components: { AuthForm, FormErrors },
  props: {
    values: { type: Object, required: true },
    inputErrors: { type: Array, required: true },
    serverError: { type: String, required: true }
  }
};
</script>

<style lang="scss" scoped>
.input-row {
  margin-bottom: $space-m;
}

.form-link {
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: $space-s;
}
</style>
