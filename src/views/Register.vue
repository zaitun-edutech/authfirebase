<template>
  <h2>Create an Account</h2>
  <p>
    <input
      type="email"
      placeholder="Email"
      v-model="email"
      autocomplete="off"
    />
  </p>
  <p>
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      autocomplete="off"
    />
  </p>
  <p><button @click="register">Submit</button></p>
  <p><button @click="SignInWithGoogle">Sign In with Google</button></p>
</template>

<script setup>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const router = useRouter();

const register = () => {
  //need value because ref
  createUserWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("success registration");
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      alert(error.message);
    });
};
const SignInWithGoogle = () => {};
</script>

<style>
</style>