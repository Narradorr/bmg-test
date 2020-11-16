<template>
  <div class="task-index">
    <div class="task-add_wrapper">
      <Add></Add>
    </div>
    <div class="task-list_wrapper">
      <List></List>
      <Remove></Remove>

    </div>

  </div>
</template>

<script>
import List from "./List";
import Add from "./Add";
import Remove from "./RemoveTasks";
export default {
  name: "TaskIndex",
  components: { List, Add, Remove },
};
</script>

<style>
.task-add_wrapper{
    display: flex;
    justify-content: center;
    padding: 1rem;
}

.task-list_wrapper{
    padding: 0.5rem 2rem;
}
</style>