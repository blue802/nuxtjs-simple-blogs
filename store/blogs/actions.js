export default {
  async setAllBlogsAsync({ commit }) {
    try {
      const res = await this.$axios.$get('/categories/1/blogs')
      commit('setAllBlogs', res)
    } catch (error) {
      alert(`Error: ${error}`)
    }
  },

  async addBlogAsync({ commit }, data) {
    try {
      const res = await this.$axios.$post('/categories/1/blogs', data)
      commit('addBlog', res)
      this.$router.push('/crm')
    } catch (error) {
      alert(`Error: ${error}`)
    }
  },

  async updateBlogAsync({ commit }, data) {
    try {
      const res = await this.$axios.$put('/categories/1/blogs/' + data.id, data)
      commit('updateBlog', res)
      alert('Update successful')
    } catch (error) {
      alert(`Error: ${error}`)
    }
  },

  async removeBlogAsync({ commit }, id) {
    try {
      const res = await this.$axios.$delete('/categories/1/blogs/' + id)
      commit('removeBlog', res.id)
      alert('Delete successful')
    } catch (error) {
      alert(`Error: ${error}`)
    }
  },
}
