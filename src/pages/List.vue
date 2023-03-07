<template>
  <div>
    <!-- table  -->
    <table>
      <thead>
        <tr>
          <th>Task</th>
          <th>Description</th>
          <th>Priority</th>
          <th>Status</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="task in tasklist" :key="task.id">
          <td>{{ task.title }}</td>
          <td>{{ task.description }}</td>
          <td>{{ task.priority }}</td>
          <td>{{ task.status }}</td>
          <td>

            <router-link :to="{
              name: 'Editar',
              params: {
                id: task.id,
              },
            }">
              <button class="btn btn-edit">
                Editar

              </button>
            </router-link>
            <button class="btn btn-delete" @click="deleteTaskAction(task.id)">Eliminar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Navbar from "@/shared/Navbar.vue";
import { mapActions, mapState } from "vuex";
import TaskListService from "../services/task.services";

export default {
  name: "List",
  components: {
    Navbar,
  },
  data() {
    return {
    };
  },
  computed: {
    ...mapState("tasksStore", ["tasklist"]),
  },
  methods: {
    ...mapActions("tasksStore", [
      "getTaskListAction","deleteTaskAction","selectedTaskAction",
    ]),
  },
  created() {
    this.getTaskListAction();
    this.selectedTaskAction(this.$route.params.id);
  },
  watch: {
  
  },
  
};
</script>

<style scoped> .container_form {
   margin-top: 150px;
   width: 100%;
 }


 .el_button {
   display: none;
 }


 table {
   border-collapse: collapse;
   width: 100%;
   border: 1px solid #ddd;
   font-size: 0.9em;
   font-family: sans-serif;
   min-width: 400px;
 }

 table thead tr {
   background-color: #009879;
   color: #ffffff;
   text-align: left;
   font-weight: bold;
 }

 table th,
 table td {
   padding: 12px 15px;
 }

 table tbody tr {
   border-bottom: 1px solid #dddddd;
 }

 table tbody tr:nth-of-type(even) {
   background-color: #f3f3f3;
 }

 .btn {
   padding: 5px 10px;
   border: none;
   border-radius: 3px;
   cursor: pointer;
   margin: 5px;
   font-size: 0.8em;
 }

 .btn-edit {
   background-color: #2ECC71;
   color: #fff;
 }

 .btn-delete {
   background-color: #E74C3C;
   color: #fff;
 }
</style>