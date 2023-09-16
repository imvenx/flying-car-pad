<template>
  <g style="transform: translate(80vw);" @touchmove="changeSpeed($event)" @touchend="onTouchEnd()">

    <rect width="19.9vw" height="99vh" stroke="cyan" rx="20px" />

    <text fill="cyan" x="10vw" y="8vh" text-anchor="middle" dominant-baseline="middle" font-size="1.5rem">
      {{ speed }}
    </text>

    <g style="transform: translate(15vw, 95vh);">
      <rect ref="speedFill" id="speedFill" width="10vw" :height="currentFillHeight + 'vh'" fill="cyan" />
    </g>

  </g>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { Arcane } from 'arcanepad-web-sdk';
import { ChangeSpeedEvent } from 'src/models/models'

const speedFill = ref<SVGRectElement>()

let currentFillHeight = ref(80)
const speed = ref(50)
currentFillHeight.value = (speed.value / 100) * 80
let initialTouchY: number | null = null

function changeSpeed(event: TouchEvent) {
  if (event.targetTouches) {
    const touchY = event.targetTouches[0].clientY


    if (initialTouchY === null) {
      initialTouchY = touchY
      return
    }

    const deltaY = (touchY - initialTouchY) * 0.1

    speed.value -= Math.floor(deltaY)
    speed.value = Math.max(0, Math.min(100, speed.value))

    if (speed.value > 100) speed.value = 100
    if (speed.value < 0) speed.value = 0

    currentFillHeight.value = (speed.value / 100) * 80

    initialTouchY = touchY

    Arcane.msg.emitToViews(new ChangeSpeedEvent(speed.value))
  }
}

function onTouchEnd() {
  initialTouchY = null
}


</script>

<style scoped>
#speedFill {
  transform: rotate(180deg);
}
</style>
