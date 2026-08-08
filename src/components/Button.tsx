import { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  className?: string;
  size?: 'sm' | 'default' | 'lg';
  type?: 'button' | 'submit' | 'reset';
  children: ReactNode;
  disabled?: boolean;
onClick?: (_event: MouseEvent<HTMLButtonElement>) => void;
}

export const Button = ({
  className = '',
  size = 'default',
  type = 'button',
  children,
  disabled = false,
  onClick,
  ...props
}: ButtonProps) => {
  const baseClasses = 'relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed';

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      <span className='relative flex items-center justify-center gap-2'>
        {children}
      </span>
    </button>
  );
};