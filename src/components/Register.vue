<template>
  <div class="container">
    <h1>Create an Account</h1>
    <div class="form-group">
      <input type="text" placeholder="Email" v-model="email"/>
    </div>
    <div class="form-group">
      <input type="password" placeholder="Password" v-model="password"/>
    </div>
    <div class="form-group">
      <button class="submit-btn" @click="register">Submit</button>
    </div>
    <div class="form-group">
      <button class="google-btn" @click="SignInWithGoogle">Sign In With Google</button>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
  import { useRouter} from 'vue-router';
  const email = ref("")
  const password = ref("")
  const router = useRouter()

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Succesfull registration!")
        router.push('/DoctorList')
      })
      .catch((error) => {
        navigator.vibrate(2000);
        console.log(error.code);
        alert(error.message);
      })
  };
  const SignInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(getAuth(), provider)
      .then((result) => {
        console.log(result.user);
        router.push("/DoctorList");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
      
  };

</script>



<style scoped>
.container {
  /* Updated color scheme */
  background: #f3f2f8;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 10px;
}

h1 {
  color: #4a4a4a;
  font-size: 2em;
}

.form-group {
  margin-bottom: 20px;
  width: 100%;
}

.form-group input {
  padding: 10px;
  width: 100%;
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  font-size: 1em;
}

.submit-btn, .google-btn {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.submit-btn {
  background: #6c5ce7;
}

.google-btn {
  background: #6c5ce7;
}

.submit-btn:hover, .google-btn:hover {
  opacity: 0.8;
}
</style>
