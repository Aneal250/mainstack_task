import React, { ReactNode, useEffect } from 'react';

interface ModalWrapperProps {
  component: ReactNode;
  show: boolean;
  className?: string;
  setShow: (value: boolean) => void;
}

const ModalWrapper: React.FC<ModalWrapperProps> = ({ component, show, className, setShow }) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setShow(false);
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const handleClickOutside = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    setShow(false);
  };

  return show ? (
    <div
      className="z-50  w-full  mx-auto bg-[rgba(0,0,0,0.5)] fixed inset-0 p-4  flex items-start justify-end "
      onClick={handleClickOutside}
      role="dialog"
      aria-hidden
    >
      <div
        onClick={(event) => {
          event.stopPropagation();
        }}
        className={`rounded-lg max-h-full ${className}`}
        role="dialog"
        aria-hidden
      >
        {component}
      </div>
    </div>
  ) : null;
};

ModalWrapper.defaultProps = {
  className: '',
};

export default ModalWrapper;
