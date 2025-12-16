import type { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../sanityClient';
import 'katex/dist/katex.min.css';
import Latex from 'react-latex-next';
import { ArrowUpLeft } from 'lucide-react';
import PowerPointEmbed from './PowerPointEmbed';
import Carousel from './Carousel';

export const portableTextComponents: PortableTextComponents = {
  types: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    latex: ({ value, isInline }: { value: any; isInline?: boolean }) => {
      if (!value?.body) return null;
      // Wrap in delimiters: $ for inline, $$ for block
      const content = isInline ? `$${value.body}$` : `$$${value.body}$$`;
      return <Latex>{content}</Latex>;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image: ({ value }: { value: any }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).fit('max').auto('format').url()}
            alt={value.alt || 'Post image'}
            className="rounded-lg shadow-md w-full object-cover max-h-[600px]"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-gray-500 italic">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageGallery: ({ value }: { value: any }) => {
      const { images, display } = value;
      if (!images || images.length === 0) return null;

      if (display === 'carousel') {
        return <Carousel images={images} />;
      }

      return (
        <div className={`my-8 grid gap-4 ${display === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {images.map((img: any, index: number) => (
            <div key={index} className="relative group overflow-hidden rounded-lg">
              <img
                src={urlFor(img).width(600).height(600).fit('crop').url()}
                alt={img.alt || `Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      );
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pdfEmbed: ({ value }: { value: any }) => {
        const fileAsset = value?.file?.asset;
        
        if (!fileAsset) return null;

        let url = fileAsset.url;

        // If URL is missing but we have a ref (e.g. if query didn't expand), construct it
        if (!url && fileAsset._ref) {
            const ref = fileAsset._ref;
            const [, id, extension] = ref.split('-');
            const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
            const dataset = import.meta.env.VITE_SANITY_DATASET;
            url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
        }

        if (!url) return null;

        return (
            <div className="my-8 flex flex-col gap-2">
                <div className="w-full h-[600px] border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <iframe 
                        src={url} 
                        className="w-full h-full" 
                        title={value.title || 'PDF Document'}
                    />
                </div>
                <div className="flex justify-between items-center px-1">
                    <span className="text-sm text-gray-500 italic">{value.title || 'PDF Document'}</span>
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
                    >
                        Download PDF <ArrowUpLeft size={14} />
                    </a>
                </div>
            </div>
        )
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    pptxEmbed: ({ value }: { value: any }) => {
        const fileAsset = value?.file?.asset;
        
        if (!fileAsset) return null;

        let url = fileAsset.url;

        // If URL is missing but we have a ref (e.g. if query didn't expand), construct it
        if (!url && fileAsset._ref) {
            const ref = fileAsset._ref;
            // Sanity file IDs are like: file-1234567890abcdef-pptx
            // We need to handle the extension correctly.
            // The split might give more parts if the ID has dashes, but standard IDs are fixed format.
            // Actually, let's just trust the expanded URL from the query if possible.
            // But for safety, let's copy the logic but adapt for pptx extension if needed.
            // The extension is the last part.
            const parts = ref.split('-');
            const id = parts[1];
            const extension = parts[parts.length - 1];
            
            const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
            const dataset = import.meta.env.VITE_SANITY_DATASET;
            url = `https://cdn.sanity.io/files/${projectId}/${dataset}/${id}.${extension}`;
        }

        if (!url) return null;

        return <PowerPointEmbed url={url} title={value.title} />;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    youtubeEmbed: ({ value }: { value: any }) => {
      const { url, title } = value;
      if (!url) return null;

      // Extract video ID from URL
      // Supports: youtube.com/watch?v=ID, youtu.be/ID, youtube.com/embed/ID
      const getYouTubeId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
      };

      const videoId = getYouTubeId(url);
      if (!videoId) return null;

      return (
        <div className="my-8">
          <div className="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={title || 'YouTube video player'}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          {title && (
            <div className="mt-2 flex justify-between items-center px-1">
              <span className="text-sm text-gray-500 italic">{title}</span>
              <a 
                href={url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline font-medium inline-flex items-center gap-1"
              >
                Watch on YouTube <ArrowUpLeft size={14} />
              </a>
            </div>
          )}
        </div>
      );
    }
  },
  block: {
    h1: ({ children }) => <h1 className="text-3xl font-serif font-bold mt-8 mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-2xl font-serif font-bold mt-8 mb-4">{children}</h2>,
    h3: ({ children }) => <h3 className="text-xl font-serif font-bold mt-6 mb-3">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-6 text-gray-700">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => <p className="mb-4 leading-relaxed text-gray-800 font-serif text-lg">{children}</p>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-4 space-y-2 font-serif">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-4 space-y-2 font-serif">{children}</ol>,
  },
  marks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    link: ({ children, value }: { children: any; value?: any }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      const target = !value.href.startsWith('/') ? '_blank' : undefined;
      return (
        <a 
          href={value.href} 
          rel={rel} 
          target={target} 
          className="text-primary hover:underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },
};
