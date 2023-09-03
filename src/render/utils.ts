import { PluginChannel } from '@/render/const';
import { PluginRenderProps } from '@/types';

export const onPluginReady = (e: MessageEvent, onReady: () => void) => {
  if (e.data.type === PluginChannel.pluginReadyForRender) {
    onReady();
  }
};

export const onPluginFetchMessage = (e: MessageEvent, onRequest: (data: any) => void) => {
  if (e.data.type === PluginChannel.fetchPluginMessage) {
    onRequest(e.data);
  }
};

export const sendMessageToPlugin = (window: Window, props: any) => {
  window.postMessage({ props, type: PluginChannel.renderPlugin }, '*');
};

export const onReceiveData = <T>(e: MessageEvent, onData: (data: PluginRenderProps<T>) => void) => {
  if (e.data.type === PluginChannel.renderPlugin) {
    const props = e.data.props as PluginRenderProps<T>;
    onData(props);
  }
};
