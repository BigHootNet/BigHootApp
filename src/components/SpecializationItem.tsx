import React from 'react';
import '../styles/components/SpecializationItem.scss';

interface SpecializationItemProps {
  title: string;
  subTitle: string;
}

const SpecializationItem: React.FC<SpecializationItemProps> = ({ title, subTitle }) => {
  return (
    <h3 className="text">
      {title}
      <span>{subTitle}</span>
    </h3>
  );
};

export default SpecializationItem;