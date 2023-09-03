import { PluginChannel } from './const';
import { onReceiveData } from './utils';

export const fetchPluginMessage = () =>
  new Promise<any>((resolve) => {
    const receiverData = (e: MessageEvent) => {
      onReceiveData(e, (data) => {
        resolve(data.content);
        window.removeEventListener('message', receiverData);
      });
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.fetchPluginMessage }, '*');
  });
