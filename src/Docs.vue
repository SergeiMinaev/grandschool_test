<template>
  <div class='docs'>
    <h2 v-if='title' class='docs__title h2'>{{ title }}</h2>
    <div class='docs__items'>
      <a v-for='item in items' class='docs__item text-btn' :href='item.url'>
        {{ item.label }}&nbsp;→
      </a>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['items', 'title'],
  data() {
    return {
    }
  }
})
</script>
