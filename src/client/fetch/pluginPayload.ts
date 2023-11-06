import { PluginRequestPayload } from '@/schema/market';

import { PluginChannel } from '../const';

export interface PluginPayload<T = any> {
  args?: T;
  func: string;
}
export const fetchPluginPayload = <T = any>() =>
  new Promise<PluginPayload<T>>((resolve) => {
    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.initStandalonePlugin) {
        const payload = e.data.props as PluginRequestPayload;
        const func = payload.apiName;
        const args = JSON.parse(payload.arguments || '{}');
        resolve({ args, func });

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');
  });
