<template>
  <nav class='nav'>
    <ul>
      <template v-for='route in $router.options.routes'>
        <li v-if='route && route.meta && route.name != "home"'
          v-bind:key='route.name'>
          <router-link :to='route.path'>
            {{ route.meta.label }}
          </router-link>
        </li>
      </template>
    </ul>
  </nav>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  props: ['label', 'icon'],
  data() {
    return {
    }
  }
})
</script>
