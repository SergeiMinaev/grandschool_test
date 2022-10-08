<template>
  <div class='docs'>
    <h2 class='docs__title h2'>Сведения об образовательной организации</h2>
    <div class='docs__items'>
      <a v-for='item in items' class='docs__item text-btn' :href='item.url'>
        {{ item.label }}&nbsp;→
      </a>
    </div>
  </div>
</template>


<script lang='ts'>
import { defineComponent } from 'vue';


export default defineComponent({
  props: [],
  data() {
    return {
      items: [
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
