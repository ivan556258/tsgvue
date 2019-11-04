<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
     <AppBaseSrtucture/>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBaseSrtucture from '@/components/AppBaseSrtucture.vue'

export default {
  name: 'home',
  components: {
    AppBaseSrtucture
  }
}
</script>
