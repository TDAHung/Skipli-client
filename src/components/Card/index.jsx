import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ isHasBorder, Icon, title, description, to }) => {
  return (
    <Link
      to={to}
      className={`flex items-center gap-3 p-3 ${
        isHasBorder ? 'border border-gray-400 rounded-md' : ''
      } mb-10 hover:bg-gray-50 cursor-pointer`}
    >
      {Icon && <Icon size={24} />}
      <div>
        <h3 className='font-bold text-xl'>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
  );
};

export default Card;
