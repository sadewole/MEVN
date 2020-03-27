<template>
  <modal name="register-modal">
    <form>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" autocomplete="false" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="email" autocomplete="false" />
      </div>
      <div class="form-group">
        <label>Password:</label>
        <input type="password" autocomplete="false" />
      </div>
      <button class="btn">Register</button>
    </form>
  </modal>
</template>

<script>
export default {};
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
