import { useCallback, useEffect, useState } from 'react';

import { lobeChat } from '@/client';

export const usePluginState = <T>(key: string, initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    lobeChat.getPluginState(key).then((e) => {
      if (!e) return;

      setValue(e);
    });
  }, [key]);

  const updateValue = useCallback(
    (value: T) => {
      setValue(value);
      lobeChat.setPluginState(key, value);
    },
    [key],
  );

  return [value, updateValue] as const;
};
