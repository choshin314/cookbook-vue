<template>
  <FormContainer
    v-slot="{ values, errors, validateAndSubmit }"
    :defaultValues="defaultValues"
    :constraints="constraints"
    :handleSubmit="handleSubmit"
  >
    <AuthLoginForm
      :values="values"
      :errors="errors"
      v-on:submitting-form="validateAndSubmit"
    />
  </FormContainer>
</template>

<script>
import { mapActions } from "vuex";
import AuthLoginForm from "./AuthLoginForm.vue";
import FormContainer from "./FormContainer.js";

export default {
  components: { FormContainer, AuthLoginForm },
  data() {
    return {
      defaultValues: { emailUsername: "", password: "" },
      constraints: [
        {
          field: "emailUsername",
          label: "Email or Username",
          constraints: { required: true }
        },
        {
          field: "password",
          label: "Password",
          constraints: { required: true }
        }
      ]
    };
  },
  methods: {
    async handleSubmit({ inputsAreValid, values, resetValues }) {
      if (!inputsAreValid) return;
      const success = await this.loginOrRegister({ mode: "login", values });
      if (success) {
        console.log("success!");
        resetValues();
        this.$router.push({ name: "create-recipe" });
      }
      return;
    },
    ...mapActions("auth", ["loginOrRegister"])
  }
};
</script>

<style></style>
