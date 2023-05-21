<!-- views/DoctorDetail.vue -->
<template>
  <div class="doctor-detail">
    <div class="card mb-3" style="max-width: 540px;">
      <div class="row g-0">
        <div class="col-md-4">
          <img v-bind:src="'https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286'" alt="Doctor Image" class="img-fluid rounded-circle" />
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">{{ doctor.name }} {{ doctor.surname }}</h5>
            <p class="card-text"><small class="text-muted">City: {{ doctor.city }}</small></p>
            <p class="card-text">Specialization: {{ doctor.specialization }}</p>
            <p class="card-text">Experience: {{ doctor.experience }} years</p>
            <p class="card-text">
      <button @click="toggleOpinions">
        {{ showOpinions ? 'Hide Opinions' : 'Show Opinions' }}
      </button>
    </p>
    <div v-if="showOpinions">
        <div class="opinion" v-for="(opinion, index) in doctor.opinions" :key="index">
          {{ opinion }}
        </div>
        <!-- New opinion input field and button -->
        <input v-model="newOpinion" type="text" placeholder="Add your opinion" />
        <button @click="addOpinion">Add Opinion</button>
      </div>
    <div>
      <button @click="toggleDays">
        {{ showDays ? 'Hide Days' : 'Show Days' }}
      </button>
      <ul v-if="showDays">
        <li v-for="(available, day) in doctor.Calendar" :key="day" @click="available || selectDay(day)" :class="{selected: doctor.Calendar[day]}">
          <label :for="'day' + (day + 1)" :style="{color: doctor.Calendar[day] ? 'red' : ''}">{{ day + 1 }}</label>
          <span>{{ available ? ' June Booked' : ' June Available' }}</span>
        </li>
      </ul>
    </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { doc, getDoc, updateDoc, arrayUnion } from 'firebase/firestore';
import { useRoute } from 'vue-router';
import db from '../firebaseInit';

const doctor = ref({});
const showOpinions = ref(false);
const newOpinion = ref('');

function toggleOpinions() {
  showOpinions.value = !showOpinions.value;
}
const showDays = ref(false);

function toggleDays() {
  showDays.value = !showDays.value;
}

function selectDay(day) {
  if (doctor.value && doctor.value.Calendar) {
    doctor.value.Calendar[day] = true;
  }
}
async function addOpinion() {
  if (doctor.value.opinions && newOpinion.value.trim() !== '') {
    doctor.value.opinions.push(newOpinion.value);

    const route = useRoute();
    const doctorId = route.params.id;
    const doctorRef = doc(db, 'doctors', doctorId);
    
    await updateDoc(doctorRef, {
      opinions: arrayUnion(newOpinion.value),
    });

    newOpinion.value = '';
  }
}

onMounted(async () => {
  const route = useRoute();
  const doctorId = route.params.id;
  const doctorRef = doc(db, 'doctors', doctorId);
  const docSnap = await getDoc(doctorRef);

  if (docSnap.exists()) {
    doctor.value = docSnap.data();
  } else {
    console.log('No such document!');
  }
  //calendar
  if (!doctor.value.Calendar) {
    doctor.value.Calendar = Array(30).fill(false);
  }
});
</script>

<style scoped>

li.selected {
  color: red;
}

.opinion {
  margin: 1rem 0;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
}


.card img {
  width: 100px;
  height: 100px;
  height: auto;
}
.calendar ul {
  list-style: none;
}
.calendar li {
  margin: 5px 0;
}
.calendar li.booked {
  color: red;
}
</style>
