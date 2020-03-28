<template>
  <modal name="register-modal">
    <form @submit.prevent="onSubmit">
      <div class="form-group">
        <label>Name:</label>
        <input type="text" autocomplete="false" v-model="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" autocomplete="false" v-model="email" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" autocomplete="false" v-model="password" />
      </div>
      <p style="color: red">{{ message }}</p>
      <button class="btn">Register</button>
    </form>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    resetState() {
      this.name = "";
      this.email = "";
      this.password = "";
    },
    onSubmit() {
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password
      });
    }
  },
  computed: {},
  updated() {
    if (this.$store.state.auth.message !== "") {
      this.message = this.$store.state.auth.message;
    } else {
      this.message = "";
    }

    if (this.$store.state.auth.authenticate) {
      this.$modal.hide("register-modal");
      this.resetState();
    }
  }
};
</script>

<style scoped>
.form-group {
  box-sizing: border-box;
  display: block;
  margin-bottom: 2rem;
}

.form-group input {
  display: block;
  padding: 0.375rem 0.75rem;
  width: 100%;
  border: 1px solid #ced4da;
  line-height: inherit;
  background-clip: padding-box;
}

.btn {
  width: 100%;
  display: block;
  cursor: pointer;
  background: #333;
  color: #fff;
  padding: 10px;
  outline: none;
  border: none;
  transition: all ease-in-out 0.5s;
}

.btn:hover {
  opacity: 0.7;
}
</style>
