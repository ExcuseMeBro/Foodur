<script setup>
import { useRouter } from "vue-router";
import HomeIcon from '@/components/icons/HomeIcon.vue'
import FileIcon from '@/components/icons/FileIcon.vue'
import ChatIcon from '@/components/icons/ChatIcon.vue'
import WalletIcon from '@/components/icons/WalletIcon.vue'
import UserIcon from '@/components/icons/UserIcon.vue'

const router = useRouter()

const addRecipePage = () => router.push('/add-recipe')
const goHome = () => router.push('/dashboard')

</script>
<template>
  <div
    class="fixed bottom-0 z-50 w-full h-20 max-w-lg -translate-x-1/2 bg-white rounded-t-3xl left-1/2">
    <div class="grid h-full max-w-lg grid-cols-5 py-5">
      <router-link to="/dashboard" class="flex flex-col items-center justify-between" active-class="text-green-500">
        <div>
          <HomeIcon class="w-9 h-9"/>
        </div>
        <p class="text-xs">home</p>
      </router-link>
      <div class="flex flex-col items-center justify-between">
        <div>
          <FileIcon class="w-9 h-9"/>
        </div>
        <p class="text-xs">home</p>
      </div>
      <div class="flex flex-col items-center justify-between">
        <div>
          <ChatIcon class="w-9 h-9"/>
        </div>
        <p class="text-xs">home</p>
      </div>
      <div class="flex flex-col items-center justify-between">
        <div>
          <WalletIcon class="w-9 h-9"/>
        </div>
        <p class="text-xs">home</p>
      </div>
      <div class="flex flex-col items-center justify-between">
        <div>
          <UserIcon class="w-9 h-9"/>
        </div>
        <p class="text-xs">home</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>