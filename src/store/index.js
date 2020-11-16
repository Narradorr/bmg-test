import Vue from 'vue';
import Vuex from 'vuex';
import taskService from '../services/task.service';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taskList: null,
    isTaskListLoading: false,
    sortringMethod: "id"
  },
  getters: {
    taskList: (state) => state.taskList,
    isTaskListLoading: (state) => state.isTaskListLoading
  },
  mutations: {
    setTaskList(state, data) {
      state.taskList = data;
      state.isTaskListLoading = false;
    },
    addTask(state, data) {
      let maxId = Math.max.apply(Math, state.taskList.map(function (item) { return item.id; }));
      let addingData = { id: ++maxId, ...data };

      if (state.taskList) {
        state.taskList.push(addingData)
        console.log(state.taskList);
      }
      else {
        state.taskList = [...addingData];
      }
    },

    selectTask(state, data) {
      let item = state.taskList.find(a => a.id === data.id);
      if (item) {
        item['selected'] = true;
      }
    },

    removeTasks(state) {
      state.taskList = state.taskList.filter(item => !item.selected)
    },

    chageFilter(state) {
      if (state.sortringMethod === "id") {
        state.sortringMethod = "alphabet";

        state.taskList = state.taskList.sort((a, b) => {
          let first = a.name.toUpperCase();
          let second = b.name.toUpperCase();
          return (first < second) ? -1 : (first > second) ? 1 : 0;

        });
      }
      else if (state.sortringMethod === "alphabet") {
        state.sortringMethod = "id";
        
        state.taskList = state.taskList.sort((a, b) => {
          return a.id - b.id;
        });
      }

      console.log(state.sortringMethod);
    }
  },
  actions: {
    async getTaskList({ state, commit }) {
      state.isTaskListLoading = true;
      taskService.getTasks().then((res) => {
        commit("setTaskList", res);
      });
    },

    async addTask({ commit }, data) {
      commit("addTask", data)
    },

    async selectTask({ commit, data }) {
      commit('selectTask', data)
    },

    async removeTasks({ commit }) {
      commit('removeTasks')
    },

    async changeFilter({ commit }) {
      commit("chageFilter")
    }
  },
  modules: {
  }
})
