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
        { img: './src/assets/img/partners/Sber.png', label: 'Сбербанк' },
        { img: './src/assets/img/partners/Gazprombank.png', label: 'Газпромбанк' },
        { img: './src/assets/img/partners/Gazprom.png', label: 'Газпром' },
        { img: './src/assets/img/partners/Alfa.png', label: 'Альфа-Банк' },
        { img: './src/assets/img/partners/Ural.png', label: 'Уралсиб' },
        { img: './src/assets/img/partners/Tele2.png', label: 'Tele2' },
        { img: './src/assets/img/partners/Polus.png', label: 'Полюс' },
        { img: './src/assets/img/partners/Nornickel.png', label: 'Норникель' },
        { img: './src/assets/img/partners/Floors.png', label: 'Floors' },
        { img: './src/assets/img/partners/Intraco.png', label: 'Intraco' },
        { img: './src/assets/img/partners/Polymetal.png', label: 'Polymetal' },
        { img: './src/assets/img/partners/KolRos.png', label: 'KolRos' },
        { img: './src/assets/img/partners/Ural.png', label: 'Уралсиб' },
        { img: './src/assets/img/partners/Nornickel.png', label: 'Норникель' },
        { img: './src/assets/img/partners/Pochta.png', label: 'Почта России' },
        { img: './src/assets/img/partners/League.png', label: 'League' },
        { img: './src/assets/img/partners/Ozon.png', label: 'Ozon' },
        { img: './src/assets/img/partners/Sunlight.png', label: 'Sunlight' },
        { img: './src/assets/img/partners/Guild.png', label: 'Guild' },
        { img: './src/assets/img/partners/Yakut.png', label: 'Yakut' },
        { img: './src/assets/img/partners/Azot.png', label: 'Azot' },
        { img: './src/assets/img/partners/Magnit.png', label: 'Magnit' },
        { img: './src/assets/img/partners/Azot.png', label: 'Azot' },
      ],
    }
  },
})
</script>
