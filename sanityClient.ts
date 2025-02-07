import { createClient } from '@sanity/client';

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-03-25',
  token: process.env.SANITY_API_TOKEN!, // Ensure you set this in your .env file
});
