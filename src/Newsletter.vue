<template>
  <div class='newsletter'>
    <div class='newsletter__form subscribe'>
      <h3 class='subscribe__title'>
        Читай нашу рассылку и будь в курсе новостей и скидок
      </h3>
      <div class='subscribe__row subscribe__input'>
        <input type='text' name='name' placeholder='Имя' />
      </div>
      <div class='subscribe__row subscribe__input'>
        <input type='text' name='email' placeholder='Электронная почта' />
      </div>
      <div class='subscribe__row'>
        <Btn class='subscribe__btn btn btn-light' label='Подписаться' />
      </div>
    </div>
    <div class='newsletter__items'>
      <div v-for='item in items' class='newsletter__item msg'>
        <div class='msg__msg-box'>
          <div class='msg__msg'>
            <div class='msg__text'>{{ item.text }}</div>
          </div>
        </div>
        <div class='msg__tail'></div>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';
import { newsletter } from './data.ts';


export default defineComponent({
  components: {
    'Btn': Btn,
  },
  props: [],
  data() {
    return {
      items: newsletter,
    }
  }
})
</script>
