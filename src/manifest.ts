import { z } from 'zod';

export const pluginManifestSchema = z.object({
  name: z.string(),
  schema: z.object({
    description: z.string(),
    name: z.string(),

    parameters: z.object({
      properties: z.object({}),
      type: z.enum(['object']),
    }),
  }),

  server: z.object({
    url: z.string(),
  }),
  ui: z
    .object({
      url: z.string().optional(),
    })
    .optional(),
});
