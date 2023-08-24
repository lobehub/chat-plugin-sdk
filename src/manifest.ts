import { z } from 'zod';

export const pluginApiSchema = z.object({
  description: z.string(),
  name: z.string(),
  parameters: z.object({
    properties: z.object({}),
    type: z.enum(['object']),
  }),
  url: z.string().url(),
});

export const pluginManifestSchema = z.object({
  api: z.array(pluginApiSchema),
  identifier: z.string(),
  openapi: z.string().optional(),

  ui: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
});
