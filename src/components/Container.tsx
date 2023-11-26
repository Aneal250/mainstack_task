import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => {
  return (
    <div className={`w-full max-w-[1450px] px-4 lg:px-10  mx-auto ${className}`}>{children}</div>
  );
};

Container.defaultProps = {
  className: '',
};

export default Container;
