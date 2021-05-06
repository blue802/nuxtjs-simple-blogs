<template>
  <div>
    <div class="px-24">
      <feature-slide :slide="blog" :text-above="true" />
    </div>
    <div
      class="blog-content relative -top-16 container mx-auto xl:max-w-screen-xl z-10"
    >
      <h2 class="text-white text-3xl font-bold py-8">
        {{ blog.description }}
      </h2>

      <p class="text-white text-xl">
        {{ blog.content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params, error }) {
    const res = await $axios.$get('/categories/1/blogs/' + params.id)
    return { blog: res }
  },
  head() {
    return {
      title: this.blog.title || 'Blog Content',
    }
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 650px;
}

.blog-content {
  padding: 3rem 15rem;
  background-color: $color-bg;
  border-radius: 1rem 1rem 0 0;
}
</style>
