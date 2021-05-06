<template>
  <div class="search-box">
    <input
      v-model="searchTerm"
      type="text"
      class="border-red-500 border-b-4 bg-transparent focus:outline-none text-white text-xl py-2 w-full"
      placeholder="Search Blogs..."
      @change="handleSearching"
    />
    <div class="mt-10">
      <ul v-for="blog in results" :key="blog.id" class="mt-3 text-white">
        <li @click="handleClose">
          <nuxt-link :to="'/blogs/' + blog.id" class="hover:text-red-500">
            {{ blog.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    handleSearching() {
      this.$emit('onSearch', this.searchTerm)
    },
    handleClose() {
      this.$emit('onClose')
    },
  },
}
</script>

<style lang="scss" scoped>
.search-box {
  width: 600px;
}
</style>
