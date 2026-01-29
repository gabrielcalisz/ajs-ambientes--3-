import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'lime';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-ajs-accent text-white hover:bg-green-700 shadow-lg shadow-green-900/20 focus:ring-ajs-accent",
    secondary: "bg-white text-ajs-primary hover:bg-gray-50 border border-transparent shadow-md focus:ring-white",
    outline: "bg-transparent border-2 border-ajs-primary text-ajs-primary hover:bg-ajs-primary hover:text-white focus:ring-ajs-primary",
    lime: "bg-ajs-lime text-ajs-secondary hover:brightness-110 shadow-lg shadow-ajs-lime/30 focus:ring-ajs-lime",
  };

  const width = fullWidth ? "w-full" : "w-auto";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${width} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;