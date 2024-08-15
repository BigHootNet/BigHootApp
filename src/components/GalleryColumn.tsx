// Column.tsx
import React from 'react';
import '../styles/components/Gallery-Item.scss';
import { ColumnProps } from '../types/gallery-item';

export const Column: React.FC<ColumnProps> = ({
  headline,
  subheadline,
  content,
  imageUrl,
  imageAlt,
  caption,
  headlineType = 'hl1',
}) => {
  return (
    <div className="column">
      <div className="head">
        <span className={`headline ${headlineType}`}>{headline}</span>
        {subheadline && <p><span className="headline hl4">{subheadline}</span></p>}
      </div>
      <p>{content}</p>
      {imageUrl && (
        <figure className="figure">
          <img className="media" src={imageUrl} alt={imageAlt || 'image'} />
          {caption && <figcaption className="figcaption">{caption}</figcaption>}
        </figure>
      )}
    </div>
  );
};
