<template>
  <div class="container">
    <div class="input-group mb-3 search-bar">
          <input type="text" class="form-control" placeholder="Search doctors by name, surname or city" v-model="searchText">
          <div class="input-group-append">
            <span class="input-group-text"><i class="fas fa-search"></i></span>
          </div>
        </div>
    <div class="row">
      <div class="col-12">
        <h2 class="mb-4">Doctors List</h2>
      </div>
      
      <div v-for="doctor in filteredDoctors" :key="doctor.id" class="col-lg-4 col-md-6 mb-4">
        <div class="card">
          <img v-bind:src="'https://firebasestorage.googleapis.com/v0/b/e-doctor-923d0.appspot.com/o/logo.png?alt=media&token=81045d1f-6fd9-43bf-b15f-7e7fb5c3c286'" alt="Doctor Image" class="card-img-top" />
          <div class="card-body">
            <router-link :to="{ name: 'DoctorDetail', params: { id: doctor.id } }" class="stretched-link">
            <h5 class="card-title">{{ doctor.name }} {{ doctor.Surname }}</h5>
            <p class="card-text">City: {{ doctor.city }}</p>
            <p class="card-text">Specialization: {{ doctor.specialization }}</p>
            <p class="card-text">Number: {{ doctor.number }}</p>
            </router-link>
          </div>
          <div class="card-footer">
            <small class="text-muted">Rating: ({{ getAverage(doctor.rating).toFixed(2) }})</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseInit';

const doctors = ref([]);
const searchText = ref("");

(async () => {
  const doctorCollection = collection(db, 'doctors');
  const doctorSnapshot = await getDocs(doctorCollection);
  doctors.value = doctorSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
})();

function getAverage(rating) {
  return rating.reduce((a, b) => a + b, 0) / rating.length;
}

// Filter the doctors list based on search criteria
const filteredDoctors = computed(() => {
  if (!searchText.value) return doctors.value;
  return doctors.value.filter(doctor => 
    doctor.name.toLowerCase().includes(searchText.value.toLowerCase()) ||
    doctor.Surname.toLowerCase().includes(searchText.value.toLowerCase()) ||
    doctor.city.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

</script>

<style scoped>
.card-body a {
  text-decoration: none;
  color: inherit;
}
.search-bar {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin: 0 auto 20px;
}

.search-bar .form-control {
  border-radius: 50px;
  padding-right: 50px;
}

.search-bar .input-group-text {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 20px;
  color: grey;
}

.card-link {
  text-decoration: none;
  color: inherit;
}
.card-title {
  text-decoration-style: none;
}

.doctors-list {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.doctor-card {
  text-decoration: none;
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