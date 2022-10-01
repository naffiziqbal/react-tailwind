import React from 'react';
import Features from '../Features/Features';

const PriceOption = ({option}) => {
    const {features}  = option;
    console.log(features);
    
    return (
   <div>
         <div className=' bg-cyan-400 rounded-2xl text-slate-100 p-3 text-lg '>
            <p>{option.name}</p>
            <span className='text-5xl font-bold '>{option.price}</span>
            <span className='text-sm text-slate-900'>\mon</span>
       {
           features.map((feature, idx) => <Features key={idx}  feature = {feature}/>)
        }
        <button className='bg-green-500 p-2 md:w-1/2 w-full rounded-xl mt-5 text-xl  hover:bg-green-900 duration-100 ease-in'>Buy Now</button>
        </div>
   </div>
    );
};

export default PriceOption;
