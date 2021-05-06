<template>
  <div class="carousel-wrapper">
    <VueSlickCarousel v-bind="slickOptions" ref="carousel">
      <div v-for="slide in slides" :key="slide.id" class="slide">
        <feature-slide :slide="slide" />
      </div>
    </VueSlickCarousel>
    <span class="btnControlSlides">
      <b-icon-arrow-right-circle @click="onNextSlide" />
    </span>
  </div>
</template>

<script>
import { BIconArrowRightCircle } from 'bootstrap-vue'
import VueSlickCarousel from 'vue-slick-carousel'
export default {
  components: {
    BIconArrowRightCircle,
    VueSlickCarousel,
  },
  layout: 'default',
  async asyncData({ $axios }) {
    const res = await $axios.$get('/categories/1/blogs?page=1&limit=3')
    return { slides: res }
  },
  data() {
    return {
      count: 0,
      slickOptions: {
        infinite: true,
        slidesToScroll: 1,
        rtl: true,
        arrows: false,
      },
    }
  },
  methods: {
    onNextSlide() {
      this.$refs.carousel.next()
    },
  },
}
</script>

<style lang="scss" scoped>
.btnControlSlides {
  position: fixed;
  top: 50%;
  right: 3rem;
  transform: translateY(-50%);
  color: white;
  cursor: pointer;
  font-size: 3rem;
  transition: all 0.4s;

  &:hover {
    transform: translateY(-50%) scale(1.1);
    color: orange;
  }
}

.carousel-wrapper {
  height: 650px;

  .slide {
    padding: 0 6rem;
  }
}
</style>
