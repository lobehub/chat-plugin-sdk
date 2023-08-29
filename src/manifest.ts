import { z } from 'zod';

const JSONSchema = z.object({
  properties: z.object({}),
  type: z.enum(['object']),
});
export const pluginApiSchema = z.object({
  description: z.string(),
  name: z.string(),
  parameters: JSONSchema,
  url: z.string().url(),
});

export const pluginManifestSchema = z.object({
  api: z.array(pluginApiSchema),
  gateway: z.string().optional(),
  identifier: z.string(),
  openapi: z.string().optional(),
  settings: JSONSchema.optional(),
  ui: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
});
