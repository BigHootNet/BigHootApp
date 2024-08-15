import React, { useState, useEffect } from 'react';
import { Column } from '../components/GalleryColumn';
import HorizontalScroll from '../components/HorizontalScroll';
import '../styles/pages/Projects.scss';
import mockData from '../assets/data/data.json';

interface GalleryItem {
  headline: string;
  subheadline?: string;
  content: string;
  imageUrl?: string;
  imageAlt?: string;
  caption?: string;
  headlineType?: 'hl1' | 'hl2' | 'hl3' | 'hl4' | 'hl5' | 'hl6' | 'hl7' | 'hl8' | 'hl9' | 'hl10';
}

const Projects: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);

  useEffect(() => {
    setGalleryItems(mockData.galleryItems as GalleryItem[]);
  }, []);

  return (
    <HorizontalScroll>
      <div id="column-container">
        {galleryItems.map((item, index) => (
          <Column
            key={index}
            headline={item.headline}
            subheadline={item.subheadline}
            content={item.content}
            imageUrl={item.imageUrl}
            imageAlt={item.imageAlt}
            caption={item.caption}
            headlineType={item.headlineType}
          />
        ))}
      </div>
    </HorizontalScroll>
  );
};

export default Projects;
