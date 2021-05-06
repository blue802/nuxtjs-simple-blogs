<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="flex flex-wrap">
      <template v-if="$fetchState.pedding" class="text-center">
        <b-spinner type="grow" label="loading..." />
      </template>
      <template v-else>
        <blog-card
          v-for="(blog, index) in blogs"
          :key="blog.id"
          :blog="blog"
          :class="[index % 3 === 0 ? 'large-item' : 'flex-1']"
        />
      </template>
    </div>
    <pagination
      class="my-10"
      :total-rows="allBlogs.length"
      :per-page="10"
      :current-page="+$route.params.page"
      @change="navigatePage"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ $axios, error, params }) {
    const pageCurrent = params.page
    try {
      const blogs = await $axios.$get(
        `/categories/1/blogs?page=${pageCurrent}&limit=10`
      )
      return { blogs }
    } catch (e) {
      error(e)
    }
  },

  async fetch() {
    await this.setAllBlogsAsync()
  },

  head() {
    return {
      title: 'Blogs Page',
    }
  },

  computed: {
    ...mapGetters({
      allBlogs: 'blogs/getAllBlogs',
    }),
  },

  methods: {
    ...mapActions({ setAllBlogsAsync: 'blogs/setAllBlogsAsync' }),
    navigatePage(current) {
      this.$router.push('/blogs/page/' + current)
    },
  },
}
</script>

<style lang="scss" scoped>
.large-item {
  flex: 66.6%;
}
</style>
