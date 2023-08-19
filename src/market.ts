import { z } from 'zod';

export const lobeChatPluginMetaSchema = z.object({
  createAt: z.string(),
  homepage: z.string(),
  manifest: z.string({}),
  meta: z.object({}),
  name: z.string(),
  schemaVersion: z.string(),
});

export const marketIndexSchema = z.object({
  plugins: z.array(lobeChatPluginMetaSchema),
  version: z.number(),
});
