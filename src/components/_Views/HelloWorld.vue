<template>
  <div class="hello">
    <TaskIndex></TaskIndex>
  </div>
</template>

<script>
import TaskIndex from "../Tasks/Index";
export default {
  name: "test_app",
  components: { TaskIndex },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
