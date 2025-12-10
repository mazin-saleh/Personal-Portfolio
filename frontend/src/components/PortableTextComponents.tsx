import type { PortableTextComponents } from '@portabletext/react';
import { urlFor } from '../sanityClient';

export const portableTextComponents: PortableTextComponents = {
  types: {
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
    imageGallery: ({ value }: { value: any }) => {
      const { images, display } = value;
      if (!images || images.length === 0) return null;

      return (
        <div className={`my-8 grid gap-4 ${display === 'grid' ? 'grid-cols-2 md:grid-cols-3' : 'grid-cols-1'}`}>
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
    pdfEmbed: ({ value }: { value: any }) => {
        // Note: Actual PDF embedding usually requires a file URL. 
        // For now we'll render a download link/card.
        if (!value?.file?.asset?._ref) return null;
        
        // We need to resolve the file URL. For now, this is a placeholder.
        // In a real app, you'd query the file URL or use a helper.
        return (
            <div className="my-6 p-4 border border-gray-200 rounded-lg flex items-center gap-4 bg-gray-50">
                <div className="text-3xl">📄</div>
                <div>
                    <h3 className="font-medium text-gray-900">{value.title || 'PDF Document'}</h3>
                    <p className="text-sm text-gray-500">{value.description || 'Download to view'}</p>
                </div>
            </div>
        )
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
};
