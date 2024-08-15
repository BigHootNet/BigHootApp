import React from 'react';
import '../styles/components/SpecializationItem.scss';

interface SpecializationItemProps {
  title: string;
  subTitle: string;
}

const SpecializationItem: React.FC<SpecializationItemProps> = ({ title, subTitle }) => {
  return (
    <h1 className="text">
      {title}
      <span>{subTitle}</span>
    </h1>
  );
};

export default SpecializationItem;