import React, { ReactNode } from 'react';
import Divider from './Divider';

interface SectionTitleProps {
  children: ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
  return (
    <>
      <h2>{children}</h2>
      <Divider />
    </>
  );
};

export default SectionTitle;
