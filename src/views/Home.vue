<template>
  <div class="home">
    <img alt="Vue logo"
         src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import slow from '@/utils/slow';
import HOCLazy from '@/components/HOCLazy';

import { defineComponent } from 'vue';

// 模拟延迟3s
const HelloWorld = HOCLazy(
  () => slow(import('@/components/HelloWorld.vue'), 3000),
  true
);

// 正常调用
// import HelloWorld from '@/components/HelloWorld.vue';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld
  }
});
</script>
