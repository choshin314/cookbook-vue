<template>
  <nav class="nav">
    <ul>
      <NavItem
        :to="{ name: 'home-public' }"
        :icon="['fas', 'home']"
        title="Home Feed"
      />
      <NavItem
        :to="{ name: 'create-recipe' }"
        :icon="['far', 'plus-square']"
        title="Create Recipe"
      />
      <NavItem
        :to="{ name: 'my-profile' }"
        :icon="['fas', 'user-circle']"
        title="Profile"
      />
      <NavItemLoginLogout />
    </ul>
  </nav>
</template>

<script>
import NavItem from "./NavItem";
import NavItemLoginLogout from "./NavItemLoginLogout.vue";

export default {
  components: {
    NavItem,
    NavItemLoginLogout
  }
};
</script>

<style lang="scss" scoped>
.nav {
  flex: auto;
  & ul {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    @media (min-width: 450px) {
      justify-content: flex-end;
    }
  }
}
</style>
