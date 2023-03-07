export const tasksStore = {
  namespaced: true,
  state: {
    tasklist: [],
    task: {
      id: 1,
      title: "",
      description: "",
      priority: 1,
      status: 1,
    },
  },
  mutations: {
    getTaskListState(state, tasklist) {
      state.tasklist = tasklist;
    },
    addTaskState(state, task) {
      state.tasklist.push(task);
    },
    deleteState(state, id) {
      state.tasklist = state.tasklist.filter((task) => task.id !== id);
    },
    updateTaskState(state, task) {
      state.tasklist = state.tasklist.map((item) => {
        if (item.id === task.id) {
          return task;
        }
        return item;
      });
    },
    selectedTaskState(state, id) {
      state.task = state.tasklist.find((task) => task.id === id);
    }
  },
  actions : {
    async getTaskListAction(context) {
      const response = await fetch("https://localhost:7010/api/tasklist");
      const data = await response.json();
      context.commit("getTaskListState", data);
    },
    async addTaskAction(context, task) {
      const response = await fetch("https://localhost:7010/api/tasklist/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(task)
      });
      const data = await response.json();
      context.commit("addTaskState", data);
    },
    async deleteTaskAction(context, id) {
      await fetch(`https://localhost:7010/api/tasklist/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        }
      });
      context.commit("deleteState", id);
    },
    async updateTaskAction(context, task) {
      await fetch(`https://localhost:7010/api/tasklist/${task.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(task)
      });
      context.dispatch("updateTaskState", task);
    },
    selectedTaskAction({ commit }, id) {
      commit('selectedTaskState', id)
  },
  },
};
