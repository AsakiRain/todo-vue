<template>
  <el-card class="eachCard">
    <template #header>
      <div class="cardTitle">{{ type }}</div>
    </template>
    <Item v-for="item in data" :key="item.id" :item="item" />
  </el-card>
</template>
<script>
import Item from './Item.vue';
export default {
  name: 'List',
  props: ['data', 'type'],
  components: {
    Item
  }
};
</script>
<style>
.cardTitle {
  font-size: 1.4rem;
  font-weight: bolder;
}
.eachCard {
  min-width: 350px;
}
</style>