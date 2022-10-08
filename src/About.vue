<template>
  <div>
    <div class='about'>
      <h1 class='about__title'>О нас</h1>
      <div class='about__descr' v-html='text'></div>
      <div class='about__docs about-docs'>
        <div class='about-docs__item' v-for='doc in docs'>
          <img :src='doc.thumb' />
          <span class='text-btn'>{{ doc.label }}&nbsp;→</span>
        </div>
      </div>
    </div>

    <div class='areas'>
      <h2 class='areas__title'>Направления деятельности</h2>
      <div class='areas__items'>
        <div class='areas__item' v-for='item in areas'>
          <span v-html='item.label'></span>
          <Btn class='areas__btn btn-light' label='Подробнее' />
        </div>
      </div>
    </div>

    <div class='coop'>
      <h2 class='coop__title'>Сотрудничаем любым способом</h2>
      <div class='coop__cards'>
        <div class='coop__card'>
          <OnlineForm class='coop-card__img' />
          <div class='coop-card__link text-btn'>Онлайн&nbsp;заявка&nbsp;→</div>
        </div>
        <div class='coop__card coop-card'>
          <img class='coop-card__img' src='./assets/img/call-us.jpg' />
          <div class='coop-card__link text-btn'>Звонок&nbsp;нам&nbsp;→</div>
        </div>
        <div class='coop__card coop-card'>
          <img class='coop-card__img' src='./assets/img/office.jpg' />
          <div class='coop-card__link text-btn'>Посещение&nbsp;офиса&nbsp;→</div>
        </div>
      </div>
    </div>

    <div class='areas'>
      <h2 class='areas__title'>Наши ресурсы</h2>
      <div class='areas__items'>
        <div class='areas__item' v-for='item in resources'>
          <span v-html='item.label'></span>
          <Btn class='areas__btn btn-light' label='Подробнее' />
        </div>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';
import OnlineForm from './OnlineForm.vue';
//@ts-ignore
import thumb1 from './assets/img/doc-1.thumb.png'
//@ts-ignore
import thumb2 from './assets/img/doc-2.thumb.png'


export default defineComponent({
  components: {
    'Btn': Btn,
    'OnlineForm': OnlineForm,
  },
  props: [],
  data() {
    return {
      text: `<p>Один из ведущих учебных центров России.
        Работаем с 2006 года, за это время обучили больше 10 000 человек
        по 60 образовательным программам.</p>
        <p>Наши спикеры — профессиональная команда экспертов, специалистов и практиков,
        общение с которыми позволит вам не только получить полезные знания,
        но и перенять многолетний опыт.</p>
        <p>Официальный партнёр «Международного учебно-методического центра
        финансового мониторинга» (МУМЦФМ).</p>
        <p>Мы предлагаем пути решения проблем с практической точки зрения,
        не ограничиваясь теорией и сухим законодательством.</p>
        <p>Обучаясь в «Grand School» вы приобретаете реальный опыт,
        который поможет преуспеть в работе и бизнесе.</p>`,
      docs: [
        { thumb: thumb1, 'label': 'Лицензия в полном размере' },
        { thumb: thumb2, 'label': 'Соглашение с МУМЦФМ' },
      ],
      areas: [
        { label: 'Дистанционное&nbsp;обучение' },
        { label: 'Аттестация' },
        { label: 'Вебинары' },
        { label: 'Юридическое&nbsp;сопровождение' },
        { label: 'Разработка&nbsp;документации' },
        { label: 'Лицензирование' },
      ],
      resources: [
        { icon: 'telegram', label: 'Telegram',
          link: 'https://t.me/grschool'
        },
        { icon: 'vk', label: 'ВКонтакте', 
          link: 'https://vk.com/grand_school_official'
        },
        { icon: 'grand', label: 'GrandClass.net',
          link: 'https://grandclass.net'
        },
        { icon: 'zen', label: 'Дзен',
          link: 'https://zen.yandex.ru/id/618a2c6f54f182703b46e021'
        },
        { icon: 'yt', label: 'YouTube',
          link: 'https://www.youtube.com/channel/UCoCr94xh_Pi-zHr1m0EdbAA'
        },
      ],
    }
  }
})
</script>
