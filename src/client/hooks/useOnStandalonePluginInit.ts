import { useEffect } from 'react';

import { PluginPayload, fetchPluginPayload } from '../fetch/pluginPayload';

export const useOnStandalonePluginInit = <T = any>(
  callback: (payload: PluginPayload<T>) => void,
) => {
  useEffect(() => {
    fetchPluginPayload().then((e) => {
      if (!e) return;

      callback(e);
    });
  }, []);
};
