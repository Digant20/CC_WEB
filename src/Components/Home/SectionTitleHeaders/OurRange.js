import React from 'react';

const OurRange = () => {
  return (
    <div >

        <div className='our-range-div'>
            OUR RANGE
        </div>
        

        <style jsx>{`
        
            .our-range-div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center;
                height: 250px;
                color: #3A3953;
                font-size: 50px;
                font-weight: bold;
                letter-spacing: 2px;
                font-family: 'Oswald', sans-serif;
            }

        `}</style>
    </div>
  )
}

export default OurRange