<template>
  <div class="container mx-auto xl:max-w-screen-xl text-white header">
    <a class="logo" href="/">
      <img src="~assets/images/nurui.svg" alt="nurui" />
    </a>
    <nav class="nav">
      <div class="nav__links">
        <nuxt-link to="/" class="nav__link">Home</nuxt-link>
        <nuxt-link to="/blogs?page=1" class="nav__link">Blogs</nuxt-link>
        <nuxt-link to="/about" class="nav__link">About</nuxt-link>
        <nuxt-link to="/contact" class="nav__link">Contact</nuxt-link>
        <nuxt-link to="/crm" class="nav__link">CRM</nuxt-link>
      </div>
      <span class="nav__search" @click="openSearching"><b-icon-search /></span>
    </nav>
  </div>
</template>

<script>
import { BIconSearch } from 'bootstrap-vue'

export default {
  components: {
    BIconSearch,
  },
  methods: {
    openSearching() {
      this.$emit('onOpen')
    },
  },
}
</script>

<style lang="scss">
.header {
  background-color: transparent;
  height: 160px;
  display: flex;
  align-items: center;

  .logo {
    height: 50px;
    display: block;

    img {
      height: 100%;
    }
  }

  .nav {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__links {
      display: flex;
    }

    &__link {
      // color: white;
      font-weight: 700;
      font-family: $ff-primary;
      margin: 1rem;
      font-size: 1rem;
    }

    &__search {
      margin-left: 1rem;
      font-size: 1rem;
      color: gray;
      cursor: pointer;
      transition: all 0.4s;

      &:hover {
        color: white;
      }
    }
  }
}
</style>
