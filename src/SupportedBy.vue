<template>
  <div class='supported-by'>
    <h2 class='supported-by__title h2'>Работаем при поддержке</h2>
    <div class='supported-by__items'>
      <img v-for='item in items' class='supported-by__item' :src='item.img' />
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import { supportedBy } from './data.ts';


export default defineComponent({
  props: [],
  data() {
    return {
      items: supportedBy,
    }
  }
})
</script>
