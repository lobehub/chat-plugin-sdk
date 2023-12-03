import { JSONSchema7 } from 'json-schema';

import { Meta } from './market';

export type LobePluginType = 'default' | 'standalone';
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
   * @desc The endpoint URL of the plugin, optional in standalone type
   * @nameCN 服务端接口
   * @descCN 插件服务端的接口地址 URL, 在 standalone 类型下是可选项
   */
  url?: string;
}

/**
 * Plugin manifest
 * @desc Represents the manifest of a plugin
 * @nameCN 插件清单
 * @descCN 描述一个插件的构成要素
 */
export interface LobeChatPluginManifest {
  $schema?: string;
  api: LobeChatPluginApi[];
  author?: string;
  /**
   * createAt
   * @desc Creation date of the plugin
   * @nameCN 创建时间
   * @descCN 插件的创建时间
   */
  createdAt?: string;
  gateway?: string;
  /**
   * homepage
   * @desc Homepage of the plugin
   * @nameCN 主页
   * @descCN 插件的主页
   */
  homepage?: string;
  /**
   * Plugin name
   * @desc The name of the plugin
   * @nameCN 插件名称
   * @descCN 插件的名称，需要和提交到 LobeChat Plugins 仓库的插件名称一致
   */
  identifier: string;
  /**
   * metadata
   * @desc Meta data of the plugin
   * @nameCN 插件元数据
   * @descCN 包含图片与标签等
   */
  meta: Meta;
  openapi?: string;
  settings?: PluginSchema;
  /**
   * plugin runtime type
   * @default default
   */
  type?: LobePluginType;
  /**
   * plugin ui on user side
   * @desc The type of rendering for the plugin
   * @nameCN 用户界面
   * @descCN 插件在用户侧的展示内容
   */
  ui?: {
    height?: number;
    mode?: 'iframe' | 'module';
    /**
     * component url
     * @desc The type of rendering for the plugin
     * @nameCN 动态组件
     * @descCN 插件的渲染类型
     */
    url: string;
    width?: number;
  };
  version?: '1';
}
