import React from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import {theTeam} from "./Team";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import dogLookingUp from "../../Assets/images/brown_dog_up.jpg";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#FAFAFA',
   
    padding: theme.spacing(4),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  }));
  


const About = () => {

    
  return (
    <div className='main-div-shop'>

        <Header />

        <div className='content-main-about'>

            <div className='content-text-dog-about'>
                <div className='dog-background-div'>
                    <div className='our-journey-text-div'>OUR CONSCIOUS</div>                    
                </div>

                <div className='theAboutText-div'>
                    <div className='side-about-text-div'>JOURNEY</div>
                    
                <div className='the-about-text-div'>
                    <p>
                    Conscious Creatures is a Circular Food Brand, that only sells Nature Positive Food Products, designed applying circular food systems, that use low impact and upcycled Ingredients.
                    </p>

                    <p>
                    Our products are insanely delicious, our pets love it, they are good for the planet, and they help accelerate the United Nations’ SDGs.  
                    </p>

                    <p>
                    Conscious Creatures is a line of Pet Food made from insect protein from Black Soldier Fly (BSF) , a nutrient-dense upcycled lower impact ingredient.  
                    </p>


                    <p>
                    Insect Protein from Black Soldier Fly (BSF) is an upcycled ingredient which helps to meet growing nutritional needs without increasing pressure on our ecosystems and our agricultural land, which is one of the primary drivers of biodiversity loss.
                    </p>

                    <p>
                    Insects are an integral part of designing food products for nature-positive outcomes in the future. (Ellen McArthur Foundation)
                    </p>

                    <p>
                    We grow our BSF in Indonesia, feeding it out of organic waste from agricultural Palm Oil by-products, which yearly accounts for 200 million tons of organic waste only in Indonesia. We work with Palm Oil companies to help them become zero waste and help them transform these by-products into valuable food ingredients.
                    </p>

                    <p>
                    Pets need healthy and balanced nutrition, they need proteins that meet their strict nutritional requirements and high-quality fatty acids to keep them healthy. Insects like BSF provide important nutritional benefits thanks to their high content of proteins and polyunsaturated fatty acids.   
                    </p>
                </div>
                   
                </div>
            </div>



            <div className='meet-the-pack-div'>
                <div className='meet-the-pack-text-div'>Meet The Pack</div>
                <div><hr className='hrline-about'/></div>

                <Grid container >
      
                {
                    theTeam.map((res, index)=>{

                        return(
                            <Grid item xs={4}>
                                <Item 
                                    key={index}>
                                    <div className='about-grid'>

                                        <div>
                                            <img src={res.imageUrl} className='team-images' alt={res.imageUrl}/>
                                        </div>

                                        <div >
                                            <span style={{fontStyle: 'italic'}}>{res.name}</span><br />
                                        </div>
                                    </div>
                                                            
                                        <div className='text-labels-div'>
                                            <a href={res.linkedInUrl}><LinkedInIcon className='linkedIn'/></a>
                                        </div>

                                        <div className='text-labels-div'>
                                            <label>{res.department}</label>
                                        </div>   

                                </Item>

                                
                                    </Grid>
                                )
                            })       
                        }             
                        </Grid>

                  </div>

        </div>


        <Footer />
    
    
        <style jsx>
            {`

            .linkedIn{

                width: 40px;
                height: 40px;
                color: grey;
                padding: 20px;

            }


            .hrline-about{
                width: 2.5%;
                border: 0 none;
                background-color: #3A3953;
                height: 3px;
                margin-top: 2%;
                text-align: center;
            }

            .meet-the-pack-text-div{
                color: #3A3953;
                font-size: 75px;
                font-weight: 550;
                margin-top: 5%;
                font-family: 'Oswald', sans-serif;
            }
    
            .content-main-about{
                display: flex;
                flex-direction: column;
                margin-top: 8%;
                background-color: #fffaf5;

                
            }

            .content-text-dog-about{

                display: flex;
                flex-direction: row;
                margin: 0% 0% 0% 6%;
            }

            .dog-background-div{
                background-image: url(${dogLookingUp});
                background-repeat: no-repeat;
                background-position: center;
                background-size: cover;
                
                width: 595px;
                height: 1084px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .side-about-text-div{
                margin: 16% 0% 0% 4%;
                
                text-align: left;
                color: #3A3953;
                font-size: 75px;
                font-weight: 500;
                font-family: 'Oswald', sans-serif;
            }

            .our-journey-text-div{
                margin-top: 16%;
                float: right;
                padding-right: 1%;
                color: white;
                font-size: 75px;
                font-weight: 500;
                font-family: 'Oswald', sans-serif;
            }

            .theAboutText-div{
                display: flex;
                flex-direction: column;
                width: 595px;
                height: 1084px;
            }

            .the-about-text-div{
                text-align: left;
                margin-left: 5%;
            }

            p{
                margin-top: 5%;
                font-size: 17px;
                line-height: 25px;
                opacity: 0.7;
                width: 80%;
                font-family:"sans-serif"
            }

            .team-images{
                width: 210px;
                height: 217px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .about-grid{
                display: flex;
                flex-direction: column;
                gap: 2;
            }


            .meet-the-pack-div{
                background-color: #FAFAFA;
            }



            `}
        </style>
        
    </div>
  )
}

export default About