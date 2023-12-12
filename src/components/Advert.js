import React from 'react';
import { advert, advert1 } from '../data/data';

const Advert = () => {

  return (
<section className='flex justify-center my-5 md:my-10 px-2 md:px-0'>
  <div className='w-full md:w-1/2'>
    <img src={advert1 || advert} alt='advertisement'  height={200} width={`100%`}/>
    <img src={advert} alt='advertisement'  height={200} width={`100%`} className='mt-2'/>
  </div>
</section>
  )
}

export default Advert;