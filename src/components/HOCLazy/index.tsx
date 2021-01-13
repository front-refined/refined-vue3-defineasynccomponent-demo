import { defineAsyncComponent, defineComponent } from 'vue';
import MySuspense from './MySuspense.vue';
export default function HOCLazy(chunk: any, isComponent: boolean = false) {
  const wrappedComponent = defineAsyncComponent(chunk);
  return defineComponent({
    name: 'HOCLazy',
    setup() {
      const props = { isComponent, wrappedComponent };
      return () => <MySuspense {...props} />;
    }
  });
}
