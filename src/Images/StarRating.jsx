// StarRating.jsx
import React from 'react';

const StarRating = ({ ratings }) => {
  const maxStars = 5;

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <StarColor key={index} filled={index < ratings} />
      ))}
    </div>
  );
};

const StarColor = ({ filled }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 500 500"
      id="star"
      style={{ marginLeft: '10px', width: '25px', height: '25px' }} 
    >
      <path
        fill={filled ? '#f4c01e' : 'white'}
        stroke="#f4c01e"
        strokeWidth="-1"
        d="M250,25L305.112,148.906C307.229,153.665 310.562,157.782 314.776,160.844C318.99,163.906 323.936,165.803 329.116,166.346L463.988,180.471L363.177,271.175C359.305,274.659 356.419,279.101 354.809,284.055C353.2,289.008 352.923,294.299 354.008,299.393L382.252,432.029L264.835,364.181C260.325,361.575 255.209,360.203 250,360.203C244.791,360.203 239.675,361.575 235.165,364.181L117.748,432.029L145.992,299.393C147.077,294.299 146.8,289.008 145.191,284.055C143.581,279.101 140.695,274.659 136.823,271.175L36.012,180.471L170.884,166.346C176.064,165.803 181.01,163.906 185.224,160.844C189.438,157.782 192.771,153.665 194.888,148.906L250,25Z"
        transform="translate(-25.612 -2.561) scale(1.10245)"
      ></path>
    </svg>
  );
};

export default StarRating;
