import React from 'react';
import { useState } from 'react';

export default function Counter({total, onClick}) {
    const [count, setCount] = useState(0);
    return (
        <div className='counter'>
            <p className='number'>{count}/{total}</p>
            <button 
                className='button' 
                onClick={() => {
                    setCount((prev) => prev+1);
                    onClick();
                }}
            >
                ADD +
            </button>
        </div>
    );
}

