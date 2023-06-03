<template>
  <div class="doctor-detail">
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="doctor.imageUrl || 'https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286'" alt="Doctor Image" class="card-img-top" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ doctor.name }} {{ doctor.Surname }}</h5>
            <p class="card-text"><small class="text-muted">Cabinet adress: {{ doctor.adress }}</small></p>
            <p class="card-text">Specialization: {{ doctor.specialization }}</p>
            <p class="card-text">Experience: {{ doctor.experience }} years</p>
            <p class="card-text">Call doctor: <a :href="'tel:' + doctor.number">{{ doctor.number }}</a></p>
            <button class="btn btn-primary" @click="openAppointmentModal">Make Appointment</button>
            
            <div class="modal" :class="{ 'is-active': isAppointmentModalOpen }">
              <div class="modal-background"></div>
              <div class="modal-content">
                <div class="box">
                  <h1 class="title">Make an appointment</h1>
                  <div class="field form-group">
                    <label class="label form-label">Date and Time</label>
                    <input class="input form-control" type="datetime-local" v-model="appointmentDate">
                  </div>
                  <div class="field form-group">
                    <label class="label form-label">Name</label>
                    <input class="input form-control" type="text" v-model="appointmentData.name">
                  </div>
                  <div class="field form-group">
                    <label class="label form-label">Surname</label>
                    <input class="input form-control" type="text" v-model="appointmentData.surname">
                  </div>
                  <div class="field form-group">
                    <label class="label form-label">Age</label>
                    <input class="input form-control" type="number" v-model="appointmentData.age">
                  </div>
                  <div class="field form-group">
                    <label class="label form-label">Brief Description of Disease</label>
                    <textarea class="textarea form-control" v-model="appointmentData.diseaseDescription"></textarea>
                  </div>
                  <div class="buttons form-group d-flex justify-content-center">
                    <button class="button btn btn-primary" @click="makeAppointment">Submit</button>
                    <button class="button btn btn-secondary" @click="closeAppointmentModal">Cancel</button>
                  </div>
                </div>
              </div>
              <button class="modal-close is-large" @click="closeAppointmentModal"></button>
            </div>
            
            <p class="card-text">
              <button class="btn btn-primary" @click="toggleOpinions">
                {{ showOpinions ? 'Hide Opinions' : 'Show Opinions' }}
              </button>
            </p>
            
            <div v-if="showOpinions">
              <div class="opinion" v-for="(opinion, index) in doctor.opinions" :key="index">
                {{ opinion }}
              </div>
              <!-- New opinion input field and button -->
              <input v-model="newOpinion" type="text" placeholder="Add your opinion" class="form-control mb-3" />
              <button class="btn btn-primary" @click="addOpinion">Add Opinion</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-4">
      <div id="mymap" class="map"></div>
      <button class="btn btn-primary" @click="locateMe">Locate Me</button>
    </div>
  </div>
</template>


<script setup>

import { ref, onMounted, watch } from 'vue';
import { getAuth , onAuthStateChanged} from "firebase/auth";
import { doc, getDoc, updateDoc, arrayUnion, addDoc, collection } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import db from '../firebaseInit';

const route = useRoute();
const doctor = ref({});
const showOpinions = ref(false);
const newOpinion = ref('');
const map = ref(null);
const appointmentData = ref({
  name: '',
  surname: '',
  age: null,
  diseaseDescription: '',
  number: '',
  email: '',
  
});

const isAppointmentModalOpen = ref(false);
const appointmentDate = ref('');
const currentUser = ref(null);

const auth = getAuth();




watch(currentUser, (newUser) => {
  if (newUser) {
    console.log('User is signed in!');
  } else {
    console.log('No user signed in!');
  }
});

onAuthStateChanged(auth, (user) => {
  if (user) {
    currentUser.value = user;
  } else {
    currentUser.value = null;
  }
});

function openAppointmentModal() {
  if (currentUser.value) {
    isAppointmentModalOpen.value = true;
  } else {
    alert('You need to sign in to make an appointment!');
  }
}
  function closeAppointmentModal() {
    isAppointmentModalOpen.value = false;
  }

  function validateForm() {
  const currentDate = new Date();
  const appointmentDateInput = new Date(appointmentDate.value);
  
  return appointmentData.value.name.trim() !== '' &&
    appointmentData.value.surname.trim() !== '' &&
    appointmentData.value.age !== null &&
    appointmentData.value.diseaseDescription.trim() !== '' &&
    appointmentData.value.number.trim() !== '' &&
    appointmentData.value.email.trim() !== '' &&
    appointmentDateInput > currentDate;
}
  async function makeAppointment() {
  if (!currentUser.value) {
    alert('You need to sign in to make an appointment!');
    return;
  }
  
  console.log(doctor.value.Surname);
  console.log(doctor.Surname);
  console.log(doctor.name);
  console.log("Appointment")

  

  const appointmentRef = collection(db, 'appointments');
  await addDoc(appointmentRef, {
    userId: currentUser.value.uid,
    date: appointmentDate.value,
    doctorName: doctor.value.name,
    doctorLoc: doctor.value.city,
    doctorSurname: doctor.value.Surname,
    patientName: appointmentData.value.name,
    patientSurname: appointmentData.value.surname,
    patientAge: appointmentData.value.age,
    diseaseDescription: appointmentData.value.diseaseDescription,
    patientAge: appointmentData.value.number,
    patientAge: appointmentData.value.email
  });
  
  closeAppointmentModal();
}


function toggleOpinions() {
  showOpinions.value = !showOpinions.value;
}


async function addOpinion() {
  if (doctor.value.opinions && newOpinion.value.trim() !== '') {
    doctor.value.opinions.push(newOpinion.value);

    const doctorId = route.params.id; // <-- Use the route object here
    const doctorRef = doc(db, 'doctors', doctorId);
    
    await updateDoc(doctorRef, {
      opinions: arrayUnion(newOpinion.value),
    });

    newOpinion.value = '';
  }
}



//v1
function showMap() {
  map.value = L.map('mymap').setView([50.049683, 19.944544], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
      '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
  }).addTo(map.value);

  // Adding the doctor's location to the map
  L.marker([doctor.value.localization.latitude, doctor.value.localization.longitude]).addTo(map.value);
}

function locateMe() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  console.log("Latitude: " + latitude + ", Longitude: " + longitude);
  map.value.setView([latitude, longitude], 13);
  
  // Define a new icon
  var userIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41], // size of the icon
    shadowSize: [41, 41], // size of the shadow
    iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [1, -34] // point from which the popup should open relative to the iconAnchor
  });

  // Add a marker to the map with the custom icon
  L.marker([latitude, longitude], {icon: userIcon}).addTo(map.value);
  const line = L.polyline([[doctor.value.localization.latitude, doctor.value.localization.longitude], [latitude, longitude]], {color: 'red'}).addTo(map.value);
}
//v1

onMounted(async () => {
  
  const doctorId = route.params.id;
  const doctorRef = doc(db, 'doctors', doctorId);
  const docSnap = await getDoc(doctorRef);

  if (docSnap.exists()) {
    doctor.value = docSnap.data();
    //calendar
    if (!doctor.value.Calendar) {
      doctor.value.Calendar = Array(30).fill(false);
    }
    // Now that the doctor data is loaded, call showMap
    showMap();
  } else {
    console.log('No such document!');
  }
});


</script>

<style scoped>
 .modal.is-active {
    display: flex;
  }
  .modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    align-items: center;
    justify-content: center;
  }
  .modal-content {
    max-width: 400px;
    margin: auto;
  }
.map {
  height: 400px; /* Set the desired height for the map container */
}

.opinion {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
}

.list-group-item.selected {
  color: red;
}
</style>
