<template>
  <div class="container vh-100 d-flex flex-column justify-content-center">
    <h1 class="text-center mb-4">Sign In</h1>
    <div class="form-floating mb-3">
      <input type="text" placeholder="Email" v-model="email" class="form-control" id="emailInput"/>
      <label for="emailInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" placeholder="Password" v-model="password" class="form-control" id="passwordInput"/>
      <label for="passwordInput">Password</label>
    </div>
    <p v-if="errMsg" class="text-danger">{{ errMsg }}</p>
    <div class="d-grid mb-3">
      <button class="btn btn-primary" @click="register">Submit</button>
    </div>
    <div class="d-grid">
      <button class="btn btn-secondary" @click="SignInWithGoogle">Sign In With Google</button>
    </div>
  </div>
</template>

<script setup>
  
  import { ref } from "vue"
  import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
  import { useRouter} from 'vue-router';
  const email = ref("")
  const password = ref("")
  const errMsg = ref()
  const router = useRouter()

  const register = () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((data) => {
        console.log("Successfully signed in!")
        console.log(auth.currentUser)
        router.push('/DoctorList')
      })
      .catch((error) => {
        if ("vibrate" in navigator) {
        console.log("vibration also HERE")
        navigator.vibrate(2000);
      }
        console.log(error.code);
        switch (error.code) {
          case "auth/invalid-email":
            errMsg.value = "Invalid email"
            break;
          case "auth/user-not-found":
            errMsg.value = "No account with that email was found"
            break;
          case "auth/wrong-password":
            errMsg.value = "Wrong Password"
            break;
          default:
            errMsg.value = "Email or password was incorrect"
            break;
        }
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
  ;

</script>

<style scoped>
.container {
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

.form-floating {
  margin-bottom: 20px;
  width: 100%;
}

.form-floating input {
  padding: 10px;
  width: 100%;
  border: 1px solid #6c5ce7;
  border-radius: 4px;
  font-size: 1em;
}

.btn-primary, .btn-secondary {
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1em;
}

.btn-primary {
  background: #6c5ce7;
}

.btn-secondary {
  background: #6c5ce7;
}

.btn-primary:hover, .btn-secondary:hover {
  opacity: 0.8;
}

.text-danger {
  margin-bottom: 20px;
}
</style>