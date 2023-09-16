<template>
  <svg id="cont">

    <rect width="19.9vw" height="60vh" stroke="cyan" rx="20px" />

    <g style="transform: translate(4vw, 8vh);">
      <path d="M 30 0 Q 50 -50 70 0 L 70 200 L 30 200 Z" fill="none" stroke="cyan" />

      <text fill="cyan" y="18vh" text-anchor="middle" dominant-baseline="middle" font-size="1.5rem">
        Fire
      </text>
    </g>

    <g style="transform: translate(0, 61vh);" @click="calibrate">
      <rect width="19.9vw" height="37vh" stroke="cyan" rx="20px" />



      <text fill="cyan" x="10vw" y="18vh" text-anchor="middle" dominant-baseline="middle" font-size="1.5rem">
        Calibrate
      </text>
    </g>

    <FlyPad />

    <SpeedSlider />

  </svg>
</template>

<script setup lang="ts">
import SpeedSlider from 'components/SpeedSlider.vue'
import FlyPad from 'src/components/FlyPad.vue';
import { Arcane } from 'arcanepad-web-sdk';

function calibrate() {
  Arcane.pad?.calibrateQuaternion()
}

</script>

<style scoped>
#cont {
  background-color: black;
  width: 100vw;
  height: 100vh;
}
</style>

