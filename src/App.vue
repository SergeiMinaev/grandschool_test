<template>
  <Header />
  <router-view></router-view>
</template>


<script lang='ts'>
import { defineComponent, provide } from 'vue';
import Header from './Header.vue';


interface IData {
  a: string;
}


export default defineComponent({
  components: {
    'Header': Header,
  },
  data(): IData {
    return {
      a: 'q',
    }
  },
  created() {
    console.log('hi');
  }
})
</script>

<style lang='scss'>
@import './scss/style.scss';
</style>
