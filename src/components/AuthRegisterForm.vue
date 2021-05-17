<template>
  <AuthForm>
    <div class="grid-row">
      <base-input
        type="text"
        label="First Name"
        name="firstName"
        :value="values.firstName"
        @input="handleChange"
      />
      <base-input
        type="text"
        label="Last Name"
        name="lastName"
        :value="values.lastName"
        @input="handleChange"
      />
    </div>
    <div class="grid-row">
      <base-input
        type="text"
        label="Username"
        name="username"
        :value="values.username"
        @input="handleChange"
      />
      <base-input
        type="email"
        label="Email Address"
        name="email"
        :value="values.email"
        @input="handleChange"
      />
    </div>
    <div class="grid-row">
      <base-input
        type="password"
        label="Password"
        name="password"
        :value="values.password"
        @input="handleChange"
      />
      <base-input
        type="password"
        label="Confirm Password"
        name="passwordConfirmation"
        :value="values.passwordConfirmation"
        @input="handleChange"
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

export default {
  name: "AuthRegisterForm",
  components: { AuthForm },
  data() {
    return {
      values: this.resetValues()
    };
  },
  methods: {
    resetValues() {
      return {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      };
    },
    handleChange(event) {
      const { name, checked, value, files } = event.target;
      this.values[name] = files || checked || value;
    }
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
