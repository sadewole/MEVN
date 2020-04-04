<template>
  <div>
    <Navbar />
    <div class="container">
      <div v-if="isAuthenticated">
        <AddTodo />
        <FilterTodo />
      </div>
      <div v-else>
        <h4 class="unauth">Please log in to manage items</h4>
      </div>
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodo from "./components/FilterTodo.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Todo,
    AddTodo,
    FilterTodo,
    Navbar
  },
  computed: {
    isAuthenticated() {
      return this.$store.state.auth.authenticate;
    }
  }
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  box-sizing: border-box;
  font-family: "Franflin Gothic Medium", "Arial Narrow", Arial, san-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

.unauth {
  margin: 1rem;
}

.v--modal-overlay .v--modal-box.v--modal {
  width: 600px !important;
  height: inherit !important;
  margin: 30px auto !important;
  padding: 10px !important;
  top: 0px !important;
  left: 0px !important;
}
</style>
