import { CheckCircleIcon } from '@heroicons/react/24/solid';
import React from 'react';

const Features = ({feature}) => {
    // console.log(feature);
    
    return (
        <div className='text-start flex items-center'>
            <CheckCircleIcon className='h-4 w-4 mr-2 ' />
            <p>{feature}</p>
        </div>
    );
};

export default Features;
