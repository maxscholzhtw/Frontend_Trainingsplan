<script setup lang="ts">
let timerInterval;

function startTimer() {
  let seconds = 0;
  let minutes = 0;
  let hours = 0;

  timerInterval = setInterval(function() {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }

    const formattedTime = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    document.getElementById('timer').textContent = formattedTime;
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function pad(value) {
  return value < 10 ? `0${value}` : value;
}

document.getElementById('startButton').addEventListener('click', startTimer);
document.getElementById('stopButton').addEventListener('click', stopTimer);
</script>

<template>
 <Timerside>

   <h1>Timer</h1>

   <div id="timer">00:00:00</div>

   <button id="startButton">Start</button>
   <button id="stopButton">Stop</button>

 </Timerside>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  text-align: center;
  padding: 20px;
}

#timer {
  font-size: 2em;
}

#startButton, #stopButton {
  padding: 10px;
  font-size: 1em;
  cursor: pointer;
}
</style>