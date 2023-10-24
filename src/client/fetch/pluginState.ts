import { PluginChannel } from '../const';

export const fetchPluginState = <T = any>() =>
  new Promise<T>((resolve) => {
    const receiverData = (e: MessageEvent) => {
      if (e.data.type === PluginChannel.renderPluginState) {
        resolve(e.data.props);

        window.removeEventListener('message', receiverData);
      }
    };

    window.addEventListener('message', receiverData);

    top?.postMessage({ type: PluginChannel.fetchPluginState }, '*');
  });
