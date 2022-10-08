<template>
  <div class='team'>
    <div class='team__title'>{{ title }}</div>
    <div class='team__items'>
      <div class='team__card team-card' v-for='item in items'>
        <div class='team-card__bg'></div>
        <div class='team-card__content'>
          <div class='team-card__img-box'>
            <img class='team-card__img' :src='item.img' />
            <div class='team-card__name'>{{ item.name }}<br>{{ item.surname }}</div>
            <div class='team-card__position'>{{ item.position }}</div>
          </div>
          <div class='team-card__contacts'>
            <div class='team-card__email'>{{ item.email }}</div>
            <div class='team-card__phone'>{{ item.phone }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  components: {
  },
  props: ['items', 'title'],
  data() {
    return {
    }
  }
})
</script>
