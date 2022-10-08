<template>
  <div class='online-form'>
    <div class='online-form__title'>
      Регистрация на онлайн-мероприятие «Инструктаж ПОД/ФТ/ФРОМУ»
    </div>
    <div class='online-form__row online-form__input'>
      <input type='text' name='members-number' placeholder='Количество участников' />
    </div>
    <div class='online-form__row'>
      <Btn class='online-form__btn btn btn-primary' label='Далее' />
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';


export default defineComponent({
  components: {
    'Btn': Btn,
  },
})
</script>
