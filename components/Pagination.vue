<template>
  <div class="flex">
    <nuxt-link :to="prevPage">
      <button
        class="border border-teal-500 text-green-500 block rounded font-bold py-3 px-5 mr-2 flex items-center hover:bg-green-500 hover:text-white focus:outline-none"
        :class="{ disabled: currentPage === 1 }"
      >
        <span class="px-1"><b-icon-arrow-left /></span> Previous page
      </button>
    </nuxt-link>
    <nuxt-link :to="nextPage">
      <button
        class="border border-teal-500 bg-green-500 text-white block rounded-sm font-bold py-3 px-5 ml-2 flex items-center focus:outline-none"
        :class="{ disabled: currentPage === Math.ceil(totalRows / perPage) }"
      >
        Next page <span class="px-1"><b-icon-arrow-right /></span>
      </button>
    </nuxt-link>
  </div>
</template>

<script>
import { BIconArrowLeft, BIconArrowRight } from 'bootstrap-vue'

export default {
  components: {
    BIconArrowLeft,
    BIconArrowRight,
  },
  props: {
    totalRows: {
      type: Number,
      default: 1,
    },
    perPage: {
      type: Number,
      default: 10,
    },
    currentPage: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    prevPage() {
      let link = this.$route.path + '?page='
      link += this.currentPage > 1 ? this.currentPage - 1 : this.currentPage
      return link
    },
    nextPage() {
      let link = this.$route.path + '?page='
      link += this.currentPage + 1
      return link
    },
  },
}
</script>
