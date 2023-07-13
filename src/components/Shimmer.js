import React from 'react'

const number=[1,2,3,4,5,6,7,8,9];

const Shimmer = () => {
  return (
    <div className="p-1 mx-14 my-5 shadow-sm  flex flex-wrap justify-center">
      {number
        .map((e) => (
          <div className='mb-4'>
            <div
            key={e}
            className="rounded-xl w-[340px] bg-gray-200 h-60 m-2 dark:bg-gray-800"
          />
          <div className='flex mr-2'>
          <div className='w-[50px] rounded-full bg-gray-200 m-2 h-17 dark:bg-gray-800'></div>
          <div>
          <div className='w-[280px] bg-gray-200 h-5 rounded-lg m-2 dark:bg-gray-800'></div>
          <div className='w-[180px] bg-gray-200 h-5 rounded-lg m-2 dark:bg-gray-800'></div>
          </div>
          </div>
          </div>
        ))}
    </div>
  )
}

export default Shimmer