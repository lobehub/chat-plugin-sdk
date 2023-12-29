import { useEffect } from 'react';

import { PluginPayload, lobeChat } from '@/client';

export const useOnStandalonePluginInit = <T = any>(
  callback: (payload: PluginPayload<T>) => void,
) => {
  useEffect(() => {
    lobeChat.getPluginPayload().then((e) => {
      if (!e) return;

      callback(e);
    });
  }, []);
};
