export const LOBE_PLUGIN_SETTINGS = 'X-LOBE_PLUGIN_SETTINGS';

export const getPluginSettingsFromRequest = <T = any>(req: Request): T | undefined => {
  const settings = req.headers.get(LOBE_PLUGIN_SETTINGS);
  if (!settings) return;

  try {
    return JSON.parse(settings);
  } catch {
    return settings as any;
  }
};

export const createHeadersWithPluginSettings = (
  settings: any,
  header?: HeadersInit,
): HeadersInit => ({
  ...header,
  [LOBE_PLUGIN_SETTINGS]: typeof settings === 'string' ? settings : JSON.stringify(settings),
});
