import React, { useState } from 'react'
import dog from "../../../Assets/images/dog_looking_up.jpg"
import cat from "../../../Assets/images/cat.jpg"
import lizard from "../../../Assets/images/lizard_left.jpg"

const RangeCards = () => {


  return (
    <div className='range-cards-main'>

        <div className='range1'>
           
                <svg className='range1-vector' preserveAspectRatio="xMidYMid meet" data-bbox="36.357 26.571 127.185 146.888" viewBox="36.357 26.571 127.185 146.888" height="200" width="200"
                    xmlns="http://www.w3.org/2000/svg" data-type="color" role="presentation" aria-hidden="true">
                            <g>
                                <path d="M51.5 38.4c-8.7 11.2-10.8 26.9-12.9 39-4.8 28.1-3 62.1 16.4 84.5s48.9 9.5 62.7-15.3c5.5-10 18.8-22.9 28.8-30.6 23.4-17.9
                                22.1-42.3-.2-59.9-22.4-17.7-73.2-45.6-94.8-17.7z" fill="#EAA43C" data-color="1"></path>
                            </g>

                            
                </svg>

                <div className='dogs-range-text'>
                
                    <h1><span className='dogs-text'>DOGS</span></h1>
                    <div className='dogstext'>
                        <h3><span className='shop-text'>Take me to</span></h3>
                        <h3><a className='shop-text' href='/shop'>SHOP</a></h3>
                    </div>
                    
                </div>  
           
                        
        </div>

        

        <div className='range2'>

            <svg className='range1-vector' preserveAspectRatio="xMidYMid meet" data-bbox="26 20 148.999 160.001" width="200" height="200" viewBox="26 20 148.999 160.001" xmlns="http://www.w3.org/2000/svg"
             data-type="color" role="presentation" aria-hidden="true">
                <g>
                    <path fill-rule="evenodd" d="M115.12 20.004c19.855-.221 39.097 8.017 50.396 24.742 12.798 18.944 8.233 40.805 9.341 61.895 2.845 54.1-37.294 60.649-82.147
                     71.32-46.912 11.159-72.85-25.113-65.465-68.702 3.766-22.226 15.96-43.06 30.642-59.897C74.82 29.947 92.493 29.007 115.12 20.004" fill="#B3E0AF" data-color="1"></path>
                </g>
            </svg>

            <div className='dogs-range-text'>
                
                <h1><span className='dogs-text'>CATS</span></h1>
                <div className='dogstext'>
                    <h3><span className='shop-text'>Coming 2023!</span></h3>
                    {/* <h3><a className='shop-text' href='/shop'>SHOP</a></h3> */}
                </div>
                
            </div> 
        
        </div>



        <div className='range3'>   
            <svg className='range1-lizard-vector' preserveAspectRatio="xMidYMid meet" data-bbox="20.001 51 160 97.999" viewBox="20.001 51 160 97.999" height="200" width="250" xmlns="http://www.w3.org/2000/svg" 
                    data-type="color" role="presentation" aria-hidden="true">
                <g>
                    <path d="M46.181 137.023c25.939 11.423 54.935 15.032 82.791 9.278 14.633-3.023 31.047-8.369 41.245-20.362 10.568-12.428 11.721-31.069
                     7.498-46.299-5.034-18.159-23.092-27.848-40.983-28.603-23.194-.979-34.863 17.923-53.834 27.415-14.546 7.278-32.522 3.589-47.612 
                     9.277-5.591 2.108-10.808 5.862-13.436 11.256-3.33 6.836-1.908 15.34 2.228 21.715s10.621 10.871 17.44 14.17c1.542.745 3.097 1.463 4.663 2.153z" 
                    fill="#F88D58" clip-rule="evenodd" fill-rule="evenodd"
                     data-color="1"></path>
                </g>
            </svg>

            <div className='reptiles-range-text'>
                
                    <h1><span className='dogs-text'>REPTILES</span></h1>
                    <div className='dogstext'>
                        <h3><span className='shop-text'>Take me to</span></h3>
                        <h3><a className='shop-text' href='https://renven.wixsite.com/wrigglerz' target="_blank" rel="noreferrer">WRIGGLERZ!</a></h3>
                    </div>
                
            </div> 
        </div>


        <style jsx>{`

        .dogs-range-text{
                display: flex;
                flex-direction: column;
                margin: 60px 0;
                line-height: 10px;
                position: relative;
                top: 20%;
                z-index: 500;
                transform: translate(-1%, -1%)
                
        }

            .reptiles-range-text{
                display: flex;
                flex-direction: column;
                margin: 60px 0;
                line-height: 10px;
                position: relative;
                top: 19%;
                z-index: 500;
                transform: translate(-1%, -1%)
}
        .shop-text{
            color: rgb(58,57,83);
        }

        .dogs-text{
            font-family: 'Delicious Handrawn', cursive;
            color: rgb(58,57,83);
        }

            .dog-link-div{
                position:absolute;
                font-size: 30px;
                padding: 40px 2px 2px 40px;
                
            }

            .range1-vector{
            
                transform: translate(0%, 180%) rotate(90deg);
                z-index:500;
                position:relative;
            }

            .range1-lizard-vector{
                
               
                transform: translate(5%, 180%) rotate(190deg);
                z-index:500;
                position:relative;
            }
            

            .range-cards-main{
                display: flex;
                
            }

            .range1{
                background-image: url(${dog});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;
               
                height: 625px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .range2{
                background-image: url(${cat});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                width: 100%;

                top: 50%;
                left: 50%;
                transform: translate(-50%,-50%)

                height: 625px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .range3{
                width: 100%;
                height: 625px;
                object-fit: cover;
                object-position: 50% 50%;

                background-image: url(${lizard});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
              
            }

        `}</style>

    </div>
  )
}

export default RangeCards