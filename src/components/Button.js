import React from 'react';

function Button({ title, icon = null, onClick, className }) {
  return (
    <button
      onClick={onClick}
      className={`text-white w-[380px] rounded-full
border-gray-500 flex items-center justify-center py-3 hover:border-white ${className}`}
    >
      <span className="absolute text-lg -translate-x-40 ">{icon}</span>
      <span className="font-semibold text-sm">{title}</span>
    </button>
  );
}

export default Button;
