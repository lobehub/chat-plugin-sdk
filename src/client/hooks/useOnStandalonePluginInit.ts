import { useEffect } from 'react';

import { PluginChannel } from '@/client';
import { PluginRequestPayload } from '@/schema/market';

interface PluginPayload<T = any> {
  args?: T;
  func: string;
}

export const useOnStandalonePluginInit = <T = any>(
  callback: (payload: PluginPayload<T>) => void,
) => {
  const fn = (e: MessageEvent) => {
    if (e.data.type === PluginChannel.initStandalonePlugin) {
      const payload = e.data.props as PluginRequestPayload;
      const func = payload.apiName;
      const args = JSON.parse(payload.arguments || '{}');
      callback({ args, func });
    }
  };

  useEffect(() => {
    window.addEventListener('message', fn);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');
    return () => {
      window.removeEventListener('message', fn);
    };
  }, []);
};
