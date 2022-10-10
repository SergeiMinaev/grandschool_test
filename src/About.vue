<template>
  <div>
    <div class='about'>
      <h1 class='about__title'>О нас</h1>
      <div class='about__descr' v-html='aboutText'></div>
      <div class='about__docs about-docs'>
        <div class='about-docs__item' v-for='doc in docs'>
          <img :src='doc.thumb' />
          <a :href='doc.thumb' target='_blank'>
            <span class='text-btn'>{{ doc.label }}&nbsp;→</span>
          </a>
        </div>
      </div>
    </div>

    <Activity title='Направления деятельности' :items='areas' label='Подробнее' /> 

    <div class='coop'>
      <h2 class='coop__title'>Сотрудничаем любым способом</h2>
      <div class='coop__cards'>
        <div class='coop__card'>
          <OnlineForm class='coop-card__img' />
          <div class='coop-card__link text-btn'>Онлайн&nbsp;заявка&nbsp;→</div>
        </div>
        <div class='coop__card coop-card'>
          <img class='coop-card__img' src='/static/img/call-us.jpg' />
          <div class='coop-card__link text-btn'>Звонок&nbsp;нам&nbsp;→</div>
        </div>
        <div class='coop__card coop-card'>
          <img class='coop-card__img' src='/static/img/office.jpg' />
          <div class='coop-card__link text-btn'>Посещение&nbsp;офиса&nbsp;→</div>
        </div>
      </div>
    </div>


    <Activity title='Наши ресурсы' :items='resources' label='Открыть' /> 

    <Team title='Наша команда' :items='team' />

    <Partners />

    <div class='about__docs-support'>
      <Docs title='Сведения об образовательной организации' :items='docList' />
      <SupportedBy />
    </div>

    <Newsletter />

  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';
import Btn from './Btn.vue';
import Activity from './Activity.vue';
import OnlineForm from './OnlineForm.vue';
import Partners from './Partners.vue';
import Team from './Team.vue';
import Docs from './Docs.vue';
import SupportedBy from './SupportedBy.vue';
import Newsletter from './Newsletter.vue';
import { aboutText, aboutDocs, docList, areas, resources, team } from './data.js';


export default defineComponent({
  components: {
    'Btn': Btn,
    'OnlineForm': OnlineForm,
    'Activity': Activity,
    'Partners': Partners,
    'Team': Team,
    'Docs': Docs,
    'SupportedBy': SupportedBy,
    'Newsletter': Newsletter,
  },
  props: [],
  data() {
    return {
      aboutText: aboutText,
      docs: aboutDocs,
      areas: areas,
      resources: resources,
      team: team,
      docList: docList,
    }
  }
})
</script>
