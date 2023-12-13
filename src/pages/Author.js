import React from 'react'
import Bio from '../components/Bio';
import Card from '../components/Card';

const Author = () => {
  return (
    <div>
      <div className='w-full bg-gray-200 mb-10 flex justify-center items-center'>
      <Bio />
      </div>
      <Card />
    </div>
  )
}

export default Author;