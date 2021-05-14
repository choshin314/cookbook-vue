export const formFieldMixin = {
	props: {
		label: String,
		value: [String, Number]
	},
	inheritAttrs: false,
	methods: {
		updateValue(event) {
			this.$emit("input", event.target.value);
		}
	}
	// computed: {
	// 	listeners() {
	// 		return {
	// 			...this.$listeners,
	//          input: updateValue
	// 		};
	// 	}
	// }
};
