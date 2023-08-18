export interface PluginManifest {
  createAt: string;
  endpoint: string;
  name: string;
  render?: string;

  schema: any;
}
