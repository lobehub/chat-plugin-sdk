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
      height: z.number().optional(),
      mode: z.enum(['iframe', 'modules']).optional(),
      url: z.string(),
      width: z.number().optional(),
    })
    .optional(),
});
