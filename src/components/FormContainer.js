import validateInputs from "@/utils/validateInputs";

export default {
  props: {
    defaultValues: { type: Object, required: true },
    handleSubmit: { type: Function, required: true }
  },

  data() {
    return {
      values: { ...this.defaultValues },
      errors: []
    };
  },

  methods: {
    resetErrors() {
      this.errors = [];
    },
    resetValues() {
      this.values = { ...this.defaultValues };
    },

    // async validateAndSubmit() {
    //   this.resetErrors();
    //   const inputsAreValid = this.validateInputs(
    //     this.values,
    //     this.errors,
    //     this.constraints
    //   );
    //   const payload = {
    //     inputsAreValid,
    //     values: this.values,
    //     resetValues: this.resetValues
    //   };
    //   this.submitting = true;
    //   await this.handleSubmit(payload);
    //   this.submitting = false;
    // },

    validateForm(validationSchema) {
      this.resetErrors();
      return validateInputs(this.values, this.errors, validationSchema);
    },

    findError(field) {
      return this.errors.find(err => err.field === field);
    }
  },

  render() {
    return this.$scopedSlots.default({
      values: this.values,
      errors: this.errors,
      findError: this.findError,
      // validateAndSubmit: this.validateAndSubmit,
      resetValues: this.resetValues,
      validateForm: this.validateForm
    });
  }
};
