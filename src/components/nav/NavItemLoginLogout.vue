<template>
  <NavItem
    :to="linkConfig"
    :icon="['fas', icon]"
    :title="title"
    @click="handleClick"
  />
</template>

<script>
import NavItem from "./NavItem";
import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    NavItem
  },
  computed: {
    ...mapGetters("auth", ["hasAuthData"]),
    icon() {
      return this.hasAuthData ? "sign-out-alt" : "sign-in-alt";
    },
    title() {
      return this.hasAuthData ? "Sign Out" : "Sign In";
    },
    linkConfig() {
      return this.hasAuthData
        ? {}
        : { name: "auth", params: { authMode: "login" } };
    }
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    handleClick() {
      if (!this.hasAuthData) return;
      this.logout();
    }
  }
};
</script>

<style></style>
