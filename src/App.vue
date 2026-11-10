<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ThemeButton from '@/components/ThemeButton.vue'
import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <NavBar />

  <ThemeButton />

  <RouterView />
  
</template>

<style lang="scss">
h1{
  font-size: 2.2rem;
  font-weight: 800;
}
h2{
  font-size: 1.6rem;
  font-weight: 600;
}
h3{
  font-size: 1.2rem;
  font-weight: 500;
}

@media (width < 1000px){

}
@media (width < 800px){
  h1{ font-size: 2rem; }
  h2{ font-size: 1rem; }
}
</style>
