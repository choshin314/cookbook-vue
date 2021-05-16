<template>
  <NavItem
    :to="{ name: 'auth-login' }"
    :icon="['fas', icon]"
    :title="title"
    :isLink="!user"
    @click="handleClick"
  />
</template>

<script>
import NavItem from "./NavItem";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    NavItem
  },
  computed: {
    ...mapState("auth", ["user"]),
    icon() {
      return this.user ? "sign-out-alt" : "sign-in-alt";
    },
    title() {
      return this.user ? "Sign Out" : "Sign In";
    }
  },
  methods: {
    ...mapActions(["resetAll"]),
    handleClick() {
      if (!this.user) return;
      this.resetAll();
    }
  }
};
</script>

<style></style>
