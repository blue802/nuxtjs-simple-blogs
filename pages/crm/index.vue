<template>
  <div class="container mx-auto xl:max-w-screen-xl">
    <div class="text-right">
      <button
        class="focus:outline-none inline-block bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded"
        @click="$fetch"
      >
        Refresh
      </button>
      <nuxt-link
        to="/crm/create"
        class="inline-block bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </nuxt-link>
    </div>
    <div class="bg-white shadow-md rounded-md my-6">
      <table class="text-left w-full">
        <thead>
          <tr>
            <th
              v-for="col in cols"
              :key="col"
              class="py-4 px-6 bg-gray-100 font-bold uppercase text-sm text-grey-dark border-b border-grey-light"
            >
              {{ col }}
            </th>
          </tr>
        </thead>
        <b-spinner v-if="$fetchState.pending" type="grow" label="loading..." />
        <tbody v-else>
          <tr
            v-for="blog in blogs"
            :key="blog.id"
            class="hover:bg-grey-lighter"
          >
            <td class="py-4 px-6 border-b border-grey-light">{{ blog.id }}</td>
            <td class="py-4 px-6 border-b border-grey-light capitalize">
              <p class="line-clamp">{{ blog.title }}</p>
            </td>
            <td class="flex py-4 px-6 border-b border-grey-light">
              <nuxt-link
                :to="'/crm/' + blog.id"
                class="inline-block text-white font-bold py-1 px-3 rounded text-xs bg-green-400 hover:bg-green-500"
                >Edit</nuxt-link
              >
              <div
                class="ml-1 inline-block text-white font-bold py-1 px-3 rounded text-xs bg-red-400 hover:bg-red-500 cursor-pointer"
                @click="onRemove(blog.id)"
              >
                Delete
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  data() {
    return {
      cols: ['id', 'title', 'action'],
    }
  },
  async fetch() {
    if (this.$store.state.blogs.list.length === 0) {
      await this.$store.dispatch('blogs/setAllBlogsAsync')
    }
  },
  computed: {
    ...mapGetters({ blogs: 'blogs/getAllBlogs' }),
  },
  methods: {
    ...mapActions({
      onRemove: 'blogs/removeBlogAsync',
    }),
  },
}
</script>

<style lang="scss" scoped>
.line-clamp {
  @include line-clamp(1);
}
</style>
