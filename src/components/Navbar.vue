<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link to="/" class="nav-link">Home</router-link>
          <router-link to="/register" class="nav-link">Sign Up</router-link>
          <router-link to="/sign" class="nav-link">Login</router-link>
          <router-link to="/feed" class="nav-link">Feed</router-link>
          <!-- <button
            @click="handleSignOut"
            v-if="isLoggedIn"
            class="btn btn-danger"
          >
            Sign Out
          </button> -->
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
</style>