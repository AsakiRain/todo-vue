<template>
  <el-main :direction="horizontal">
    <el-row justify="space-evenly">
      <el-col :span="6">
        <List :data="todo" type="Todo" />
      </el-col>
      <el-col :span="6">
        <List :data="doing" type="Doing" />
      </el-col>
      <el-col :span="6">
        <List :data="done" type="Done" />
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import List from './List.vue';
import { TodoStore } from '../TodoStore.js';
export default {
  components: { List },
  setup() {
    const todoStore = TodoStore();
    return { todoStore };
  },
  data() {
    return {};
  },
  computed: {
    todo() {
      get: {
        return this.todoStore.todo.filter((item) => {
          if (item.state === 0) {
            return item;
          }
        });
      }
    },
    doing() {
      get: {
        return this.todoStore.todo.filter((item) => {
          if (item.state === 1) {
            return item;
          }
        });
      }
    },
    done() {
      get: {
        return this.todoStore.todo.filter((item) => {
          if (item.state === 2) {
            return item;
          }
        });
      }
    }
  }
};
</script>

<style>
</style>