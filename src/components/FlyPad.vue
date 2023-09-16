<template>
  <g style="transform: translate(21vw);" @touchstart="enableDrive()" @touchend="disableDrive()"
    @touchcancel="disableDrive">
    <rect width="58vw" height="99vh" stroke="cyan" rx="20px" />
    <circle ref="drivingWheel" cx="29vw" cy="50vh" r="10em" fill="none" stroke="cyan" />


  </g>
  <text fill="cyan" x="50vw" y="92vh" text-anchor="middle" dominant-baseline="middle" font-size="1.5rem">
    &lt; Hold to drive &gt;
  </text>
</template>

<script lang="ts" setup>
import { DisableDriveEvent, EnableDriveEvent } from 'src/models/models';
import { Arcane } from 'arcanepad-web-sdk';
import { ref } from 'vue';

const drivingWheel = ref<SVGCircleElement>()

function enableDrive() {
  Arcane.msg.emitToViews(new EnableDriveEvent())
  drivingWheel.value!.style.fill = 'cyan'
}

function disableDrive() {
  Arcane.msg.emitToViews(new DisableDriveEvent())
  drivingWheel.value!.style.fill = 'none'
}

</script>

<style scoped></style>
