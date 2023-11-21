import { PluginChannel } from '../const';

export const fetchPluginState = <T = any>(key: string) =>
  new Promise<T>((resolve) => {
    if (typeof window === 'undefined') {
      resolve(undefined as any);
      return;
    }

    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.renderPluginState && e.data.key === key) {
        resolve(e.data.value);

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ key, type: PluginChannel.fetchPluginState }, '*');
  });
