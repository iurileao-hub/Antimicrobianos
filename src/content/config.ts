/**
 * Content Collections Configuration
 * Define schemas para os módulos do curso
 */
import { defineCollection, z } from 'astro:content';

const modulosCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    moduleNumber: z.number(),
    subtitle: z.string(),
    description: z.string(),
    drugs: z.array(z.string()),
    bacteriaPlaceholder: z.string().optional(),
    bacteriaImage: z.string().optional(),
    bacteriaAlt: z.string().optional(),
    slidesUrl: z.string().optional(),
    order: z.number(),
    draft: z.boolean().default(false),
  }),
});

const guiaRapidoCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = {
  modulos: modulosCollection,
  'guia-rapido': guiaRapidoCollection,
};
