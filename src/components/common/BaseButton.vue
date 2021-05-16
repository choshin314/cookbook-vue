<template>
  <button class="button" :class="buttonClass">
    <font-awesome-icon v-if="iconLeft" :icon="iconLeft" />
    <span :class="textClass">
      <slot> </slot>
    </span>
    <font-awesome-icon v-if="iconRight" :icon="iconRight" />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    iconLeft: {
      type: Array
    },
    iconRight: {
      type: Array
    },
    variant: {
      type: String
    }
  },
  computed: {
    textClass() {
      if (this.iconLeft) {
        return "button-text-right";
      } else if (this.iconRight) {
        return "button-text-left";
      } else {
        return "";
      }
    },
    buttonClass() {
      if (!this.variant) return "";
      switch (this.variant) {
        case "primary":
          return "button-primary";
        case "outline-primary":
          return "button-outline-primary";
        case "accent":
          return "button-accent";
        default:
          return "";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.button {
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: transparent;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  font-family: inherit;
  font-size: inherit;
  transition: all 0.2s linear;
  cursor: pointer;
}
.button-primary {
  background: $primary;
  color: white;
}

.button-outline-primary {
  border: $primary 2px solid;
  color: $primary;
}

.button-accent {
  background: $accent;
  color: white;
}
.button:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19);
}
.button:active {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
}
.button:focus {
  outline: 0;
}

.button:disabled {
  -webkit-transform: scale(1);
  transform: scale(1);
  box-shadow: none;
  background: var(--med-lite-grey);
}
.button + .button {
  margin-left: 1em;
}

.button-text-left {
  margin-right: 0.5em;
}

.button-text-right {
  margin-left: 0.5em;
}
</style>
