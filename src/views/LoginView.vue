<script setup>
import { useRouter } from 'vue-router'
import PizzaIcon from '@/components/icons/PizzaIcon.vue';
const router = useRouter()

</script>

<template>
  <main class="flex items-center justify-center w-full min-h-screen px-5">
    <div class="flex flex-col items-center justify-center h-full space-y-10">
      <PizzaIcon class="w-20 h-20 text-gray-600" />
      <p class="text-2xl font-bold">
        Login to Your Account
      </p>
      <div @click="nextPage(0)" class="w-full p-3 text-lg font-bold text-center text-white bg-green-600 rounded-full shadow-lg mt-28 bottom-5">Get Started</div>
    </div>
  </main>
</template>
