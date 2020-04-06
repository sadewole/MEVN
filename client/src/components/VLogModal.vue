<template>
  <modal name="login-modal">
    <ValidationObserver ref="form">
      <form @submit.prevent="onSubmit">
        <ValidationProvider name="email" rules="required" v-slot="{errors}">
          <div class="form-group">
            <label>Email:</label>
            <input type="email" autocomplete="false" v-model="email" />
            <span class="red">{{errors[0]}}</span>
          </div>
        </ValidationProvider>
        <ValidationProvider name="password" rules="required" v-slot="{errors}">
          <div class="form-group">
            <label>Password:</label>
            <input type="password" autocomplete="false" v-model="password" />
            <span class="red">{{errors[0]}}</span>
          </div>
        </ValidationProvider>
        <p v-if="message !== null" class="red">{{ message }}</p>
        <button class="btn">Login</button>
      </form>
    </ValidationObserver>
  </modal>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  props: ["hideLogin"],
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate().then(success => {
        if (!success) {
          return;
        }
        this.$store
          .dispatch("login", {
            email: this.email,
            password: this.password
          })
          .then(() => {
            if (this.message === null) {
              // Reset values
              this.email = this.password = "";
              this.hideLogin();
            }
          });
      });
    }
  },
  computed: mapGetters(["message"])
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

.red {
  color: red;
}
</style>
