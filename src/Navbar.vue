<template>
  <nav class='nav'>
    <div class='nav__burger' @click='isVisible=!isVisible'>
      <div class='nav__burger-line'></div>
      <div class='nav__burger-line'></div>
      <div class='nav__burger-line'></div>
    </div>
    <ul :class='`nav__list nav__list--${isVisible ? "vis":""}`'>
      <div class='nav__close' @click='isVisible=false'>x</div>
      <template v-for='route in $router.options.routes'>
        <li v-if='route && route.meta && route.name != "home"'
          v-bind:key='route.name'>
          <router-link @click='isVisible=false' :to='route.path'
            v-html='route.meta.label'
          ></router-link>
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
      isVisible: false,
    }
  }
})
</script>
