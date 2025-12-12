import React from 'react';

interface PowerPointEmbedProps {
  url: string;
  title?: string;
}

const PowerPointEmbed: React.FC<PowerPointEmbedProps> = ({ url, title = 'Presentation' }) => {
  // Microsoft Office Viewer requires the URL to be encoded
  const encodedUrl = encodeURIComponent(url);
  // 'wdOrigin=BROWSELINK' is often added by OneDrive but standard embed is just src
  const viewerUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodedUrl}`;

  return (
    <div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200 my-8">
      <iframe
        src={viewerUrl}
        width="100%"
        height="100%"
        frameBorder="0"
        title={title}
        allowFullScreen
      />
    </div>
  );
};

export default PowerPointEmbed;
