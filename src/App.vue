<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>


<script lang='ts'>
import { defineComponent, provide } from 'vue';
import Header from './Header.vue';
import Footer from './Footer.vue';


interface IData {
}


export default defineComponent({
  components: {
    'Header': Header,
    'Footer': Footer,
  },
  data(): IData {
    return {
    }
  },
  created() {
  }
})
</script>

<style lang='scss'>
@import './scss/style.scss';
</style>
