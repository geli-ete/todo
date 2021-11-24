<template>
  <v-list class="pt-0" flat>
    <draggable tag="ul" v-model="tasks" handle=".handle">
      <task v-for="task in tasks" :key="task.id" :task="task" />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
import Task from "./Task.vue";
export default {
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered;
      },
      set(value) {
        this.$store.dispatch("setTasks", value);
      },
    },
  },
  components: {
    draggable,
    Task,
  },
};
</script>

<style></style>
