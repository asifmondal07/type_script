
import type { ProductsData } from '../../api/auth'
import { useState } from 'react';


function PostCart({ id, title, image, price, description, category }: ProductsData) {
    
        const [isExpanded, setIsExpanded] = useState(false);

            const toggleDescription = () => {
             setIsExpanded((prev:boolean) => !prev);
            };
  return (
     <div className='w-60 bg-amber-50 rounded-xl p-4 cursor-pointer hover:shadow-lg transition'>
         
      <h2 className='text-xl font-bold'>{title.slice(0,10)}</h2>
            <div className='w-45 justify-center mb-4 mt-4'>
              {image && (
                    <img
                        src={typeof image === 'string' ? image : image.toString()}
                        alt={title}
                        className='px-5 py-0 rounded-4xl w-full h-48 object-cover'
                    />
                    )}
            </div>
            
            <p className='text-black-700 mt-3'> 
                 {isExpanded ? description : `${description.slice(0, 20)}...`}
                    <button
                    onClick={toggleDescription}
                    className='ml-2 text-blue-600 underline text-sm'
                    >
                    {isExpanded ? 'Show less' : 'Read more'}
                    </button>
            </p>
            <p className='text-black-700 mt-3'>Category: {category}</p>
            <p className='text-black-700 mt-3'>Price: ${price}</p>
            <button className='bg-blue-500 text-white px-4 py-2 roundedw-lg mt-4 hover:bg-blue-600 transition'>
                Add to Cart 
            </button>
    </div>
  )
}

export default PostCart
