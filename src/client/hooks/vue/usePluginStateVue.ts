import { UnwrapRef, ref, watch } from 'vue';

import { lobeChat } from '@/client';

export const usePluginStateVue = <T>(key: string, initialValue: T) => {
  const value = ref(initialValue);

  watch(
    () => key,
    (newValue) => {
      lobeChat.getPluginState(newValue).then((e) => {
        if (!e) return;

        value.value = e;
      });
    },
    {
      immediate: true,
    },
  );

  const updateValue = (newValue: T) => {
    value.value = newValue as UnwrapRef<T>;
    lobeChat.setPluginState(key, value);
  };

  return [value, updateValue] as const;
};
