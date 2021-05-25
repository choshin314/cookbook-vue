import { RE_EMAIL } from "@/constants";

class InputError {
  constructor(errors, field, label, message) {
    this.field = field;
    this.label = label;
    this.message = message;
    errors.push(this);
  }
  get messageLong() {
    return `${this.label}: ${this.message}`;
  }
}

export default function validateInputs(values, errors, validationSchema) {
  if (!validationSchema) return true;
  validationSchema.forEach(({ field, label, constraints }) => {
    const {
      required,
      email,
      minLen,
      maxLen,
      minVal,
      maxVal,
      fileSize,
      pattern,
      match
    } = constraints;

    if (required && !values[field]) {
      const msg = "Required";
      return new InputError(errors, field, label, msg);
    }

    if (minLen && values[field].length < minLen) {
      const msg = `${minLen} character min`;
      return new InputError(errors, field, label, msg);
    }

    if (maxLen && values[field].length > maxLen) {
      const msg = `${maxLen} character max`;
      return new InputError(errors, field, label, msg);
    }

    if (minVal && values[field] < minVal) {
      const msg = `${minVal} min value`;
      return new InputError(errors, field, label, msg);
    }

    if (maxVal && values[field] > maxVal) {
      const msg = `${maxVal} max value`;
      return new InputError(errors, field, label, msg);
    }

    if (email && !RE_EMAIL.test(values[field])) {
      const msg = "Valid email required";
      return new InputError(errors, field, label, msg);
    }

    if (fileSize) {
      const fileArr = [...values[field]];
      if (fileArr.some(file => file.size > fileSize)) {
        const msg = "File size is too large";
        return new InputError(errors, field, label, msg);
      }
    }

    if (pattern && !pattern.regex.test(values[field])) {
      return new InputError(errors, field, label, pattern.plain);
    }

    if (match && values[field] !== values[match.field]) {
      const msg = `Must match ${match.label} field`;
      return new InputError(errors, field, label, msg);
    }
  });

  if (errors.length) return false;
  return true;
}
