import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
    schema: z.object({
        title: z.string(),
        excerpt: z.string(),
        date: z.string(),
        category: z.enum(['Fitness Advice', 'Nutrition Tips', 'Mindset', 'Recipes', 'Fitness Myths']),
        image: z.string(),
        author: z.string().default('Transform Team'),
    }),
});

export const collections = {
    'blog': blogCollection,
};
