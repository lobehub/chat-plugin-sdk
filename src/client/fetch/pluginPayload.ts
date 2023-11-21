import { PluginRequestPayload } from '@/schema/market';

import { PluginChannel } from '../const';

export interface PluginPayload<T = any> {
  arguments?: T;
  name: string;
}

export const fetchPluginPayload = <T = any>() =>
  new Promise<PluginPayload<T>>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(undefined as any);
      return;
    }
    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.initStandalonePlugin) {
        const payload = e.data.props as PluginRequestPayload;
        const func = payload.apiName;
        const args = JSON.parse(payload.arguments || '{}');
        resolve({ arguments: args, name: func });

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');
  });
