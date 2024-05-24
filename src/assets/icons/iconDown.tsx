import React from 'react';

const IconDown = ({ up = false }) => {
  const color = up ? '#9854F6' : '#ACADB9';
  return (
    <svg
      width="12"
      height="6"
      viewBox="0 0 12 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        transform: up ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M1.33325 1L5.47929 4.55374C5.77888 4.81054 6.22096 4.81054 6.52055 4.55374L10.6666 1"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default IconDown;
