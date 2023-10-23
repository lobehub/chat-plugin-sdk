import { PluginChannel } from './const';

export const postToFillPluginContent = (content: any) => {
  top?.postMessage({ content, type: PluginChannel.fillStandalonePluginContent }, '*');
};

export const postToUpdatePluginState = (state: any) => {
  top?.postMessage({ state, type: PluginChannel.updatePluginState }, '*');
};
