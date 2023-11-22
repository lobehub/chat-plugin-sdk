import { PluginRequestPayload } from '@/schema/market';

import { PluginChannel } from '../const';

/**
 * Represents a plugin payload.
 *
 * @template T - Type of the arguments.
 * @property {T} [arguments] - The arguments for the plugin.
 * @property {string} name - The name of the api payload
 * @property {any} settings - The settings for the plugin.
 * @property {any} [state] - The state of the current plugin message
 */
export interface PluginPayload<T = any> {
  arguments?: T;
  name: string;
  settings?: any;
  state?: any;
}

export const fetchPluginPayload = <T = any>() =>
  new Promise<PluginPayload<T>>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(undefined as any);
      return;
    }
    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.initStandalonePlugin) {
        // TODO: drop e.data.props in v2
        const payload: PluginRequestPayload = e.data.payload || e.data.props;
        const func = payload.apiName;
        const args = JSON.parse(payload.arguments || '{}');
        resolve({
          arguments: args,
          name: func,
          settings: e.data.settings,
          state: e.data.state,
        });

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.pluginReadyForRender }, '*');
  });
