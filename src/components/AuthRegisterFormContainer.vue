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

const RE_PASSWORD = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
const PLAIN_PASSWORD = "Need at least one lowercase, uppercase, and number";
const RE_USERNAME = /^[a-zA-Z0-9]+$/;
const PLAIN_USERNAME = "Letters & numbers only";

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
              regex: RE_USERNAME,
              plain: PLAIN_USERNAME
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
              regex: RE_PASSWORD,
              plain: PLAIN_PASSWORD
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
