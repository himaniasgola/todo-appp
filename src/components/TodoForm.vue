<template>
    <div>
                <label for="title"><b>Project</b></label><br>
                <input type="text" class="todo-input" Placeholder="Type the new title" v-model="newTodo" @keyup.enter="addTodo" />
                <button type="button" v-on:click="addTodo">add</button>
                <div v-for="todo in todos" :key="todo.id" class="todo-item">
                {{ todo.title }}
                </div>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      newTodo: '',
      idForTodo: 4,
      todos: [
        {
          'id': 1,
          'title': 'Take out the trash',
          'completed': false
        },
        {
          'id': 2,
          'title': 'Do the dishes',
          'completed': false
        }
      ]
    }
  },
  methods: {
    addTodo () {
      this.todos.push({
        id: this.idForTodo,
        title: this.newTodo,
        completed: false
      })
      this.newTodo = ''
      this.idForTodo++
    }
  }
}
</script>
