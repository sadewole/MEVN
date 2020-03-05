<template>
  <div>
    <div class="modal-container">
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
export default {};
</script>

<style scoped>
.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
}

.modal {
  background: #fff;
  width: 780px;
  padding: 20px;
  margin: 100px auto;
}

.form-group {
  box-sizing: border-box;
  display: block;
  margin-bottom: 2.5rem;
}

.btn,
input {
  display: block;
  padding: 10px 0;
  width: 100%;
}
</style>
