<template>
  <FormContainer
    v-slot="{ values, errors, validateAndSubmit }"
    :defaultValues="defaultValues"
    :handleSubmit="handleSubmit"
    :constraints="constraints"
  >
    <AuthRegisterForm
      :values="values"
      :errors="errors"
      v-on:submitting-form="validateAndSubmit"
    />
  </FormContainer>
</template>

<script>
import { mapActions } from "vuex";
import AuthRegisterForm from "./AuthRegisterForm.vue";
import FormContainer from "./FormContainer.js";

export default {
  components: { FormContainer, AuthRegisterForm },
  data() {
    return {
      defaultValues: {
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        passwordConfirmation: ""
      },
      constraints: [
        {
          field: "firstName",
          label: "First Name",
          constraints: {
            required: true,
            maxLen: 30
          }
        },
        {
          field: "lastName",
          label: "Last Name",
          constraints: {
            required: true,
            maxLen: 30
          }
        },
        {
          field: "username",
          label: "Username",
          constraints: {
            pattern: {
              regex: /^[a-zA-Z0-9]+$/,
              plain: "Letters & numbers only"
            },
            minLen: 2,
            maxLen: 30
          }
        },
        {
          field: "email",
          label: "Email Address",
          constraints: {
            email: true
          }
        },
        {
          field: "password",
          label: "Password",
          constraints: {
            minLen: 8,
            maxLen: 16,
            pattern: {
              regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
              plain: "Need at least one lowercase, uppercase, and number"
            }
          }
        },
        {
          field: "passwordConfirmation",
          label: "Password Confirmation",
          constraints: {
            match: { field: "password", label: "Password" }
          }
        }
      ]
    };
  },
  methods: {
    async handleSubmit(payload) {
      const { inputsAreValid, values, resetValues } = payload;
      if (inputsAreValid) {
        const success = await this.loginOrRegister({
          mode: "register",
          values
        });
        if (success) {
          console.log("success!");
          resetValues();
          this.$router.push({ name: "create-recipe" });
        }
        return;
      } else {
        console.log("validation failed");
        return;
      }
    },
    ...mapActions("auth", ["loginOrRegister"])
  }
};
</script>

<style></style>
