<template>
  <div>
    <form  
      @submit.prevent="conditional(form)"
      class="form"

    >
    <div>
      <label for="title">Title</label>
       <input type="text" id="title" v-model="form.title" />
    </div>
    <div>

      <label for="description">Description</label>
      <input type="text" id="description" v-model="form.description" />
    </div>
    <div>

      <label for="priority">Priority</label>
            <input type="number" id="priority" v-model="form.priority" />
    </div>  
    <div>

      <label for="status">Status</label>
            <input type="checkbox" id="status" v-model="form.status" />
    </div>  
            <button type="submit">{{ $route.params.id == undefined ? "Agregar" : "Editar" }}</button>
          
    </form>
    


  </div>
</template>


<script>
import { mapActions, mapState } from "vuex";
 
export default {
  name: "Form",
  data() {
    return {
      form: {
        id: 0,
        title: "",
        description: "",
        priority: 1,
        status: false,
      },

    };
  },
  computed: {
    ...mapState("tasksStore", ["task"]),
  },
  methods: {
    ...mapActions("tasksStore", ["addTaskAction", "updateTaskAction","selectedTaskAction"
    ]),
    conditional(form) {
      if (this.$route.params.id == undefined) {
        this.addTaskAction(form);
        this.cleanForm();
        this.$router.push("/list");
      } else {
        this.updateTaskAction(form);
        this.cleanForm();
        this.$router.push("/list");
      }
    },
    cleanForm() {
      this.form = {
        id: 0,
        title: "",
        description: "",
        priority: 1,
        status: false,
      };
    }
  },
  created() {
    if (this.$route.params.id != undefined) {
      this.selectedTaskAction(this.$route.params.id);
      this.form = {
        id: this.task.id,
        title: this.task.title,
        description: this.task.description,
        priority: this.task.priority,
        status: this.task.status,
      };
    } 
  },
  watch: {
    // task() {
    //   this.form = {
    //     id: this.task.id,
    //     title: this.task.title,
    //     description: this.task.description,
    //     priority: this.task.priority,
    //     status: this.task.status,
    //   };
    // },
  }
 

};
</script>

<style scoped>

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.form div {
  margin-bottom: 1rem;
}

.form label {
  /* display: block; */
  margin-bottom: 0.5rem;
  margin-right: 2rem;
}

.form input {
  /* width: 100%; */
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}


button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: #333;
  color: #fff;
  cursor: pointer;
}



</style>