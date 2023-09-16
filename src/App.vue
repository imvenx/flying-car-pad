<template>
  <router-view v-if="clientInitialized" />
</template>

<script setup lang="ts">
import { ref, onBeforeMount, onUnmounted } from 'vue';
import { AEventName, Arcane } from 'arcanepad-web-sdk'

const clientInitialized = ref(false)

onBeforeMount(async () => {
  Arcane.init()
  Arcane.msg.on(AEventName.Initialize, () => clientInitialized.value = true)
})

onUnmounted(() => {
  Arcane.close()
})

</script>
