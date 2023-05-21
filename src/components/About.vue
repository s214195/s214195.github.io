<template>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12">
          <div class="card my-3">
            <div class="card-body">
              <h1 class="card-title">About</h1>
              <p class="card-text">{{ about.description }}</p>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12">
          <div class="card my-3">
            <div class="card-body">
              <h2 class="card-title">Version Changes</h2>
              <p class="card-text">{{ version.changes }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { getDocs, collection } from 'firebase/firestore';
  import db from '../firebaseInit';
  
  const about = ref({});
  const version = ref({});
  
  onMounted(async () => {
    const aboutCollectionRef = collection(db, 'about');
    const aboutSnapshot = await getDocs(aboutCollectionRef);
    aboutSnapshot.docs.forEach(doc => {
      about.value = doc.data();
    });
  
    const versionCollectionRef = collection(db, 'version');
    const versionSnapshot = await getDocs(versionCollectionRef);
    versionSnapshot.docs.forEach(doc => {
      version.value = doc.data();
    });
  });
  </script>