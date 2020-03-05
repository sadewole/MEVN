<template>
  <div>
    <LoginModal />
    <div class="navbar">
      <div class="container">
        <a href="#">MEVN Todo Manager</a>

        <div class="link">
          <ul>
            <li>
              <a href="#">Register</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginModal from './LoginModal';

export default {
  name: 'Navbar',
  components: {
    LoginModal
  }
};
</script>

<style scoped>
.navbar {
  background: #35495e;
  height: 55px;
  width: 100%;
  overflow: hidden;
  color: #fff;
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
