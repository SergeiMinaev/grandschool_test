<template>
  <div class='activity'>
    <h2 class='activity__title'>{{ title }}</h2>
    <div class='activity__items'>
      <div class='activity__item' v-for='item in items'>
        <div class='activity__label'>
          <div v-if='item.icon'
            :class='`activity__icon icon icon--${item.icon}`'
          ></div>
          <h3 v-html='item.label'></h3>
        </div>
        <a :href='item.link' target='_blank' class='activity__btn btn btn-light'>
          {{ label }}
        </a>
      </div>
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
  props: ['items', 'title', 'label'],
  data() {
    return {
    }
  }
})
</script>
