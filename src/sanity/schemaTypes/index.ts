import { type SchemaTypeDefinition } from 'sanity'
import { productsSchema } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productsSchema],
}
