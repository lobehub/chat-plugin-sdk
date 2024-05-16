import { UnwrapRef, ref, watch, watchEffect } from 'vue';

import { lobeChat } from '@/client';

export const usePluginState = <T>(key: string, initialValue: T) => {
  const value = ref(initialValue);

  watchEffect(() => {
    lobeChat.getPluginState(key).then((e) => {
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
      lobeChat.setPluginState(key, newValue);
    },
  );

  return [value.value, updateValue] as const;
};
