<script setup>
import { useRouter } from 'vue-router';
import SpinnerIcon from '@/components/icons/SpinnerIcon.vue'
import PizzaIcon from '@/components/icons/PizzaIcon.vue';
import { onMounted } from 'vue';

const router = useRouter()

onMounted(() => {
  setTimeout(() => {
    router.push('/welcome')
  }, 2000)
})
</script>
<template>
  <div class="relative flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-white">
    <div v-motion-pop class="flex flex-col items-center justify-center w-full h-screen text-5xl font-bold text-black">
      <div class="flex items-center justify-center">
        <PizzaIcon class="w-12 h-12 text-gray-600" />
        <p class="ml-3 text-red-600"><span class="text-green-600">Food</span>ur</p>
      </div>
      <div v-motion-pop class="absolute bottom-10">
        <SpinnerIcon />
      </div>
    </div>
  </div>
</template>

<style scoped></style>