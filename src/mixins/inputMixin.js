export default {
  props: {
    label: String,
    value: [String, Number],
    noDecimals: { type: Boolean, default: false }
  },
  inheritAttrs: false,
  methods: {
    handleInput(event) {
      const { files, value, type } = event.target;
      let valueToSend = value;
      if (type === "file") {
        valueToSend = files;
      }
      this.$emit("input", valueToSend);
    },
    preventDecimals(event) {
      if (/[.,+\- ]/.test(event.key)) {
        event.preventDefault();
      }
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        ...this.getKeydown,
        input: this.handleInput
      };
    },
    getKeydown() {
      return this.noDecimals ? { keydown: this.preventDecimals } : null;
    }
  }
};
