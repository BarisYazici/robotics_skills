import React from 'react';

export const Card = ({ children, className = '' }) => (
  <div className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
    {children}
  </div>
);

export const CardHeader = ({ children, className = '' }) => (
  <div className={`px-6 py-4 border-b border-gray-200 ${className}`}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '' }) => (
  <h3 className={`text-lg font-semibold text-gray-900 ${className}`}>
    {children}
  </h3>
);

export const CardContent = ({ children, className = '' }) => (
  <div className={`px-6 py-4 ${className}`}>{children}</div>
);

export const Button = ({
  children,
  className = '',
  disabled = false,
  onClick,
  variant = 'default',
}) => {
  const baseStyles = 'px-4 py-2 rounded-md font-medium transition-colors';
  const variants = {
    default: 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300',
    outline:
      'border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:bg-gray-100',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export const Badge = ({ children, className = '', variant = 'default' }) => {
  const variants = {
    default: 'bg-gray-100 text-gray-800',
    secondary: 'bg-blue-100 text-blue-800',
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export const Select = ({
  children,
  className = '',
  disabled = false,
  value,
  onChange,
}) => (
  <select
    className={`w-full p-2 border rounded-md bg-white disabled:bg-gray-100 ${className}`}
    disabled={disabled}
    value={value}
    onChange={onChange}
  >
    {children}
  </select>
);

export const Input = ({
  type = 'text',
  className = '',
  disabled = false,
  value,
  onChange,
  placeholder,
}) => (
  <input
    type={type}
    className={`w-full p-2 border rounded-md disabled:bg-gray-100 ${className}`}
    disabled={disabled}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
  />
);

export const Label = ({ children, className = '' }) => (
  <label
    className={`block text-sm font-medium text-gray-700 mb-1 ${className}`}
  >
    {children}
  </label>
);

export const Range = ({
  min,
  max,
  value,
  onChange,
  className = '',
  disabled = false,
}) => (
  <input
    type='range'
    min={min}
    max={max}
    value={value}
    onChange={onChange}
    disabled={disabled}
    className={`w-full ${className}`}
  />
);
