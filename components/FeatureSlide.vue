<template>
  <div class="feature flex" :class="{ activeStyle: isActive }">
    <div class="feature__img" :class="{ overlay: textAbove }">
      <img class="w-full h-full object-cover" :src="slide.thumbnail" />
    </div>
    <div class="feature__text" :class="{ textAbove }">
      <div class="feature__text-inner">
        <div
          class="inline-block bg-white text-black uppercase px-2 py-0.5 rounded-xl text-sm font-bold"
        >
          <span class="inline-block mr-1"><b-icon-star-fill /></span>Featured
        </div>
        <h1 class="capitalize font-bold my-8 text-6xl">{{ slide.title }}</h1>
        <p class="font-bold text-lg">
          <span class="font-normal text-md">by</span>
          Bao Bao
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BIconStarFill } from 'bootstrap-vue'

export default {
  components: {
    BIconStarFill,
  },
  props: {
    slide: {
      type: Object,
      default: () => {},
    },
    textAbove: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  computed: {
    isActive() {
      return this.active === this.slide.id
    },
  },
}
</script>

<style lang="scss">
.feature {
  width: 100%;
  height: 650px;
  position: relative;

  &__img {
    border-radius: 16px;
    overflow: hidden;
  }

  &__img,
  &__text {
    flex: 1;
  }

  &__text {
    color: white;
  }

  &__text-inner {
    padding: 8rem 5rem;
  }
}

.textAbove {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 800px;
  z-index: 10;
}

.overlay {
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(#000, 0.2);
    z-index: 1;
    border-radius: 16px;
  }
}
</style>
