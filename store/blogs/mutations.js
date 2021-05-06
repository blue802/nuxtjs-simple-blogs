export default {
  setAllBlogs(state, blogs) {
    state.list = blogs
  },
  addBlog(state, blog) {
    state.list.push(blog)
  },
  updateBlog(state, newBlog) {
    const index = state.list.findIndex((blog) => blog.id === newBlog.id)
    state.list[index] = newBlog
  },
  removeBlog(state, id) {
    state.list = state.list.filter((blog) => blog.id !== id)
  },
  setMessage(state, message) {
    state.message = message
  },
}
