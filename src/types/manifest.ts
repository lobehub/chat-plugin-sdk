import { JSONSchema7 } from 'json-schema';

/**
 * Plugin Schema
 * @desc the schema of plugin, de´scribe the api input of the function
 * @nameCN 插件清单
 * @descCN 描述一个插件的构成要素
 */
export interface PluginSchema extends Omit<JSONSchema7, 'type'> {
  properties: {
    [key: string]: JSONSchema7;
  };
  type: 'object';
}

export interface LobeChatPluginApi {
  description: string;
  name: string;
  parameters: PluginSchema;
  /**
   * Endpoint URL
   * @desc The endpoint URL of the plugin
   * @nameCN 服务端接口
   * @descCN 插件服务端的接口地址 URL
   */
  url: string;
}

/**
 * Plugin manifest
 * @desc Represents the manifest of a plugin
 * @nameCN 插件清单
 * @descCN 描述一个插件的构成要素
 */
export interface LobeChatPluginManifest {
  api: LobeChatPluginApi[];
  gateway?: string;
  /**
   * Plugin name
   * @desc The name of the plugin
   * @nameCN 插件名称
   * @descCN 插件的名称，需要和提交到 LobeChat Plugins 仓库的插件名称一致
   */
  identifier: string;
  openapi?: string;
  settings?: PluginSchema;
  /**
   * plugin ui on user side
   * @desc The type of rendering for the plugin
   * @nameCN 用户界面
   * @descCN 插件在用户侧的展示内容
   */
  ui?: {
    /**
     * component url
     * @desc The type of rendering for the plugin
     * @nameCN 动态组件
     * @descCN 插件的渲染类型
     */
    url?: string;
  };
}
