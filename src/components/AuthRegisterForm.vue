<template>
  <AuthForm @submit.prevent="$emit('submitting-form')">
    <template #formErrors v-if="errors.length">
      <FormErrors :errors="errors" />
    </template>
    <div class="grid-row">
      <base-input
        type="text"
        label="First Name"
        name="firstName"
        v-model="values.firstName"
      />
      <base-input
        type="text"
        label="Last Name"
        name="lastName"
        v-model="values.lastName"
      />
    </div>
    <div class="grid-row">
      <base-input
        type="text"
        label="Username"
        name="username"
        v-model="values.username"
      />
      <base-input
        type="email"
        label="Email Address"
        name="email"
        v-model="values.email"
      />
    </div>
    <div class="grid-row">
      <base-input
        type="password"
        label="Password"
        name="password"
        v-model="values.password"
      />
      <base-input
        type="password"
        label="Confirm Password"
        name="passwordConfirmation"
        v-model="values.passwordConfirmation"
      />
    </div>
    <base-button type="submit" variant="primary">Get Cookin'</base-button>
    <router-link
      :to="{ name: 'auth', params: { authMode: 'login' } }"
      class="form-link"
      >Already have an account? Sign in</router-link
    >
  </AuthForm>
</template>

<script>
import AuthForm from "./AuthForm";
import FormErrors from "./FormErrors.vue";

export default {
  name: "AuthRegisterForm",
  components: { AuthForm, FormErrors },
  props: {
    values: { type: Object, required: true },
    errors: { type: Array, required: true }
  }
};
</script>

<style lang="scss" scoped>
.grid-row {
  display: grid;
  grid-template-columns: minmax(10px, 1fr) minmax(10px, 1fr);
  gap: $space-m;
}

.form-link {
  font-size: 0.75rem;
  font-weight: 500;
  margin-top: $space-s;
}
</style>
