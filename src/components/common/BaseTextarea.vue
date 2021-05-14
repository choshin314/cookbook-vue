<template>
	<div class="textarea-container">
		<label :for="$attrs.id" v-if="label" class="label">{{ label }}</label>
		<textarea
			v-bind="$attrs"
			class="textarea"
			:value="value"
			v-on="$listeners"
		/>
	</div>
</template>

<script>
import { formFieldMixin } from "@/mixins/formFieldMixin";
export default {
	mixins: [formFieldMixin],
	name: "BaseTextarea"
};
</script>

<style lang="scss" scoped>
.textarea-container {
	width: 100%;
	display: flex;
	flex-direction: column;
	position: relative;
	margin-bottom: $space-m;
}

.label {
	font-weight: 500;
	margin-top: $space-s;
	margin-bottom: $space-s;
}
.textarea {
	border: none;
	font-family: inherit;
	font-size: inherit;
	line-height: 1.25;
	padding: 0.5rem;
	border-bottom: 2px solid $med-lite-grey;
	resize: none;
	/*-----Scrollbar-----*/
	::-webkit-scrollbar {
		width: 5px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: var(--lite-grey);
		border-radius: 5px;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: var(--teal);
		border-radius: 5px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: var(--dark-teal);
	}
}
</style>
