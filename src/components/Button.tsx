/* eslint-disable react/jsx-props-no-spreading */
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import { Icon } from '@iconify/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  type?: 'submit' | 'button';
  id?: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  type,
  id,
  className,
  icon,
  iconPosition,
  onClick,
  isLoading,
  disabled,
  ...buttonProps
}) => {
  function handleOnClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.stopPropagation();
    if (onClick) onClick();
  }
  return (
    <button
      id={id}
      type={type === 'button' ? 'button' : 'submit'}
      className={cn(`btn-primary bg-accent text-white   ${className}`, {
        'gap-2': icon,
        'flex-row-reverse': iconPosition === 'right',
        'opacity-70 cursor-not-allowed hover:brightness-100': disabled || isLoading,
      })}
      onClick={handleOnClick}
      disabled={disabled || isLoading}
      {...buttonProps}
    >
      {icon}
      {children}
      {isLoading && <Icon icon="eos-icons:loading" className="text-sm ml-2" />}
    </button>
  );
};

Button.defaultProps = {
  id: '',
  type: 'button',
  className: '',
  disabled: false,
  isLoading: false,
  icon: undefined,
  iconPosition: 'left',
  onClick: undefined,
};
export default Button;
