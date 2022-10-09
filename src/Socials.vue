<template>
  <div class='socials'>
    <template v-for='item in items'>
      <a v-if='item.isFooter' class='socials__item'
        :href='item.link' :title='item.label'>
        <div v-if='item.icon'
          :class='`socials__icon icon icon--${item.icon}`'
        ></div>
      </a>
    </template>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  data() {
    return {
      items: [
        { icon: 'tg', label: 'Telegram',
          link: 'https://t.me/grschool',
          isFooter: true,
        },
        { icon: 'vk', label: 'ВКонтакте', 
          link: 'https://vk.com/grand_school_official',
          isFooter: true,
        },
        { icon: 'grand', label: 'GrandClass.net',
          link: 'https://grandclass.net',
          isFooter: false,
        },
        { icon: 'zen', label: 'Дзен',
          link: 'https://zen.yandex.ru/id/618a2c6f54f182703b46e021',
          isFooter: true,
        },
        { icon: 'yt', label: 'YouTube',
          link: 'https://www.youtube.com/channel/UCoCr94xh_Pi-zHr1m0EdbAA',
          isFooter: true,
        },
      ],
    }
  }
})
</script>
