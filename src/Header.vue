<template>
  <header class='header'>
    <div class='header__row-1'>
      <router-link to='/'><div class='header__logo'></div></router-link>
      <Search />
      <Navbar class='header__nav-1' />
      <div class='header__btns'>
        <Btn class='header__btn btn-secondary'
          icon='person' label='Регистрация и вход'
        />
        <Btn class='header__btn btn-secondary'
          icon='phone' label='Заказать звонок'
        />
      </div>
    </div>
    <div class='header__row-2'>
      <Navbar class='header__nav-2' />
      <div class='head-contacts'>
        <Link class='head-contacts__link'
          icon='mail' label='info@grandschool.net'
          url='mailto:info@grandschool.net'
        />
        <Link class='head-contacts__link'
          icon='phone' label='8 800 333-15-43' url='tel:+78003331543'
        />
      </div>
    </div>
  </header>
</template>


<script lang='ts'>
import { defineComponent, provide } from 'vue';
import Btn from './Btn.vue';
import Link from './Link.vue';
import Search from './Search.vue';
import Navbar from './Navbar.vue';


interface IData {
}


export default defineComponent({
  components: {
    'Btn': Btn,
    'Link': Link,
    'Search': Search,
    'Navbar': Navbar,
  },
  data(): IData {
    return {
    }
  },
  created() {
  }
})
</script>
