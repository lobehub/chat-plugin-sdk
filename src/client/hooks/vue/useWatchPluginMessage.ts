import { UnwrapRef, onMounted, onUnmounted, ref } from 'vue';

import { PluginChannel } from '../../const';
import { PluginRenderProps } from '../../type';
import { onReceiveData } from '../../utils';

export const useWatchPluginMessage = <T = any>() => {
  const result = ref<{ data: T; loading: boolean }>({
    data: undefined as T,
    loading: true,
  });

  const receiverData = (e: MessageEvent) => {
    onReceiveData(e, (data: PluginRenderProps<T>) => {
      result.value = { data: data.content as UnwrapRef<T>, loading: false };
    });
  };

  onMounted(() => {
    window?.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');
  });

  onUnmounted(() => {
    window?.removeEventListener('message', receiverData);
  });

  return result.value;
};
