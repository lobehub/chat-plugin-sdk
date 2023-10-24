import { useCallback, useEffect, useState } from 'react';

import { fetchPluginSettings } from '@/client/fetch';
import { postToUpdatePluginSettings } from '@/client/postMessage';

export const usePluginSettings = <T>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    fetchPluginSettings().then((e) => {
      if (!e) return;

      setValue(e);
    });
  }, []);

  const updateValue = useCallback((value: T) => {
    setValue(value);
    postToUpdatePluginSettings(value);
  }, []);

  return [value, updateValue] as const;
};
