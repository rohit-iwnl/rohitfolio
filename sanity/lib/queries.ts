export const settingsQuery = `
  *[_type == "settings"][0]{
    title,
    description,
    ogImage,
    footer
  }
`;

export const heroQuery = `
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc)[0] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": mainImage,
    "author": author->{name, "picture": image},
    "date": publishedAt
  }
`;

export const moreStoriesQuery = `
  *[_type == "blogPost" && _id != $skip && defined(slug.current)] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": mainImage,
    "author": author->{name, "picture": image},
    "date": publishedAt
  }
`;

export const postQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    excerpt,
    "content": body,
    publishedAt,
    "coverImage": mainImage,
    "author": author->{name, "picture": image},
    "date": publishedAt,
    categories[]->{title},
    tags
  }
`;

export const allPostsQuery = `
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    "coverImage": mainImage,
    "author": author->{name, "picture": image},
    "date": publishedAt
  }
`; 