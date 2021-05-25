<template>
  <FormContainer
    v-slot="{ values, errors, validateForm }"
    :defaultValues="defaultValues"
  >
    <AuthLoginForm
      :values="values"
      :inputErrors="errors"
      :serverError="serverError"
      v-on:submitting-form="handleSubmit(validateForm, values)"
    />
  </FormContainer>
</template>

<script>
import { mapActions, mapState } from "vuex";
import AuthLoginForm from "./AuthLoginForm.vue";
import FormContainer from "./FormContainer.js";

export default {
  components: { FormContainer, AuthLoginForm },
  data() {
    return {
      defaultValues: { emailUsername: "", password: "" },
      schema: [
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
  computed: mapState({ serverError: state => state.auth.error }),
  methods: {
    async handleSubmit(validateForm, values) {
      const inputsAreValid = validateForm(this.schema)
      if (!inputsAreValid) return;
      const success = await this.loginOrRegister({ mode: "login", values });
      if (success) {
        console.log("success!");
        this.$router.push({ name: "create-recipe" });
      }
      return;
    },
    ...mapActions("auth", ["loginOrRegister"])
  }
};
</script>

<style></style>
