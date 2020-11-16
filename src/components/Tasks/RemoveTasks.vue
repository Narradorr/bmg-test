<template>
  <div class="remove-tasks">
    <button @click="removeHandler()" class="button test-button">Удалить</button>
  </div>
</template>

<script>
export default {
  name: "removeTask",
  methods: {
    removeHandler() {
      this.$store.dispatch("removeTasks")
    }
  }
};
</script>

<style>
</style>