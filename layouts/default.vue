<template>
  <div>
    <h2 class="slogan text-monospace">THOUGHTS, STORIES AND IDEAS</h2>
    <Header @onOpen="openSearching" />
    <div
      class="fixed w-screen h-screen top-0 z-20 -right-full bg-black transition-all duration-500 opacity-0 invisible"
      :class="{ showSearching: isShowing }"
    >
      <button
        class="text-white text-6xl absolute top-10 right-10 focus:outline-none"
        @click="closeSearching"
      >
        <b-icon-x />
      </button>
      <search-box
        class="mx-auto mt-32"
        :results="results"
        @onSearch="onSearch"
        @onClose="closeSearching"
      />
    </div>
    <div class="overflow-hidden">
      <Nuxt keep-alive />
    </div>
  </div>
</template>

<script>
import { BIconX } from 'bootstrap-vue'
import Header from './header'

export default {
  components: {
    Header,
    BIconX,
  },
  data() {
    return {
      isShowing: false,
      results: [],
    }
  },
  methods: {
    openSearching() {
      console.log('open')
      this.isShowing = true
    },

    closeSearching() {
      this.isShowing = false
    },

    async onSearch(keywords) {
      const searchTerm = keywords.split(' ').join('%20')
      this.results = await this.$axios.$get(
        'categories/1/blogs?search=' + searchTerm
      )
    },
  },
}
</script>

<style>
html,
body {
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  background-color: #222327;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.slogan {
  font-size: 14px;
  font-weight: 700;
  position: fixed;
  top: 50%;
  left: -4rem;
  transform: translateY(-50%) rotate(-90deg);
  color: white;
  z-index: 10000;
}

.showSearching {
  right: 0;
  opacity: 1;
  visibility: visible;
}
</style>
