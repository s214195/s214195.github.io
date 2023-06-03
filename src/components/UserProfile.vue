<template>
  <div class="container">
    <div class="row">
      <!-- User information -->
      <div class="col-md-6">
        <h1 class="mb-3">User Information</h1>
        <div class="card">
          <div class="card-body">
            <div class="mb-3">
              <img v-bind:src="'https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/user.jpg?alt=media&token=891d1d12-6559-4edb-bd8b-4f8154ba088f'" alt="User Image" class="img-fluid rounded-circle mb-3" />
            </div>
            <form @submit.prevent="updateUserInfo">
              <div class="mb-3">
                <label class="form-label">Name:</label>
                <input v-model="name" type="text" class="form-control" placeholder="Name" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Surname:</label>
                <input v-model="surname" type="text" class="form-control" placeholder="Surname" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Age:</label>
                <input v-model="age" type="number" class="form-control" placeholder="Age" required />
              </div>
              <div class="mb-3">
                <label class="form-label">Email:</label>
                <input v-model="email" type="email" class="form-control" placeholder="Email" required />
              </div>
              <div class="mb-3">
                <label class="form-label">City:</label>
                <input v-model="city" type="text" class="form-control" placeholder="City" required />
              </div>
              <button type="submit" class="btn btn-primary">Update</button>
            </form>
          </div>
        </div>
      </div>
      <!-- User Appointments -->
      <div class="col-md-6">
        <h1 class="mb-3">Your Appointments</h1>
        <div class="card">
          <div class="card-body">
            <ul class="list-group">
  <li v-for="(appointment, index) in computedAppointments" :key="index" class="list-group-item">
    Doctor: {{ appointment.doctorName }} {{ appointment.doctorSurname }}
    <br>
    Date: {{ appointment.date }}
    <br>
    <br>
    Localization: {{ appointment.doctorLoc }}
    <br>
    Time until appointment: 
    <span v-if="appointment.timeUntil.days > 0">{{ appointment.timeUntil.days }} days </span>
    <span v-if="appointment.timeUntil.hours > 0">{{ appointment.timeUntil.hours }} hours </span>
    <span v-if="appointment.timeUntil.minutes > 0">{{ appointment.timeUntil.minutes }} minutes </span>
    <br>
    Additional Info: 
    <ul>
      <li v-for="(info, infoIndex) in appointment.additionalInfo" :key="infoIndex">
        {{ info }}
      </li>
    </ul>
    <form @submit.prevent="submitAdditionalInfo(index)" class="mt-2">
      <input v-model="newInfo[index]" class="form-control" placeholder="Add important information" required />
      <button type="submit" class="btn btn-secondary mt-2">Submit</button>
    </form>
    <button class="btn btn-primary mt-2" @click="takePhoto">Add photos of injury</button>
<div class="d-flex flex-wrap">
  <img v-for="(photo, index) in photos" :key="index" :src="photo" width="20" height="20" class="m-1">
</div>
<button class="btn btn-danger mt-2" @click="cancelAppointment(index)">Cancel Appointment</button>
  </li>
  
</ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, reactive, computed } from 'vue';
import { doc, getDoc, collection, query, where, getDocs, updateDoc, arrayUnion, deleteDoc } from 'firebase/firestore';
import {getAuth, onAuthStateChanged} from 'firebase/auth';
import db from '../firebaseInit';


const computedAppointments = computed(() => {
  return appointments.value.map((appointment) => {
    const appointmentDate = new Date(appointment.date);
    const now = new Date();

    const differenceInMilliseconds = appointmentDate - now;

    const minutes = Math.floor((differenceInMilliseconds / (1000 * 60)) % 60);
    const hours = Math.floor((differenceInMilliseconds / (1000 * 60 * 60)) % 24);
    const days = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

    return {
      ...appointment,
      timeUntil: { days, hours, minutes },
    };
  });
});

const photos = ref([]);
const name = ref("");
const surname = ref("");
const age = ref("");
const email = ref("");
const city = ref("");
const uid = ref("");
const appointments = ref([]);
const newInfo = reactive({});
const auth = getAuth();
let userUnsubscribe;
const loading = ref(true);

watch(() => auth.currentUser, (user) => {
  if(user){
    if(userUnsubscribe) userUnsubscribe(); 

    userUnsubscribe = onAuthStateChanged(auth, async (user) => {
      loading.value = true;
      if (user) {
        const userRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userRef);

        if (docSnap.exists()) {
          name.value = docSnap.data().name || "";
          surname.value = docSnap.data().surname || "";
          age.value = docSnap.data().age || "";
          email.value = docSnap.data().email || "";
          city.value = docSnap.data().city || "";
          uid.value = docSnap.data().uid || "";

          const q = query(collection(db, 'appointments'), where('userId', '==', user.uid));
          const querySnapshot = await getDocs(q);
          appointments.value = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}));

          console.log("Loaded appointments:", appointments.value);

          for (let i = 0; i < appointments.value.length; i++) {
            newInfo[i] = "";
          }
          loading.value = false;
        } else {
          console.log('No such user!');
          loading.value = false;
        }
      }
    });
  } else if(userUnsubscribe) {
    userUnsubscribe(); 
    name.value = "";
    surname.value = "";
    age.value = "";
    email.value = "";
    city.value = "";
    uid.value = "";
    appointments.value = [];
    loading.value = false;
  }
}, {immediate: true});


const cancelAppointment = async (index) => {
  const appointment = appointments.value[index];
  const appointmentRef = doc(db, 'appointments', appointment.id);
  await deleteDoc(appointmentRef);
  appointments.value.splice(index, 1);
};

const updateUserInfo = async () => {
  const userRef = doc(db, 'users', uid.value);
  await updateDoc(userRef, {
    name: name.value,
    surname: surname.value,
    age: age.value,
    email: email.value,
    city: city.value
  });
};

const takePhoto = async () => {
  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    console.log('Your browser does not support the MediaDevices API');
    return;
  }

  const constraints = { video: { facingMode: 'user' }, audio: false };
  const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);

  const video = document.createElement('video');
  video.srcObject = mediaStream;
  await video.play();

  // Draw the video frame to a canvas
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  const photo = canvas.toDataURL('image/jpeg');

  // Stop the camera
  video.pause();
  mediaStream.getTracks().forEach(track => track.stop());

  // Add the photo to photos
  photos.value.push(photo);
};

const submitAdditionalInfo = async (index) => {
  const appointment = appointments.value[index];
  const appointmentRef = doc(db, 'appointments', appointment.id);
  await updateDoc(appointmentRef, {
    additionalInfo: arrayUnion(newInfo[index])
  });
  newInfo[index] = "";
};
</script>