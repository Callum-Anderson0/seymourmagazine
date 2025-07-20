import React from 'react';
import GrowOnInteract from './GrowOnInteract';

function Button({ 
  children, 
  onClick, 
  type = "button",
  disabled = false,
  className = "",
  ...props 
}) {
  const baseClasses = "w-full min-w-[220px] h-[45.6px] flex items-center justify-center bg-gray-800 text-white hover:bg-gray-700 transition-colors rounded-full px-12 font-semibold";
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";
  
  const buttonElement = (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${disabledClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );

  // Don't wrap with GrowOnInteract if button is disabled
  if (disabled) {
    return buttonElement;
  }

  return (
    <GrowOnInteract>
      {buttonElement}
    </GrowOnInteract>
  );
}

export default Button; 