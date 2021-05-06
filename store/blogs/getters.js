export default {
  getAllBlogs: (state) => state.list,
  getBlogById: (state) => (id) => {
    return state.list.length !== 0 && state.list.find((blog) => blog.id === id)
  },
}
