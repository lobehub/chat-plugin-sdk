import { PluginChannel } from '../const';
import { onReceiveData } from '../utils';

export const fetchPluginState = <T = any>() =>
  new Promise<T>((resolve) => {
    const receiverData = (e: MessageEvent) => {
      onReceiveData(e, (data) => {
        resolve(data.content as T);
        window.removeEventListener('message', receiverData);
      });
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.fetchPluginState }, '*');
  });
