import React, { useEffect } from 'react'
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import {locations} from "./distributionLocations";



const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fffaf5;',
    padding: theme.spacing(6),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  }));
  


const Contact = () => {

    useEffect(() => {
        document.title = 'contact | consciouscreatures';
      }, []);

    
  return (
    <div className='main-div-contact'>

        <Header />

        <div className='content-main-contact'>

            <div className='content-text-dog-contact'>
                <div className='dog-background-div-contact'>
                    <div className='contact-us-text-div-contact'>CONTACT US</div>                    
                    <div className='contact-info'>
                        <div className='email-section'><label>info@my-domain.com</label> <label>|</label> <label>123-456-7890</label></div>
                        <div>500 Terry Francois Street San Francisco, CA 94158</div>
                    </div>
                </div>

                    
                <div className='the-about-text-div-contact'>
                    <form className='the-form'>
                        <input type='text' id="name" name="name" placeholder='Name' />
                        <input type='email' id="email" name="email" placeholder='Email' />
                        <input type='number' id="phone" name="phone" placeholder='Phone' />
                        <textarea id="message" name="message" rows="7" cols="55" placeholder='Type your message here..'/>
                       <button className='btn'>Submit</button>
                       

                    </form>
                   
                </div>
            </div>



            <div className='distributors-div'>
                <div className='distributors-text-div'>DISTRIBUTORS</div>

                <Grid container >
      
                {
                    locations.map((res, index)=>{

                        return(
                            <Grid item xs={4}>
                                <Item 
                                    key={index}>
                                    <div className='about-grid-contact'>

                                        <div>
                                            <label className='country'>{res.country}</label>
                                       </div>

                                        <div >
                                            <label className='text-labels-div-contact'>{res.address}</label>
                                        </div>
                                    </div>
                                                            
                                        

                                        <div className='text-labels-div-contact'>
                                            <label>{res.postalCode}</label>
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

            .contact-us-text-div-contact{
                
                color: #3A3953;
                font-size: 75px;
                font-weight: 500px;
                font-family: 'Oswald', sans-serif;
                margin-top: 60px;
            }

            .btn{
                width: 20%;
                height: 30px;
                border: 1px solid #3A3953;
                text-align: center;
                background-color: #3A3953;
                color: white;
                font-size: 17px;
               
            }

            .btn:hover{
                color: #3A3953;
                border: 1px solid #3A3953;
                background-color: white;
                cursor: pointer;
            }

            .the-form{
                display: flex;
                flex-direction: column;
                gap: 5px;
                padding: 20px;
                width: 600px;
            }

            input{
                width: 100%;
                height: 25px;
            }

            textarea{
                width: 100%;
            }

             input, textarea{
                border: 1px solid #3A3953;
                
            }

             input:hover, textarea:hover{
                border: 3px solid #3A3953;
            }


            .country{
                font-size: 18px;
                font-weight: 500;
            }
            .country, .text-labels-div-contact{
                color: #3A3953;
                font-family: 'Roboto' sans-serif;
            }

            .text-labels-div-contact{
                font-size: 15px;
            }

            .contact-info{
                display: flex;
                flex-direction: column;
                color: #3A3953;
                gap: 10px;
                margin: 20px 20px 10px 20px;
            }

            .email-section{
                color: #3A3953;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;
                gap: 10px;
            }
  

            .content-main-contact{
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin-top: 8%;
                   
            }

            .main-div-contact{
                background-color: #fffaf5;
            }

            

            p{
                margin-top: 5%;
                font-size: 17px;
                line-height: 25px;
                opacity: 0.7;
                width: 80%;
                font-family:"sans-serif"
            }

            .team-images-contact{
                width: 210px;
                height: 217px;
                object-fit: cover;
                object-position: 50% 50%;
            }

            .about-grid-contact{
                display: flex;
                flex-direction: column;
                gap: 2;
            }


            .distributors-div{
                background-color: #FFFAF5;
                width: 60%;
                
                
            }

            .distributors-text-div{
                
                font-size: 30px;
                font-weight: 550;
                margin-top: 5%;
                color: #3A3953;
                background-color: #fffaf5;
                font-family: 'Oswald', sans-serif;
            }


            `}
        </style>
        
    </div>
  )
}

export default Contact