import { onMounted } from 'vue';

import { PluginPayload, lobeChat } from '@/client';

export const useOnStandalonePluginInitVue = <T = any>(
  callback: (payload: PluginPayload<T>) => void,
) => {
  onMounted(() => {
    lobeChat.getPluginPayload().then((e) => {
      if (!e) return;

      callback(e);
    });
  });
};
