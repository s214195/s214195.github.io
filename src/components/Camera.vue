<template>
<div class="camera-component">
  <div class="camera-screen">
    <video ref="video" autoplay></video>
  </div>
  <div class="controls">
    <button @click="toggleCamera" class="camera-btn">
      {{ cameraOn ? 'Turn off camera' : 'Turn on camera' }}
    </button>
    <button @click="takeScreenshot" class="screenshot-btn">Take injury photo</button>
  </div>
  <div v-if="screenshotData" class="screenshot-display">
    <h2>Injury Image</h2>
    <img :src="screenshotData" alt="Screenshot">
  </div>
</div>
</template>

<script>
export default {
data() {
  return {
    cameraOn: false,
    stream: null,
    screenshotData: null,
  };
},
methods: {
  async toggleCamera() {
    if (!this.cameraOn) {
      try {
        this.stream = await navigator.mediaDevices.getUserMedia({ video: true });
        this.$refs.video.srcObject = this.stream;
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    } else {
      this.stream.getTracks().forEach(track => track.stop());
      this.$refs.video.srcObject = null;
    }
    this.cameraOn = !this.cameraOn;
  },
  takeScreenshot() {
    const canvas = document.createElement('canvas');
    canvas.width = this.$refs.video.videoWidth;
    canvas.height = this.$refs.video.videoHeight;
    canvas.getContext('2d').drawImage(this.$refs.video, 0, 0);
    this.screenshotData = canvas.toDataURL('image/png');
  }
},
beforeUnmount() {
  this.stream?.getTracks().forEach(track => track.stop());
}
};
</script>

<style scoped>
.camera-component {
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 10px;
}

.camera-screen video {
max-width: 100%;
}

.controls {
margin: 10px;
}

.camera-btn, .screenshot-btn {
padding: 10px;
margin: 10px;
background: #9b59b6;
color: #fff;
border: none;
border-radius: 5px;
cursor: pointer;
}

.camera-btn:hover, .screenshot-btn:hover {
background: #8e44ad;
}

.screenshot-display img {
max-width: 100%;
margin-top: 10px;
}
</style>