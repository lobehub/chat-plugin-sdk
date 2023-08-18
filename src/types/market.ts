export interface PluginItem {
  createAt: string;
  homepage: string;
  manifest: string;
  meta: Meta;
  name: string;
}

export interface Meta {
  avatar: string;
  tags: string[];
}

export interface LobeChatPlugins {
  plugins: PluginItem[];
  version: 1;
}
