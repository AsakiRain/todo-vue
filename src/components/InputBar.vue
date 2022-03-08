<template>
  <el-row justify="center" :gutter="8" id="inputBar">
    <el-col :span="12">
      <el-input
        placeholder="添加日程"
        :prefix-icon="Calendar"
        clearable
        v-model="inputText"
        @keydown.enter="handleAdd($event)"
      />
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="handleAdd($event)">添加</el-button>
    </el-col>
  </el-row>
</template>
<script>
import { TodoStore } from '../TodoStore.js';
import { ElMessage } from 'element-plus';
import { Calendar } from '@element-plus/icons-vue';
export default {
  name: 'Header',
  setup() {
    const { addTodo } = TodoStore();
    return { addTodo, Calendar };
  },
  data() {
    return {
      inputText: ''
    };
  },
  methods: {
    handleAdd(e) {
      let title = this.inputText.trim();
      if (!title) {
        ElMessage({
          type: 'warning',
          showClose: true,
          message: '输入不能为空！'
        });
      } else {
        this.addTodo(title);
        this.inputText = '';
        this.$nextTick(() => {
          e.target.focus();
        });
      }
    }
  }
};
</script>
<style scoped>
#inputBar {
  margin-bottom: 50px;
}
</style>