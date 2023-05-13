<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter()

const slides = reactive({
  firstSlide: true,
  secondSlide: false,
  thirdSlide: false,
})

const nextPage = (next) => {
  if (next === 1) {
    slides.firstSlide = false
    slides.secondSlide = true
  } else if (next === 2) {
    slides.secondSlide = false
    slides.thirdSlide = true
  } else {
    router.push('/dashboard')
  }
}

</script>
<template>
  <div v-if="slides.firstSlide" class="flex flex-col items-center justify-center w-full h-screen px-3">
    <div class="flex items-center justify-start w-full h-[350px] bg-[url('/pattern.svg')] bg-contain">
      <img src="/slide_1.svg" alt="slide_1" class="z-10 ">
    </div>
    <div class="h-[35vh] flex flex-col items-center justify-center w-full px-5">
      <h1 class="mb-3 text-4xl font-bold text-green-600">Order for Food</h1>
      <p class="h-20 overflow-hidden text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem eius, harum sint quam deleniti?</p>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-10 h-2 bg-green-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div @click="nextPage(1)" class="relative w-full p-3 mx-5 text-lg font-bold text-center text-white bg-green-600 rounded-full shadow-lg bottom-5">Next</div>
  </div>
  <div v-if="slides.secondSlide" class="flex flex-col items-center justify-center w-full h-screen px-3">
    <div class="flex items-center justify-start w-full h-[350px] bg-[url('/pattern.svg')] bg-contain">
      <img src="/slide_2.svg" alt="slide_1" class="z-10">
    </div>
    <div class="h-[35vh] flex flex-col items-center justify-center w-full px-5">
      <h1 class="mb-3 text-4xl font-bold text-green-600">Easy Payment</h1>
      <p class="h-20 overflow-hidden text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem eius, harum sint quam deleniti?</p>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div class="w-10 h-2 bg-green-500 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
      </div>
    </div>
    <div @click="nextPage(2)" class="relative w-full p-3 mx-5 text-lg font-bold text-center text-white bg-green-600 rounded-full shadow-lg bottom-5">Next</div>
  </div>
  <div v-if="slides.thirdSlide" class="flex flex-col items-center justify-center w-full h-screen px-3">
    <div class="flex items-center justify-start w-full h-[350px] bg-[url('/pattern.svg')] bg-contain">
      <img src="/slide_3.svg" alt="slide_1" class="z-10 ">
    </div>
    <div class="h-[35vh] flex flex-col items-center justify-center w-full px-5">
      <h1 class="mb-3 text-4xl font-bold text-green-600">Fast Delivery</h1>
      <p class="h-20 overflow-hidden text-justify">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum autem eius, harum sint quam deleniti?</p>
      <div class="flex items-center my-5 space-x-1">
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div class="w-2 h-2 bg-gray-400 rounded-full"></div>
        <div class="w-10 h-2 bg-green-500 rounded-full"></div>
      </div>
    </div>
    <div @click="nextPage(0)" class="relative w-full p-3 mx-5 text-lg font-bold text-center text-white bg-green-600 rounded-full shadow-lg bottom-5">Next</div>
  </div>
</template>


<style scoped></style>