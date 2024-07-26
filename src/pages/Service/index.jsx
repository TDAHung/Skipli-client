import React from 'react';
import Card from '../../components/Card';
import { SiScratch } from 'react-icons/si';
import { GiInspiration } from 'react-icons/gi';

const ServicePage = () => {
  return (
    <div className='flex-1 p-20'>
      <div className='w-fit'>
        <h1 className='mb-20 font-bold text-2xl'>Generate post ideas and captions in seconds</h1>
        <Card
          Icon={SiScratch}
          to='scratch'
          title='Start from scratch'
          description='Generate new captions to engage, delight, or sell'
          isHasBorder={true}
        />
        <Card
          Icon={GiInspiration}
          to='inspire'
          title='Get inspired'
          description='Generate post ideas and captions for a topic'
          isHasBorder={true}
        />
      </div>
    </div>
  );
};

export default ServicePage;
