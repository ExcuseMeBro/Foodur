<script setup>
import { useRouter } from 'vue-router';

const router = useRouter()

const onHandleScreenTouch = () => {
  router.push('/slides')
}
</script>
<template>
  <div class="w-full h-screen bg-[url('/welcome.jpg')] bg-cover bg-no-repeat bg-right relative" @click="onHandleScreenTouch">
    <div class="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900">
    </div>
    <div class="absolute p-5 space-y-4 text-white bottom-5">
      <p class="text-3xl font-bold">Welcome to 👋</p>
      <h1 class="text-6xl font-bold">Foodur</h1>
      <p>The best food delivery app in this century to accompany your meals.</p>
    </div>
  </div>
</template>


<style scoped></style>