import validateInputs from "@/utils/validateInputs";

export default {
  props: {
    defaultValues: { type: Object, required: true },
    constraints: { type: Array, required: false },
    handleSubmit: { type: Function, required: true }
  },

  data() {
    return {
      values: { ...this.defaultValues },
      errors: [],
      submitting: false
    };
  },

  methods: {
    resetErrors() {
      this.errors.splice(0, this.errors.length);
    },
    resetValues() {
      for (let key in this.values) {
        this.values[key] = this.defaultValues[key];
      }
    },

    async validateAndSubmit() {
      this.resetErrors();
      const inputsAreValid = this.validateInputs(
        this.values,
        this.errors,
        this.constraints
      );
      const payload = {
        inputsAreValid,
        values: this.values,
        resetValues: this.resetValues
      };
      this.submitting = true;
      await this.handleSubmit(payload);
      this.submitting = false;
    },

    validateInputs: validateInputs,
    findError(field) {
      return this.errors.find(err => err.field === field);
    }
  },

  render() {
    return this.$scopedSlots.default({
      values: this.values,
      errors: this.errors,
      findError: this.findError,
      validateAndSubmit: this.validateAndSubmit,
      submitting: this.submitting
    });
  }
};
