<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="flex flex-wrap">
      <blog-card
        v-for="(blog, index) in blogs"
        :key="blog.id"
        :blog="blog"
        :class="[index % 3 === 0 ? 'large-item' : 'flex-1']"
      />
    </div>
    <pagination
      class="my-10"
      :per-page="10"
      :current-page="+$route.query.page"
    />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  async asyncData({ $axios, error, query }) {
    try {
      const blogs = await $axios.$get(
        `/categories/1/blogs?page=${query.page}&limit=10`
      )
      return { blogs }
    } catch (e) {
      error(e)
    }
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

  watchQuery: ['page'],

  methods: {
    ...mapActions({ setAllBlogsAsync: 'blogs/setAllBlogsAsync' }),
  },
}
</script>

<style lang="scss" scoped>
.large-item {
  flex: 66.6%;
}
</style>
