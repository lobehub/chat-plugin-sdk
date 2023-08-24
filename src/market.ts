import { z } from 'zod';

export const pluginMetaSchema = z.object({
  author: z.string(),
  createAt: z.string(),
  homepage: z.string(),
  identifier: z.string(),
  manifest: z.string(),
  meta: z.object({
    avatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
  schemaVersion: z.number(),
});

export const marketIndexSchema = z.object({
  plugins: z.array(z.any()),
  version: z.number(),
});

export const pluginRequestPayloadSchema = z.object({
  arguments: z.string().optional(),
  indexUrl: z.string().optional(),
  name: z.string(),
});

export type PluginRequestPayload = z.infer<typeof pluginRequestPayloadSchema>;
