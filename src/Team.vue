<template>
  <div class='team'>
    <h2 class='team__title'>{{ title }}</h2>
    <div class='team__items'>
      <div class='team__card team-card' v-for='item in items'>
        <div class='team-card__bg'></div>
        <div class='team-card__content'>
          <div class='team-card__img-box'>
            <img class='team-card__img' :src='item.img' />
            <h3 class='team-card__name'>{{ item.name }}<br>{{ item.surname }}</h3>
            <div class='team-card__position'>{{ item.position }}</div>
          </div>
          <div class='team-card__contacts'>
            <Link class='team-card__email' icon='mail'
              :url='`mailto:${item.email}`' :label='item.email'
            />
            <div class='team-card__phone-row'>
              <Link class='team-card__phone' icon='phone'
                :url='`tel:${item.phoneRaw}`' :label='item.phone'
              />
              <span class='team-card__phone-mod'>
                &nbsp;доб.&nbsp;{{item.phoneMod}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Link from './Link.vue';


export default defineComponent({
  components: {
    'Link': Link,
  },
  props: ['items', 'title'],
  data() {
    return {
    }
  }
})
</script>
