import { useCallback, useEffect, useState } from 'react';

import { lobeChat } from '@/client';

export const usePluginSettings = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    lobeChat.getPluginSettings().then((e) => {
      if (!e) return;

      setValue(e);
    });
  }, []);

  const updateValue = useCallback((value: T) => {
    setValue(value);
    lobeChat.setPluginSettings(value);
  }, []);

  return [value, updateValue] as const;
};
