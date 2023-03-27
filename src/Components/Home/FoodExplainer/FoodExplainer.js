import React from 'react';
import black_dog_big from '../../../Assets/images/black_dog_big.png';
import confused_dog from "../../../Assets/images/confused_dblack_dog.jpg";


const FoodExplainer = () => {


  return (
    <div className='main-div-food'>
        <div className='dog1-div'>

        </div>

        <div className='content-div'>

            <div>
                <h1>100% NATURAL & WHOLESOME</h1>
                <p>While some think insects can be icky, they are not only are a 
                    natural and nutritious part of most pet diets but are
                    the most sustainable protein source on the planet.</p>
            </div>
            
            <div>
                <h1>100% AIR-DRIED GOODNESS</h1>
                <p>Superior palatability, high nutritional density and 
                    enhanced protein quality. Good enough reasons to 
                  choose air-dried a.k.a “healthy Kibble”? We think so!</p>
            </div>

            <div>
                <h1>100% SUSTAINABLE</h1>
                <p>Did you know that food waste is responsible for 10% of global greenhouse gas emissions?  Our all-natural insect-based treats are made from Black Soldier Fly Larvae (BSFL), which are nature’s tool against food waste.</p>
            </div>

            <div className='button-div-learn'>
                <button className="learn-more-btn">SHOP NOW</button>
            </div>
            
        </div>

        <div className="dog2-div">
            
        </div>


        <style jsx>{`

        .button-div-learn{
              display: flex;
              margin-top:0px;
              justify-content: center;
              margin-top: 25%;
            }

        .learn-more-btn{
                height: 40px;
                width: 300px;
                border: 1px solid red;
                border-radius: 1px;
                background-color: red;
                color: white;
                justify-content: center;
               
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

            .content-div{
                height: 625px;
                width: 80%;
                background-color: #B3E0AF;

                color: #3A3953;


                text-align: center;
            
                font-size: 20px;
                line-height: 30px;
                letter-spacing: 2px;
                font-family: 'Oswald', sans-serif;
            }
        
        `}</style>
    </div>
  )
}

export default FoodExplainer