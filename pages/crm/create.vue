<template>
  <blog-form @onSubmitBlog="addBlog" />
</template>

<script>
import { mapActions } from 'vuex'
export default {
  methods: {
    ...mapActions({
      addBlog: 'blogs/addBlogAsync',
    }),
  },
}
</script>
