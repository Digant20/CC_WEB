import React from 'react'

const AboutUs = () => {
  return (
    <div className='about-us-div'>

    

        <div className='about-us-text'>
            ABOUT US
        </div>

        <div>
            <p className='para'>         
                We believe that loving your pet and loving the planet is something that can be done together - which is why we’ve created our very own sustainable pet food brand here at Conscious Creatures.
                Conventional pet food has plenty of nutrients for your animal but it also is made from sources of animal protein that cause harm to our planet. Our insect-based dog treats have all of the amazing nutrition you would expect from top-quality air-dried brands and actually helps the planet. Instead of using industrial livestock to get our protein, we use an amazing little bug called the Black Soldier Fly Larvae.
                Black Soldier Fly Larvae actually eat agricultural waste, which would have turned into methane, a greenhouse gas that heats up our planet, so it's not just cutting out waste that is making a positive impact.
                We ask you to join us in our mission to make the best pet food on the planet, while keeping mother earth happy as well - let’s all be Conscious Creatures!
            </p>
        </div>

  

       
        

        <style jsx>{`

        .para{
            font-size: 18px;
        }

        .about-us-text{
            margin-top: 5%;
        }
        
            .about-us-div{
                display: flex;
                flex-direction: column;
                justify-content: center;
                text-align: center; 
                margin-top: 1%;              
                
                background-color: #FEC74F;
                color: #3A3953;
                font-size: 50px;
                font-weight: bold;
                letter-spacing: 2px;
                font-family: 'Roboto', sans-serif;
            }

        `}</style>
    </div>
  )
}

export default AboutUs