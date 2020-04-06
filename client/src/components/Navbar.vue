<template>
  <div>
    <VLogModal :hideLogin="hideLogin" />
    <VRegisterModal :hideRegister="hideRegister" />
    <div class="navbar">
      <div class="container">
        <a href="#">MEVN Todo Manager</a>

        <div class="link">
          <ul>
            <div v-if="!authenticate">
              <li>
                <a href="#" @click="showRegister">Register</a>
              </li>
              <li>
                <a href="#" @click="showLogin">Login</a>
              </li>
            </div>
            <div v-else>
              <li>
                <a href="#" @click="logout">Logout</a>
              </li>
            </div>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VLogModal from "./VLogModal";
import VRegisterModal from "./VRegisterModal";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  components: {
    VLogModal,
    VRegisterModal
  },
  data() {
    return {
      isLoginModalOpen: false,
      isRegisterModalOpen: false
    };
  },
  methods: {
    ...mapActions(["logout"]),
    showLogin() {
      this.$modal.show("login-modal");
    },
    hideLogin() {
      this.$modal.hide("login-modal");
    },
    showRegister() {
      this.$modal.show("register-modal");
    },
    hideRegister() {
      this.$modal.hide("register-modal");
    }
  },
  computed: mapGetters(["authenticate"])
};
</script>

<style scoped>
.navbar {
  background: #35495e;
  height: 55px;
  width: 100%;
  overflow: hidden;
  color: #fff;
  margin-bottom: 15px;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1100px;
  margin: auto;
  height: inherit;
  overflow: auto;
  padding: 0 2rem;
}

.container ul {
  list-style: none;
}

.container ul li {
  display: inline;
  margin-right: 10px;
}
</style>
