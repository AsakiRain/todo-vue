<template>
  <el-row class="eachTodo" align="middle">
    <el-col :span="16" class="todoLeft"
      ><li class="todoLi"></li>
      <p class="todoTitle">{{ item.title }}</p>
    </el-col>

    <el-col :span="8">
      <el-button-group>
        <el-button
          type="primary"
          :icon="ArrowLeftBold"
          circle
          :disabled="item.state === 0"
          @click="handleChange(-1, item.id)"
        ></el-button>
        <el-button
          type="primary"
          :icon="ArrowRightBold"
          circle
          :disabled="item.state === 2"
          @click="handleChange(1, item.id)"
        ></el-button>
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          :icon="InfoFilled"
          icon-color="red"
          @confirm="handleDelete(item.id)"
          title="确定删除吗？"
        >
          <template #reference>
            <el-button type="danger" :icon="Delete" circle></el-button>
          </template>
        </el-popconfirm>
      </el-button-group>
    </el-col>
  </el-row>
</template>
<script>
import { TodoStore } from '../TodoStore.js';
import {
  InfoFilled,
  ArrowLeftBold,
  ArrowRightBold,
  Delete
} from '@element-plus/icons-vue';
import { ElMessage } from 'element-plus';
export default {
  setup() {
    const { changeState, deleteTodo } = TodoStore();
    return {
      changeState,
      deleteTodo,
      InfoFilled,
      ArrowLeftBold,
      ArrowRightBold,
      Delete
    };
  },
  name: 'Item',
  props: ['item'],
  methods: {
    handleChange(act, todoId) {
      this.changeState(act, todoId);
      ElMessage({ type: 'success', showClose: true, message: '移动成功！' });
    },
    handleDelete(todoId) {
      this.deleteTodo(todoId);
      ElMessage({ showClose: true, message: '已删除！' });
    }
  }
};
</script>
<style>
.eachTodo {
  margin-bottom: 20px;
}
.todoLeft {
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding-right: 10px;
}
.todoLi {
  line-height: 30px;
}
.todoTitle {
  line-height: 24px;
  display: inline-block;
  box-sizing: border-box;
  word-break: break-all;
  padding-left: 5px;
  padding-right: 5px;
  color: var(--el-color-info);
  background-color: var(--el-color-info-light-9);
  border: 1px solid var(--el-color-info-light-8);
  border-radius: 4px;
}
</style>