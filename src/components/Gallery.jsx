import React from 'react';

const Gallery = () => {
    return (
        <div className='w-full columns-[200px]'>
            {[...Array(11)].map((_, i) => (
                <img key={i} className='mb-4 w-full' src={`/${i+1}.jpg`} alt="" />
            ))}
        </div>
    );
};

export default Gallery;
