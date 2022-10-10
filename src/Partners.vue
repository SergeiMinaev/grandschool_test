<template>
  <div class='partners'>
    <div class='partners__head'>
      <h2 class='partners__title'>С нами работают</h2>
      <span class='partners__btn-desk text-btn'>Стать партнёром&nbsp;→</span>
    </div>
    <div class='partners__carousel'>
      <Carousel :items='partners' />
    </div>
    <span class='partners__btn-mob text-btn'>Стать партнёром&nbsp;→</span>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Carousel from './Carousel.vue';
import { partners } from './data.js';


export default defineComponent({
  components: {
    'Carousel': Carousel,
  },
  data() {
    return {
      partners: partners,
    }
  },
})
</script>
