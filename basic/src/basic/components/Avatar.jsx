import React from 'react';

export default function Avatar({image ,isNew}) {
    return (
            <div className='avatar'>
                <img
                    className='photo'
                    src={image}                
                    alt='ava'
                />
                {
                    isNew &&
                    <div className='newBox'>
                        <span>NEW</span>
                    </div>
                }
            </div>
    );
}

