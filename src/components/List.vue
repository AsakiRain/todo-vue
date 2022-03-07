<template>
  <div class="list">
    <ul>
      <Item v-for="item in data" :key="item.id" :item="item" />
    </ul>
  </div>
</template>
<script>
import Item from './Item.vue';
export default {
  name: 'List',
  props: ['data'],
  components: {
    Item
  }
};
</script>
<style scoped>
</style>