import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'ghost';
  className?: string;
}

export function Button({ variant = 'default', className = '', children, ...props }: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors duration-200';
  const variantStyles = {
    default: 'bg-primary-600 text-white hover:bg-primary-700',
    ghost: 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
  };

  const finalClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return (
    <button className={finalClassName} {...props}>
      {children}
    </button>
  );
}