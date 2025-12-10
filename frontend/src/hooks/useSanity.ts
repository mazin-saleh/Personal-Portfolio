import { useState, useEffect } from 'react';
import { client } from '../sanityClient';
import type { Post } from '../types/sanity';

export function usePosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "post"] | order(publishedAt desc) {
          _id,
          _createdAt,
          title,
          slug,
          publishedAt,
          excerpt,
          mainImage,
          tags
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (err) {
        console.error('Error fetching posts:', err);
        setError('Failed to load posts');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}

export function usePost(slug: string) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchPost = async () => {
      try {
        const query = `*[_type == "post" && slug.current == $slug][0] {
          ...,
          body[]{
            ...,
            _type == "imageGallery" => {
              ...,
              images[]{
                ...,
                asset->
              }
            },
            _type == "pdfEmbed" => {
              ...,
              file{
                asset->
              }
            }
          }
        }`;
        const data = await client.fetch(query, { slug });
        setPost(data);
      } catch (err) {
        console.error('Error fetching post:', err);
        setError('Failed to load post');
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}
