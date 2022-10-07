<template>
  <button class='btn' @mouseover='isActive=true' @mouseleave='isActive=false'>
    <div v-if='icon'
      :class='`btn__icon icon icon--${icon} icon--${isActive?"active":""}`'
    ></div>
    {{label}}
  </button>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['label', 'icon'],
  data() {
    return {
      isActive: false,
    }
  }
})
</script>
