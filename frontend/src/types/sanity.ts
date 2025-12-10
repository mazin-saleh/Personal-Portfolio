export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  caption?: string;
}

export interface SanitySlug {
  current: string;
  _type: 'slug';
}

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  slug: SanitySlug;
  publishedAt: string;
  excerpt?: string;
  mainImage?: SanityImage;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any[]; // Portable Text content
  tags?: string[];
}
