import { type SchemaTypeDefinition } from 'sanity'

import blockContent from './schemas/blockContent'
import category from './schemas/category'
import post from './schemas/post'
import blogPost from './schemas/blogPost'
import author from './schemas/author'
import settings from './schemas/settings'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, blogPost, author, category, blockContent, settings],
}
