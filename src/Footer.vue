<template>
  <footer class='footer'>
    <div class='footer__contacts'>
      <h3 class='footer__title'>Контакты</h3>
      <Link icon='phone' url='tel:+78003331543' label='8 800 333-15-43' />
      <span>Звонок по России бесплатный</span>
      <Link icon='mail' url='mailto:info@grandschool.net'
        label='info@grandschool.net'
      />
    </div>
    <div class='footer__socials'>
      <Socials />
    </div>
    <div class='footer__addr'>
      <h3 class='footer__title'>Центральный офис</h3>
      <span>196084, г. Санкт-Петербург, пр. Московский, д. 97, офис 507</span>
      <Btn class='footer__btn btn btn-primary' label='Открыть Яндекс.Карты' />
    </div>
    <div class='footer__docs'>
      <Docs :items='docs' />
    </div>
  </footer>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';
import Docs from './Docs.vue';
import Link from './Link.vue';
import Socials from './Socials.vue';


export default defineComponent({
  components: {
    'Btn': Btn,
    'Docs': Docs,
    'Link': Link,
    'Socials': Socials,
  },
  data() {
    return {
      docs: [
        { label: 'Реквизиты', url: '#' },
        { label: 'Договор оферта', url: '#' },
        { label: 'Пользовательское соглашение', url: '#' },
        { label: 'Политика конфиденциальности', url: '#' },
      ]
    }
  }
})
</script>
