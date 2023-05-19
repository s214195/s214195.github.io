<template>
  <div class="doctors-list">
    <div v-for="doctor in doctors" :key="doctor.id" class="doctor-card">
      <img v-bind:src="'https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286'" alt="Doctor Image" class="doctor-image" />
      <div class="doctor-info">
        <h2>{{ doctor.name }} {{ doctor.Surname }}</h2>
        <p>City: {{ doctor.city }}</p>
        <p>Specialization: {{ doctor.specialization }}</p>
      </div>
      <div class="rating">
        <i class="fa fa-star" v-for="n in Math.round(getAverage(doctor.rating))" :key="n"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseInit';

const doctors = ref([]);

(async () => {
  const doctorCollection = collection(db, 'doctors');
  const doctorSnapshot = await getDocs(doctorCollection);
  doctors.value = doctorSnapshot.docs.map(doc => doc.data());
})();

function getAverage(rating) {
  return rating.reduce((a, b) => a + b, 0) / rating.length;
}
</script>

<style scoped>
.doctors-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.doctor-card {
  width: 80%;
  border: 1px solid #9b59b6;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  background-color: #f3f2f8;
}

.doctor-info h2 {
  margin: 0;
  color: #4a4a4a;
}

.doctor-info p {
  margin: 5px 0;
  color: #4a4a4a;
}

.rating {
  margin-top: 10px;
}

.fa-star {
  color: gold;
}
.doctor-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  object-fit: cover;
}

</style>