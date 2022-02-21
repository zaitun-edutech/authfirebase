import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW0-e4gp622NXLuPsZR-Wb7qz-jNhldCU",
  authDomain: "vuefirebase-baf20.firebaseapp.com",
  projectId: "vuefirebase-baf20",
  storageBucket: "vuefirebase-baf20.appspot.com",
  messagingSenderId: "416091389749",
  appId: "1:416091389749:web:e0907b57eb6589d65d167c",
};

initializeApp(firebaseConfig);

const app = createApp(App);
app.use(router);
app.mount("#app");

// createApp(App).mount("#app");
