<template>
  <div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.name }}
      </li>
      <li v-for="user in users" :key="user.id">
        {{ user.city }}
      </li>
      <li v-for="user in users" :key="user.id">
        {{ user.surname }}
      </li>
      <li v-for="user in users" :key="user.id">
        {{ user.age }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { collection, getDocs } from 'firebase/firestore';
import db from '../firebaseInit';

const users = ref([]);

(async () => {
  const userCollection = collection(db, 'users');
  const userSnapshot = await getDocs(userCollection);
  users.value = userSnapshot.docs.map(doc => doc.data());
})();
</script>

