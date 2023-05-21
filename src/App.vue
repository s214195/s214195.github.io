<template>
  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #a1a0ac;">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><router-link class="nav-link" to="/Register"> Register</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/UserList"> UserList</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/DoctorList"> DoctorList</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/Map"> Map</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/Camera"> Camera</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/SignIn"> SignIn</router-link></li>
          <li class="nav-item" v-if="isLoggedIn">
            <button class="btn btn-primary sign-out-btn" @click="handleSignOut">Sign out</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view />
</template>

<script setup>

  import {useRouter} from "vue-router";
  import { onMounted, ref } from "vue";
  import { getAuth,onAuthStateChanged, signOut } from "firebase/auth"


  const router = useRouter();
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
    })
  })

  const handleSignOut = () => {
    signOut(auth).then(() => {
      router.push("/");
    })
  }

</script>

   

<style scoped>
  .sign-out-btn:hover {
    opacity: 0.8;
  }

  .router-link-active {
    color: #6c5ce7; /* Grey when clicked (active) */
  }

  .router-link-exact-active {
    color: #6c5ce7; /* White by default */
  }
</style>