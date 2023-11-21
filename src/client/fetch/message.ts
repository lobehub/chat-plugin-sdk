import { PluginRenderProps } from '@/client';

import { PluginChannel } from '../const';

export const fetchPluginMessage = <T = any>() =>
  new Promise<T>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(undefined as any);
      return;
    }
    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.renderPlugin) {
        const props = e.data.props as PluginRenderProps<T>;
        resolve(props.content as T);

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.fetchPluginMessage }, '*');
  });
