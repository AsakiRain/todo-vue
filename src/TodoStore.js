import {
  defineStore
} from "pinia";
import {
  nanoid
} from 'nanoid';
export const TodoStore = defineStore({
  id: "TodoStore",
  state() {
    return {
      todo: JSON.parse(localStorage.todo || []),
    }
  },
  actions: {
    lsStore() {
      localStorage.todo = JSON.stringify(this.todo);
    },
    addTodo(todoTitle) {
      const todo = {
        id: nanoid(),
        title: todoTitle,
        state: 0,
      }
      this.todo.push(todo);
      this.lsStore();
    },
    changeState(act, todoId) {
      this.todo.forEach((item) => {
        if (item.id === todoId) {
          if (act === 1 && item.state < 2) {
            item.state++;
          }
          if (act === -1 && item.state > 0) {
            item.state--;
          }
        }
      })
      this.lsStore();
    },
    deleteTodo(todiId) {
      this.todo = this.todo.filter((item) => {
        if (item.id !== todiId) {
          return item;
        }
      })
      this.lsStore();
    },
  }
});