

<template>
  <Navbar />
  <!-- <router-link to="/">Home</router-link> |
  <router-link to="/register">Sign Up</router-link>|
  <router-link to="/sign">Login</router-link>|
  <router-link to="/feed">Feed</router-link>| -->
  <router-view />
  <button @click="handleSignOut" v-if="isLoggedIn" class="btn btn-secondary">
    Sign Out
  </button>
</template>
<script setup>
import Navbar from "./components/Navbar.vue";
import { onMounted, ref } from "vue";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import router from "./router";
const isLoggedIn = ref(false);
let auth;
onMounted(() => {
  auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});
const handleSignOut = () => {
  signOut(auth).then(() => {
    router.push("/");
  });
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
