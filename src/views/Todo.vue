<template>
  <div class="home">
    <list-tasks v-if="$store.state.tasks.length"></list-tasks>
    <no-tasks v-else></no-tasks>
    <button-done-sorting v-if="$store.state.sorting"></button-done-sorting>
  </div>
</template>
<script>
import ListTasks from "../components/Todo/ListTasks.vue";
import NoTasks from "../components/Todo/NoTasks.vue";
import ButtonDoneSorting from "../components/Todo/ButtonDoneSorting.vue";
export default {
  name: "Todo",
  components: {
    ListTasks,
    NoTasks,
    ButtonDoneSorting,
  },
};
</script>
