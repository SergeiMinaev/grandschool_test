<template>
  <div class='partners'>
    <div class='partners__head'>
      <h2 class='partners__title'>С нами работают</h2>
      <span class='text-btn'>Стать партнёром&nbsp;→</span>
    </div>
    <div class='partners__carousel'>
      <Carousel :items='partners' />
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Carousel from './Carousel.vue';


export default defineComponent({
  components: {
    'Carousel': Carousel,
  },
  data() {
    return {
      partners: [
        { img: '/static/img/partners/Sber.png', label: 'Сбербанк' },
        { img: '/static/img/partners/Gazprombank.png', label: 'Газпромбанк' },
        { img: '/static/img/partners/Gazprom.png', label: 'Газпром' },
        { img: '/static/img/partners/Alfa.png', label: 'Альфа-Банк' },
        { img: '/static/img/partners/Ural.png', label: 'Уралсиб' },
        { img: '/static/img/partners/Tele2.png', label: 'Tele2' },
        { img: '/static/img/partners/Polus.png', label: 'Полюс' },
        { img: '/static/img/partners/Nornickel.png', label: 'Норникель' },
        { img: '/static/img/partners/Floors.png', label: 'Floors' },
        { img: '/static/img/partners/Intraco.png', label: 'Intraco' },
        { img: '/static/img/partners/Polymetal.png', label: 'Polymetal' },
        { img: '/static/img/partners/KolRos.png', label: 'KolRos' },
        { img: '/static/img/partners/Ural.png', label: 'Уралсиб' },
        { img: '/static/img/partners/Nornickel.png', label: 'Норникель' },
        { img: '/static/img/partners/Pochta.png', label: 'Почта России' },
        { img: '/static/img/partners/League.png', label: 'League' },
        { img: '/static/img/partners/Ozon.png', label: 'Ozon' },
        { img: '/static/img/partners/Sunlight.png', label: 'Sunlight' },
        { img: '/static/img/partners/Guild.png', label: 'Guild' },
        { img: '/static/img/partners/Yakut.png', label: 'Yakut' },
        { img: '/static/img/partners/Azot.png', label: 'Azot' },
        { img: '/static/img/partners/Magnit.png', label: 'Magnit' },
        { img: '/static/img/partners/Azot.png', label: 'Azot' },
      ],
    }
  },
})
</script>
