<template>
  <div class='carousel'>
    <div class='carousel__orig' ref='orig'
      :style='`animation-duration: ${duration}s;
      animation-delay: ${origDelay}s;
      animation-name: ${isReady ? "carousel":""};
      `'>
      <div v-for='item in items' class='carousel__item'>
        <img :src='item.img' @load='onImgLoad' />
      </div>
    </div>
    <div class='carousel__shadow'
      :style='`animation-duration: ${duration}s;
      animation-delay: ${shadowDelay}s;
      animation-name: ${isReady ? "carousel":""};
      `'>
      <div v-for='item in items' class='carousel__item'>
        <img :src='item.img' />
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
  },
  props: ['items'],
  data() {
    return {
      duration: 120,
      origDelay: 0,
      isReady: false,
      loadedImgs: 0,
    }
  },
  computed: {
    shadowDelay() { return this.duration / 2 + this.origDelay },
  },
  mounted() {
  },
  methods: {
    onImgLoad() {
      this.loadedImgs += 1;
      if (this.items.length == this.loadedImgs) this.initCarousel();
    },
    initCarousel() {
      //const line = document.getElementsByClassName('carousel__orig')[0];
      this.origDelay = this.duration / (this.$refs.orig.offsetWidth / (window.screen.width / 2)) * -1;
      this.isReady = true;
    },
  },
})
</script>
