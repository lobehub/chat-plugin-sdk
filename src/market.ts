import { z } from 'zod';

export const pluginMetaSchema = z.object({
  createAt: z.string(),
  homepage: z.string(),
  manifest: z.string(),
  meta: z.object({
    avatar: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
  name: z.string(),
  schemaVersion: z.enum(['v1']),
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
