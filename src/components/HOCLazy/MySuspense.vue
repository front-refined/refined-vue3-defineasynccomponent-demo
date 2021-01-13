<template>
  <Suspense>
    <template #default>
      <component :is="wrappedComponent"
                 v-bind="$attrs" />
    </template>
    <template #fallback>
      <div>
        <Teleport to="body"
                  :disabled="isComponent">
          <div v-if="delayShow"
               class="loading"
               :class="{component:isComponent}">
            <!-- 组件和页面有两种不一样的loading方式，这里不再详细封装 -->
            <div> {{isComponent?'组件级':'页面级'}}Loading ...</div>
          </div>
        </Teleport>
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent, ref, onMounted } from 'vue';
export default defineComponent({
  name: 'HOCLazy',
  props: ['isComponent', 'wrappedComponent'],
  setup(props) {
    const delayShow = ref<boolean>(false);
    onMounted(() => {
      setTimeout(() => {
        delayShow.value = true;
        // delay 自己拿捏，也可以以 props 的方式传入
      }, 300);
    });
    return { ...props, delayShow };
  }
});
</script>

<style lang="less" scoped>
.loading {
  // 组件级样式
  &.component {
  }
  // 页面级样式
}
</style>
