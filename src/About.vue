<template>
  <div>
    <div class='about'>
      <h1 class='about__title'>О нас</h1>
      <div class='about__descr' v-html='text'></div>
      <div class='about__docs about-docs'>
        <div class='about-docs__item' v-for='doc in docs'>
          <img :src='doc.thumb' />
          <span>{{ doc.label }}&nbsp;→</span>
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
        </div>
      </div>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';
//@ts-ignore
import thumb1 from './assets/img/doc-1.thumb.png'
//@ts-ignore
import thumb2 from './assets/img/doc-2.thumb.png'


export default defineComponent({
  components: {
    'Btn': Btn,
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
    }
  }
})
</script>
