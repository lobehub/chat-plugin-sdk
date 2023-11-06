import {
  fetchPluginMessage,
  fetchPluginPayload,
  fetchPluginSettings,
  fetchPluginState,
} from './fetch';
import {
  postToFillPluginContent,
  postToUpdatePluginSettings,
  postToUpdatePluginState,
} from './postMessage';

class LobeChat {
  getPluginPayload = fetchPluginPayload;

  getPluginSettings = fetchPluginSettings;
  setPluginSettings = postToUpdatePluginSettings;

  getPluginMessage = fetchPluginMessage;
  setPluginMessage = postToFillPluginContent;

  getPluginState = fetchPluginState;
  setPluginState = postToUpdatePluginState;
}

export const lobeChat = new LobeChat();
