import { type SchemaTypeDefinition } from 'sanity';
import { productsSchema } from './products';
import { order } from './orders'; // Import Orders schema

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsSchema, order], // Add Orders schema to the list
};
