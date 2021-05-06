<template>
  <blog-form :data="blog" @onSubmitBlog="updateBlog" />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  async asyncData({ $axios, error, params }) {
    const { id } = params
    const res = await $axios.$get('/categories/1/blogs/' + id)
    return { blog: res }
  },
  methods: {
    ...mapActions({
      updateBlog: 'blogs/updateBlogAsync',
    }),
  },
}
</script>
