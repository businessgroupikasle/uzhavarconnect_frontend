import React from 'react';
import { Link } from 'react-router-dom';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'green' | 'outline' | 'ghost' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  to?: string;
  isExternal?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  to,
  isExternal = false,
  icon,
  iconPosition = 'right',
  className = '',
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-4 py-2 gap-1.5',
    md: 'text-sm sm:text-[15px] px-6 py-2.5 sm:px-7 sm:py-3 gap-2',
    lg: 'text-base px-7 py-3.5 sm:px-8 sm:py-4 gap-2.5',
  };

  const variantStyles = {
    // Golden / warm amber primary button matching reference
    primary: 'bg-[#b87d2b] hover:bg-[#a26b20] active:bg-[#925f1b] text-white shadow-md shadow-black/20 hover:shadow-lg border border-transparent focus:ring-[#b87d2b]',
    // Translucent dark with golden/amber border matching reference
    secondary: 'bg-[#062413]/70 hover:bg-[#0a301a]/85 active:bg-[#041a0d] text-white border border-[#b87d2b] shadow-sm hover:shadow-md focus:ring-[#b87d2b]',
    // Green brand button
    green: 'bg-[#15803d] hover:bg-[#166534] text-white shadow-md hover:shadow-lg focus:ring-emerald-700',
    // Clean outline
    outline: 'bg-transparent hover:bg-emerald-50 text-[#15803d] border-2 border-[#15803d] focus:ring-emerald-600',
    // WhatsApp button
    whatsapp: 'bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md focus:ring-emerald-700',
    // Ghost
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700 focus:ring-slate-300',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-flex shrink-0">{icon}</span>}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
