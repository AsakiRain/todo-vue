<template>
  <section id="body">
    {{ count }}
    <List :data="todo" />
    <List :data="todo" />
    <List :data="todo" />
  </section>
</template>

<script>
import List from './List.vue';
import { useStore } from '../store.js';
export default {
  components: { List },
  setup() {
    const {count} = useStore();
    return { count };
  },
  data() {
    return {
      todo: [
        { id: '001', title: '吃饭' },
        { id: '002', title: '睡觉' },
        { id: '003', title: '学习' }
      ],
      doing: [
        { id: '004', title: '吃饭' },
        { id: '005', title: '睡觉' },
        { id: '006', title: '学习' }
      ],
      done: [
        { id: '007', title: '吃饭' },
        { id: '008', title: '睡觉' },
        { id: '009', title: '学习' }
      ]
    };
  }
};
</script>

<style>
#body {
  display: grid;
  grid-template-columns: repeat(3, 33.3%);
}
</style>