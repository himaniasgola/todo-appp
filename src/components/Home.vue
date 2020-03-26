<template>
  <div id="tasks">
    <h1>Incomplete Tasks</h1>
    <ul v-if="incompleteTasks[0]">
        <li v-for="task in incompleteTasks" v-bind:key="task">
                <label>
                <input type="checkbox" v-model="task.isComplete"> {{task.description}}
            </label>
        </li>
        </ul>
            <p v-else class="success"><b>All ur tasks are completed.</b></p>
    <h2>Completed Tasks</h2>
    <ul v-if="completeTasks[0]">
        <li v-for="task in completeTasks" v-bind:key="task">
            <label>
                <input type="checkbox" v-model="task.isComplete"> {{task.description}}
            </label>
        </li>
    </ul>
    <p v-else><b>Get back to work</b></p>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      tasks: [
        {
          description: 'Go to market',
          isComplete: false
        },
        {
          description: 'Finish Homework',
          isComplete: false
        },
        {
          description: 'Clean room',
          isComplete: false
        }
      ]
    }
  },
  computed: {
    incompleteTasks () {
      return this.tasks.filter(task => !task.isComplete)
    },
    completeTasks () {
      return this.tasks.filter(task => task.isComplete)
    }
  }
}
</script>
<style>
</style>
