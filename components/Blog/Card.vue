<template>
  <nuxt-link :to="'/blogs/' + blog.id" style="textDecoration: 'none">
    <div class="card" :style="{ backgroundImage: `url('${blog.thumbnail}')` }">
      <div class="card__content">
        <h2 class="card__title">{{ blog.title }}</h2>
        <p class="card__author">
          by <span>Quoc Bao</span>,
          {{ new Date(blog.createdAt).toLocaleDateString() }}
        </p>
      </div>
      <p class="card__category">{{ blog.category.name }}</p>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
.card {
  position: relative;
  min-width: 380px;
  height: 380px;
  padding: 3rem;
  color: white;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border: none;
  margin: 12px;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.3);
    border-radius: inherit;
    z-index: 1;
  }

  &__content {
    flex: 1;
    position: relative;
    z-index: 10;
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.8rem;
    text-transform: capitalize;
    @include line-clamp(2);
  }

  &__author {
    font-size: 14px;

    span {
      font-size: 1rem;
      font-weight: 700;
    }
  }

  &__category {
    font-size: 12px;
    font-weight: 700;
    position: relative;
    z-index: 10;
  }
}
</style>
