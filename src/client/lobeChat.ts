import {
  fetchPluginMessage,
  fetchPluginPayload,
  fetchPluginSettings,
  fetchPluginState,
} from './fetch';

class LobeChat {
  getPluginPayload = fetchPluginPayload;
  getPluginSettings = fetchPluginSettings;
  getPluginMessage = fetchPluginMessage;
  getPluginState = fetchPluginState;
}

export const lobeChat = new LobeChat();
