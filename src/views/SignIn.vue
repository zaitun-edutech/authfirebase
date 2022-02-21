<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <h2>Sign In to Account</h2>
        <div class="card p-4">
          <form @submit.prevent="">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label"
                >Email address</label
              >
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                autocomplete="off"
                v-model="email"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Password</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                autocomplete="off"
                v-model="password"
              />
            </div>
            <div>
              <p v-if="errMsg" class="text-danger">{{ errMsg }}</p>
            </div>

            <button type="submit" class="btn btn-primary" @click="signIn">
              Submit
            </button>
            <button @click="SignInWithGoogle" class="btn btn-danger ms-4">
              Sign In with Google
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>

  <!-- <form action="" class="form-group">
    <input
      type="email"
      placeholder="Email"
      v-model="email"
      class="form-label"
    />
    <input
      type="password"
      placeholder="Password"
      v-model="password"
      class="form control"
    />
    <p v-if="errMsg">{{ errMsg }}</p>
    <button @click="signIn">Submit</button>
    <button @click="SignInWithGoogle">Sign In with Google</button>
  </form> -->
</template>

<script setup>
import { ref } from "vue";
import {
  getAuth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useRouter } from "vue-router";

const email = ref("");
const password = ref("");
const errMsg = ref();
const router = useRouter();

const signIn = () => {
  //need value because ref
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((data) => {
      console.log("success sign in");
      console.log(auth.currentUser);
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "ivalid-email";
          break;
        case "auth/user-not-found":
          errMsg.value = "user-not-found";
          break;
        case "auth/wrong-password":
          errMsg.value = "wrong-password";
          break;

        default:
          errMsg.value = "email or password was incorrect";
          break;
      }
    });
};
const SignInWithGoogle = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      console.log(result.user);
      router.push("/feed");
    })
    .catch((error) => {
      console.log(error.code);
    });
};
</script>

<style>
</style>