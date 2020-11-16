<template>
  <div class="skeleton" v-if="isTaskListLoading">Loading...</div>
  <div class="list-task" v-else>
    <div
      class="icon_wrapper filter_wrapper"
      title="Фильтрация"
      @click="changeFilter()"
    >
      <img class="filter icon" src="~@/assets/filter.svg" alt="" />
    </div>
    <div class="search_wrapper">
      <input type="text" v-model="search" placeholder="Живой поиск" />
    </div>
    <template v-if="taskList.length > 0">
      <div
        class="task-item"
        v-for="(item, index) in taskList"
        :key="'task_' + index"
      >
        <div class="task-item__checkbox">
          <input
            @click="checkHandler(item)"
            class="checkbox task-checkbox"
            type="checkbox"
            v-model="item.selected"
          />
        </div>

        <div class="task-item__number">
          <span>{{ index + 1 }}</span>
        </div>

        <div class="task-item__name">
          <span> {{ item.name }}</span>
        </div>

        <div class="task-item__description">
          <span>{{ item.description }}</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="list-no-data">Нет данных. Добавьте что-нибудь</div>
    </template>
  </div>
</template>

<script>
export default {
  name: "list-tasks",
  data() {
    return {
      selectedTaskList: [],
      search: "",
    };
  },
  watch: {
    search(val) {
      console.log(val);
    },
  },
  computed: {
    isTaskListLoading() {
      return this.$store.getters["isTaskListLoading"];
    },
    taskList() {
      console.log("computed");
      if (this.search) {
        console.log("if search");

        return this.$store.getters["taskList"].filter((item) => {
          return (
            item.name.toUpperCase().indexOf(this.search.toUpperCase()) > -1 ||
            item.description.toUpperCase().indexOf(this.search.toUpperCase()) > -1
          );
        });
      } else {
        return this.$store.getters["taskList"];
      }
    },
  },
  methods: {
    checkHandler(item) {
      this.selectedTaskList.push(item.id);
      console.log(item);
    },

    async changeFilter() {
      await this.$store.dispatch("changeFilter");
    },
  },
  async created() {
    await this.$store.dispatch("getTaskList");
  },
};
</script>

<style lang="scss">
.skeleton {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10rem;
}

.filter_wrapper {
  cursor: pointer;
  display: inline-flex;
  padding: 8px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
}

.filter_wrapper:hover {
  background-color: #dfdfdf;
}

.filter.icon {
  width: 20px;
  height: 20px;
}

.list-task {
  border-top: 1px solid #dfdfdf;
  text-align: left;
  padding: 0.5rem;
}

.task-item {
  display: flex;
  align-items: flex-start;
  margin: 1rem 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 1rem;
}

.task-item:nth-child(odd) {
  background-color: #dfdfdf;
}

.task-item__checkbox,
.task-item__number {
  flex: 1;
}

.task-item__name {
  flex: 5;
  font-weight: bold;
}

.task-item__description {
  flex: 20;
}
</style>