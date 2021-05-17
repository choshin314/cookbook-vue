<template>
  <li class="nav-item" v-on="$listeners" :title="!isLink && title">
    <template v-if="!!to">
      <router-link :to="to" :title="title">
        <font-awesome-icon :icon="icon" />
      </router-link>
    </template>
    <template v-else>
      <font-awesome-icon :icon="icon" />
    </template>
  </li>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: { type: Object },
    title: { type: String },
    icon: { type: Array }
  }
};
</script>

<style lang="scss" scoped>
.nav-item {
  position: relative;
  padding: 0 0.5rem;
  font-size: 1.15rem;
  color: var(--primary);
  cursor: pointer;

  @media (min-width: 320px) {
    font-size: 1.25rem;
  }
  @media (min-width: 400px) {
    font-size: 1.5rem;
    padding: 0 1rem;
  }
  a {
    color: inherit;
  }
}
</style>
