import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p> 
            <Marquee className="flex gap-5" pauseOnHover={true} speed={80}>
                 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sed perferendis. Voluptas, aliquid. Voluptates labore veritatis provident sunt ut ipsa.</p>
                 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sed perferendis. Voluptas, aliquid. Voluptates labore veritatis provident sunt ut ipsa.</p>
                 <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, sed perferendis. Voluptas, aliquid. Voluptates labore veritatis provident sunt ut ipsa.</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;