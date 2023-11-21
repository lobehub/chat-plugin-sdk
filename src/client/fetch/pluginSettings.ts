import { PluginChannel } from '../const';

export const fetchPluginSettings = <T = any>() =>
  new Promise<T>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(undefined as any);
      return;
    }

    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.renderPluginSettings) {
        resolve(e.data.value);

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.fetchPluginSettings }, '*');
  });
