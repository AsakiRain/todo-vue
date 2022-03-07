<template>
  <div class="eachWrapper" :id="item.id">
    <div class="todoWrapper">
      <div class="todoTitle">{{ item.title }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Item',
  props: ['item']
};
</script>
<style scoped>
</style>