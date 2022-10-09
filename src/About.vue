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
      <Docs title='Сведения об образовательной организации' :items='docs2' />
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
        { thumb: '/static/img/doc-1.thumb.png',
          label: 'Лицензия в полном размере' },
        { thumb: '/static/img/doc-2.thumb.png',
          label: 'Соглашение с МУМЦФМ'
        },
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
        { icon: 'tg', label: 'Telegram',
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
      team: [
        { img: '/static/img/Avatar-1.jpg',
          name: 'Ирина',
          surname: 'Тумашова',
          position: 'Руководитель отдела консалтинга',
          email: 'i.kolesova@grandschool.net',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '478',
        },
        { img: '/static/img/Avatar-2.jpg',
          name: 'Владимир',
          surname: 'Сущенко',
          position: 'Менеджер по работе с клиентами отдела консалтинга',
          email: 'v.sushchenko@grandschool.net',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '477',
        },
        { img: '/static/img/Avatar-3.jpg',
          name: 'Максим',
          surname: 'Юнчис',
          position: 'Менеджер проектов отдела консалтинга',
          email: 'm.yunchis@grandschool.net',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '475',
        },
        { img: '/static/img/Avatar-4.jpg',
          name: 'Татьяна',
          surname: 'Долина',
          position: 'Ведущий юрист отдела консалтинга',
          email: 't.dolina@grandschool.net',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '479',
        },
        { img: '/static/img/Avatar-5.jpg',
          name: 'Олеся',
          surname: 'Михальцова',
          position: 'Юрист отдела консалтинга',
          email: 'o.mikhaltsova@grandschool.net',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '476',
        },
        { img: '/static/img/Avatar-6.jpg',
          name: 'Ульяна',
          surname: 'Ванеева',
          position: 'Директор ЧОУ ДПО «Гранд Скул»',
          email: '...',
          phone: '8 800 333-15-43',
          phoneRaw: '+78003331543',
          phoneMod: '475',
        },
      ],
      docs2: [
        { label: 'Учредительные документы', url: '#' },
        { label: 'Место нахождения, режим, график работы и прочая контактная информация', url: '#' },
        { label: 'Структура', url: '#' },
        { label: 'Устав', url: '#' },
        { label: 'Свидетельство ОГРН', url: '#' },
        { label: 'Свидетельство ИНН', url: '#' },
        { label: 'Учредительные документы', url: '#' },
        { label: 'Порядок приема, отчисления и восстановления обучающихся', url: '#' },
        { label: 'Положение об организации образовательного процесса', url: '#' },
        { label: 'Учредительные документы', url: '#' },
        { label: 'Положение о контроле за санит.-эпид. Правилами', url: '#' },
        { label: 'Учредительные документы', url: '#' },
        { label: 'Учредительные документы', url: '#' },
        { label: 'Учредительные документы', url: '#' },
      ],
    }
  }
})
</script>
