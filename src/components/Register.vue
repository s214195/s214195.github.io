<template>
  <div class="container vh-100 d-flex flex-column justify-content-center">
    <h1 class="text-center mb-4">Create an Account</h1>
    <div class="form-floating mb-3">
      <input type="text" placeholder="Email" v-model="email" class="form-control" id="emailInput"/>
      <label for="emailInput">Email</label>
    </div>
    <div class="form-floating mb-3">
      <input type="password" placeholder="Password" v-model="password" class="form-control" id="passwordInput"/>
      <label for="passwordInput">Password</label>
    </div>
    <div class="d-grid mb-3">
      <button class="btn btn-primary" @click="register">Submit</button>
    </div>
    <div class="d-grid mb-3">
      <button class="btn btn-secondary" @click="SignInWithGoogle">Log In With Google</button>
    </div>
    <div class="d-grid">
      <router-link class="btn btn-link sign-in-link" to="/SignIn">Sign in instead</router-link>
    </div>
  </div>
</template>

<script setup>
  import { ref } from "vue"
  import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
  import { getFirestore, doc, setDoc } from "firebase/firestore"
  import { useRouter} from 'vue-router';

  const email = ref("")
  const password = ref("")
  const router = useRouter()
  const db = getFirestore()

  const register = () => {
    createUserWithEmailAndPassword(getAuth(), email.value, password.value)
      .then((data) => {
        console.log("Succesfull registration!")
        // Add user to Firestore
        setDoc(doc(db, 'users', data.user.uid), {
          email: email.value,
          uid: data.user.uid
        });
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
        // Add user to Firestore
        setDoc(doc(db, 'users', result.user.uid), {
          email: result.user.email,
          uid: result.user.uid
        });
        router.push("/DoctorList");
      })
      .catch((error) => {
        console.log(error.code);
        alert(error.message);
      })
  };

</script>



<style scoped>


.sign-in-link {
    text-decoration: none;
    background-color: #6c757d; /* Bootstrap's secondary color for a grey background */
    color: white;
    transition: opacity .3s;
  }

  .sign-in-link:hover {
    opacity: 0.8;
  }
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
.btn-primary {
  background: #6c5ce7;
}

.btn-secondary {
  background: #6c5ce7;
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
