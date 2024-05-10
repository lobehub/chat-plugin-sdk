import { UnwrapRef, onMounted, ref } from 'vue';

import { lobeChat } from '@/client';

export const usePluginSettingsVue = <T>(initialValue: T) => {
  const value = ref(initialValue);
  onMounted(() => {
    lobeChat.getPluginSettings().then((e) => {
      if (!e) return;
      value.value = e;
    });
  });

  const updateValue = (newValue: T) => {
    value.value = newValue as UnwrapRef<T>;
    lobeChat.setPluginSettings(newValue);
  };

  return [value, updateValue] as const;
};
