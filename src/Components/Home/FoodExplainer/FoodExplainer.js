import React from 'react';
import black_dog_big from '../../../Assets/images/black_dog_big.png';
import confused_dog from "../../../Assets/images/confused_dblack_dog.jpg";


const FoodExplainer = () => {


  return (
    <div className='main-div-food'>
        <div className='dog1-div'>

        </div>

        <div  className='content-div'>

                <div  className='header-div'>
                    100% NATURAL & WHOLESOME
                    <p className='paragraphs'>While some think insects can be icky, they are not only are a 
                    natural and nutritious part of most pet diets but are
                    the most sustainable protein source on the planet.</p>
                </div>
                
          
                <div  className='header-div'>
                    100% AIR-DRIED GOODNESS
                    <p className='paragraphs'>Superior palatability, high nutritional density and 
                    enhanced protein quality. Good enough reasons to 
                  choose air-dried a.k.a “healthy Kibble”? We think so!</p>
                </div>
                
            
                <div  className='header-div'>
                    100% SUSTAINABLE
                    <p className='paragraphs'>Did you know that food waste is responsible for 10% of global greenhouse gas emissions?  Our all-natural insect-based treats are made from Black Soldier Fly Larvae (BSFL), which are nature’s tool against food waste.</p>
                </div>
                           

            <div className='button-div-learn'>
                <button className="learn-more-btn">Click here to learn more!</button>
            </div>
            
        </div>

        <div className="dog2-div">
            
        </div>


        <style jsx>{`

        .button-div-learn{
              display: flex;
              margin-top:0px;
              justify-content: center;
              align-items: center
            }

        .learn-more-btn{
                height: 40px;
                width: 300px;
                border: 1px solid red;
                border-radius: 1px;
                background-color: red;
                color: white;
                font-size: 15px;
                justify-content: center;
                
                opacity: 0.8;
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
        }

            .main-div-food{
                display: flex;
                height: 625px;
                flex-direction: row;
                
                
            }

            .dog1-div{
                background-image: url(${black_dog_big});
                background-repeat: no-repeat;
                background-position: right;
                background-size: cover;
            
                width: 50%;
                height: 625px;
               
                object-fit: cover;
                object-position: 100% 100%;
                
               
            }


            .dog2-div{
                background-image: url(${confused_dog});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 50%;
               
                height: 625px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .header-div{
                font-size: 40px;    
                font-family: 'Oswald', sans-serif;
            }

            .content-div{
                display: flex;
                flex-direction: column;
                gap: 20px;
                height: 625px;
                width: 80%;
                background-color: #B3E0AF;
                color: #3A3953;               
                text-align: center;
                
            }

            .paragraphs{
                margin: 5%;
                font-size: 18px;
                margin-top: 0;
                font-family: 'Open Sans', sans-serif;        `}</style>
    </div>
  )
}

export default FoodExplainer