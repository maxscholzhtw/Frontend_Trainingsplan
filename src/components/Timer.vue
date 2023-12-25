<template>
  <div class="stopwatch-container">
    <h1>Stoppuhr</h1>
    <div id="stopwatch">{{ formattedTime }}</div>
    <button @click="startStopwatch" :disabled="startButtonDisabled">Start</button>
    <button @click="stopStopwatch">Stop</button>
    <button @click="resetStopwatch">Reset</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stopwatchInterval: null,
      seconds: 0,
      minutes: 0,
      hours: 0,
      startButtonDisabled: false,
    };
  },
  computed: {
    formattedTime() {
      const pad = (value) => (value < 10 ? `0${value}` : value);
      return `${pad(this.hours)}:${pad(this.minutes)}:${pad(this.seconds)}`;
    },
  },
  methods: {
    updateStopwatch() {
      this.seconds++;
      if (this.seconds === 60) {
        this.seconds = 0;
        this.minutes++;
        if (this.minutes === 60) {
          this.minutes = 0;
          this.hours++;
        }
      }
    },
    startStopwatch() {
      this.stopwatchInterval = setInterval(() => {
        this.updateStopwatch();
      }, 1000);
      this.startButtonDisabled = true;
    },
    stopStopwatch() {
      clearInterval(this.stopwatchInterval);
      this.startButtonDisabled = false;
    },
    resetStopwatch() {
      this.stopStopwatch();
      this.seconds = 0;
      this.minutes = 0;
      this.hours = 0;
    },
  },
  beforeDestroy() {
    clearInterval(this.stopwatchInterval);
  },
};
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  overflow: hidden;
}

.stopwatch-container{
  text-align: center;
  margin: 50% 25%;
}

#stopwatch {
  font-size: 2em;
}

button {
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
  margin: 5px;
}
</style>
