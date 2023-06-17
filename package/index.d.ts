import type { SchemaDefinition } from 'mongoose'

export type SchemaDef<T> = SchemaDefinition<T> & {

}

export const Schema: (schema: SchemaDefinition) => SchemaDefinition