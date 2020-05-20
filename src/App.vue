<template>
  <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <a href="#" class="navbar-brand">VUE</a>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <a href="/posts" class="nav-link">Posts</a>
        </li>
        <li class="nav-item">
          <a href="/add" class="nav-link">CreatePost</a>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div>
</template>

<script>
//  import CreatePost from './components/CreatePost.vue'
// import Crud from './components/Crud.vue'

export default {
  name: 'App',
  components: {
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
