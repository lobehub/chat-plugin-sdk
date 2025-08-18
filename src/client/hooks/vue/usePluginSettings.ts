import { UnwrapRef, onMounted, ref, watch } from 'vue';

import { lobeChat } from '@/client';

export const usePluginSettings = <T>(initialValue: T) => {
  const value = ref(initialValue);
  onMounted(() => {
    lobeChat.getPluginSettings().then((e) => {
      if (!e) return;
      value.value = e;
    });
  });

  const updateValue = (newValue: T) => {
    value.value = newValue as UnwrapRef<T>;
  };

  watch(
    () => value.value,
    (newValue) => {
      lobeChat.setPluginSettings(newValue);
    },
  );

  return [value.value, updateValue] as const;
};
