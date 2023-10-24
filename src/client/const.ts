export enum PluginChannel {
  fetchPluginMessage = 'lobe-chat:fetch-plugin-message',
  fetchPluginSettings = 'lobe-chat:fetch-plugin-settings',
  fetchPluginState = 'lobe-chat:fetch-plugin-state',

  fillStandalonePluginContent = 'lobe-chat:fill-plugin-content',
  initStandalonePlugin = 'lobe-chat:init-standalone-plugin',
  pluginReadyForRender = 'lobe-chat:plugin-ready-for-render',

  renderPlugin = 'lobe-chat:render-plugin',
  renderPluginSettings = 'lobe-chat:render-plugin-settings',
  renderPluginState = 'lobe-chat:render-plugin-state',

  updatePluginSettings = 'lobe-chat:update-plugin-settings',
  updatePluginState = 'lobe-chat:update-plugin-state',
}
