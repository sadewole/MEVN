<template>
  <div>
    <div :class="`modal-container ${value ? 'show' : 'hide'}`">
      <div class="modal">
        <form>
          <div class="form-group">
            <label>Email:</label>
            <input type="text" />
          </div>
          <div class="form-group">
            <label>Password:</label>
            <input type="password" />
          </div>
          <button class="btn">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginModal",
  props: {
    value: {
      required: true
    }
  },
  methods: {},
  mounted() {
    const modalContainer = document.querySelector(".modal-container");
    window.addEventListener("click", e => {
      if (e.target === modalContainer) {
        this.$emit("input", !this.value);
      }
    });
  }
};
</script>

<style scoped>
.modal-container.show {
  display: block;
}
.modal-container.hide {
  display: none;
}
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
}

.modal {
  background: #fff;
  width: 780px;
  padding: 1.2rem;
  margin: 100px auto;
  z-index: 1000;
}

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

@media (max-width: 800px) {
  .modal {
    width: 85%;
  }
}
</style>
