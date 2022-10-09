<template>
  <a class='link' @mouseover='isActive=true' @mouseleave='isActive=false' :href='url'>
    <div :class='`link__icon icon icon--${icon} icon--${isActive?"active":""}`'
    ></div>
    {{label}}
  </a>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['label', 'icon', 'url'],
  data() {
    return {
      isActive: false,
    }
  }
})
</script>
