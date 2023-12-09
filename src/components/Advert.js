import React from 'react';
import { advert } from '../data/data';

const Advert = () => {

  return (
<section className='flex justify-center my-5 md:my-10 px-2 md:px-0'>
  <div className='bg-gray-100 w-full md:w-1/2'>
    <img src={advert} alt='advertisement'  height={200}/>
  </div>
</section>
  )
}

export default Advert;