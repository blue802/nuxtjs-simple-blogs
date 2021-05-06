<template>
  <form
    class="container mx-auto xl:max-w-screen-lg bg-white p-10 md:rounded-lg my-8 mx-auto"
    @submit.prevent="submitBlog"
  >
    <div class="form mt-4">
      <div class="flex flex-col text-sm">
        <label for="title" class="font-bold mb-2">Title</label>
        <input
          v-model="blog.title"
          class="appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Enter a title"
        />
      </div>

      <div class="flex flex-col text-sm">
        <label for="discription" class="font-bold mb-2 mt-4">Discription</label>
        <input
          v-model="blog.description"
          class="appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Enter a discription"
        />
      </div>

      <div class="flex flex-col text-sm">
        <label for="author" class="font-bold mb-2 mt-4">Author</label>
        <input
          class="appearance-none border border-gray-200 p-2 focus:outline-none focus:border-gray-500"
          type="text"
          placeholder="Quoc Bao"
          disabled
        />
      </div>

      <div class="text-sm flex flex-col">
        <label for="content" class="font-bold mt-4 mb-2">Content</label>
        <textarea
          v-model="blog.content"
          class="appearance-none w-full border border-gray-200 p-2 h-40 focus:outline-none focus:border-gray-500"
          placeholder="Write blog's content"
        ></textarea>
      </div>
    </div>

    <div class="submit text-right">
      <button
        type="button"
        class="rounded-md bg-green-500 shadow-lg text-white px-4 py-2 hover:bg-green-600 mt-8 text-center font-semibold focus:outline-none"
        @click="onCancel"
      >
        Cancel
      </button>

      <button
        type="submit"
        class="rounded-md bg-blue-600 shadow-lg text-white px-4 py-2 hover:bg-blue-700 mt-8 text-center font-semibold focus:outline-none"
      >
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => ({
        title: '',
        description: '',
        content: '',
      }),
    },
  },

  data() {
    return {
      blog: this.data,
    }
  },

  methods: {
    submitBlog() {
      this.$emit('onSubmitBlog', this.blog)
    },

    onCancel() {
      this.$router.push('/crm')
    },
  },
}
</script>
