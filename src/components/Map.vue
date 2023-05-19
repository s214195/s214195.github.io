<template>
  <div>
    <div id="mymap" class="map"></div>
    <button @click="locateMe">Locate Me</button>
  </div>
</template>

<script>


export default {
  mounted() {
    this.showMap();
  },
  methods: {
    showMap() {
      this.map = L.map('mymap').setView([50.049683, 19.944544], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
      }).addTo(this.map);
    },
    locateMe() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    },
    showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      this.map.setView([latitude, longitude], 13);
      L.marker([latitude, longitude]).addTo(this.map);
    },
  },
};
</script>

<style>
.map {
  height: 400px; /* Set the desired height for the map container */
}
</style>