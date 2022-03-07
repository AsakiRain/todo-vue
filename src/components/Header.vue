<template>
  <input
    type="text"
    placeholder="添加日程"
    @keydown.enter="handleAdd($event)"
    v-model="inputText"
  />
  <h2>{{ inputText }}</h2>
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    handleAdd(e) {
      let title = e.target.value;
      if(!title){
        alert("输入不能为空");
      }
      else{
        alert(title);
      }
    }
  }
};
</script>
<style scoped>
</style>