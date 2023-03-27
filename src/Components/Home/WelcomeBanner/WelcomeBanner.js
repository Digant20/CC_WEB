import { Button } from '@mui/material'
import React from 'react';
import mainDog from '../../../Assets/images/main_dog.jpg';
import dogTreats from '../../../Assets/images/dog_treats.png';

const WelcomeBanner = () => {


  return (
    <div className='main-div'>
        

        <div className='header-tags'>
        
            <span className='first-span'>FOOD THAT YOUR PET AND</span>
            <span className='second-span'>OUR PLANET BOTH LOVE</span>
            <span className='third-span'>MADE FROM THINGS YOU'D NEVER EXPECT</span>
            
            <div className='button-div'>
                <button className="shop-now-btn">SHOP NOW</button>
            </div>
        </div>

      

       

        <style jsx>{`

            .button-div{
              display: flex;
              margin-top:0px;
            }

        .shop-now-btn{
                height: 40px;
                width: 150px;
                border: 1px solid red;
                border-radius: 1px;
                background-color: red;
                color: white;
               
        }

            .main-div{
                display: flex;
                flex-direction: column;
                background-attachment: fixed;
                background-image: url(${mainDog});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;
                
                height: 750px;
               

            }

            .header-tags{
                display: flex;
                flex-direction: column;
                text-align: left;
                margin: 30% 0 20% 10%;
                text-shadow: rgba(0, 0, 0, 0.4) 0px 4px 5px;
                font-size: 70px;
                font-weight: 300;
                font-family: 'Oswald', sans-serif;
                
                
            }


            .first-span {
                    color: #57557D;    
            }

            .second-span{
                color: #57557D;
            }

            .third-span{
                color: #FCC751;
                font-size: 40px;
                text-shadow: rgba(0, 0, 0, 0.4) 0px 1px 1px;

            }

        `}</style>

    </div>
  )
}

export default WelcomeBanner