<template>
  <div>
    <Navbar />
    <div class="container">
      <AddTodo />
      <FilterTodo />
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
</style>

