import React, { useEffect, useMemo, useState } from 'react'
import Header from './Header/Header'
import OurRange from './SectionTitleHeaders/OurRange'
import RangeCards from './RangeCards/RangeCards'
import WelcomeBanner from './WelcomeBanner/WelcomeBanner'
import DeliciouslyClimate from './SectionTitleHeaders/DeliciouslyClimate'
import FoodExplainer from './FoodExplainer/FoodExplainer'
import ProductsListing from './ProductListing/ProductsListing'
import AboutUs from './About/AboutUs'
import SocialMedia from './SocialMedia/SocialMedia'
import HappyCustomers from './HappyCustomers/HappyCustomers'
import Footer from './Footer/Footer'
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CloseIcon from '@mui/icons-material/Close';
import { Button, DialogTitle, IconButton, InputAdornment, TextField } from '@mui/material';
import { theDefaultJwt } from '../utils/theJwt';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NavigateNextOutlinedIcon from '@mui/icons-material/NavigateNextOutlined';
import axios from 'axios'


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
    
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));


function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 10 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 3,
            top: 3,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}


const Home = () => {

  const theJwtToken = localStorage.getItem("THE_JWT") || theDefaultJwt;

  const [guestEmail, setGuestEmail] = useState("");

  const [open, setOpen] = React.useState(false);

  // localStorage.setItem("email_banner_counter", null);

  // if(localStorage.getItem("email_banner_counter") === null){
  //     // window.alert("triggered only once")
  //     setOpen(true);
  //     // localStorage.setItem("email_banner_counter", guestEmail && guestEmail);
  // }


  useEffect(() => {

    const hasVisited = localStorage.getItem('hasVisited');

    if ( hasVisited === false || localStorage.getItem("email_banner_counter") === null) {
      
      setOpen(true);
    }

  }, []);


  useEffect(() => {
    document.title = 'home | consciouscreatures';
  }, []);

  const [emailError, setEmailError] = useState('');


    const handleClose = () => {

      if (guestEmail === '') {
        setEmailError('Please enter your email to proceed!');
      } else {
        
        setOpen(false);
      }

      
    };


    

    const guestEmailInputHandler = (e)=>{
      setGuestEmail(e.target.value);
    }


     //jwt token
     const jwtToken ='Bearer '+theDefaultJwt;

   
     const headerObject =   useMemo( ()=>{
                                 return( {
                                     'Authorization': jwtToken,
                                     'Accept' : '*/*',
                                     'Content-Type': 'application/json',
                                     'App-Token' : 'A14BC',
                                     'Access-Control-Allow-Origin': '*'
                                     }
                                  )
                             },[])


    const submitEmail=()=>{

      const  guestEmailApi = "http://ecom.apprikart.com/cc/api/guestmail";

      const body = {
        email: guestEmail
      }

      if(guestEmail.length > 0 && guestEmail !== "" && guestEmail !== " " && guestEmail)
        {
          axios.post(guestEmailApi, body, {headers: {headerObject}})
          .then(res=>{
              localStorage.setItem('hasVisited', true);
              localStorage.setItem("email_banner_counter", guestEmail && guestEmail);
              setOpen(false);
          })
          .catch(err=>{
            localStorage.setItem('hasVisited', false);
            window.alert("Something went wrong!")
          
          }
           )
        }else{
          window.alert("It's a required field!");
        }
  
  }


  return (

    <div  className='main-div'>
        <Header />
        <WelcomeBanner />
        <OurRange />
        <RangeCards />

        <DeliciouslyClimate />
        <FoodExplainer />

        <ProductsListing />
        <AboutUs />
        <SocialMedia />
        <HappyCustomers />

        <div>
        <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth={true}
                
            >
                 
                <DialogContent className='main-pop-up-div'>     
                <button className="close-btn" onClick={()=>handleClose()}>x</button>           
                    <div className='banner-container'>
                      
                          <span className='welcome-heading1'>Welcome to Conscious Creatures</span>
                          <span className='welcome-heading2'>Please type-in your email address to get started!</span>

                        <div className='email-div'>
                        <div>

                        <label className='email-text'>Email*</label>
                        <div class="input-icons">
                            <i class="fa fa-envelope icon"></i>
                            <input
                              type="email"
                                  className='email-input'                            
                                  required
                                  id="email"
                                  label="Email"
                                  name="email"
                                  autoComplete="Email"
                                  autoFocus
                                  value={guestEmail}
                                  onChange={(event) =>guestEmailInputHandler(event)}
                              />
                              <p>{emailError}</p>
                            </div>
                            
                          </div>
                          <div>
                            <button className='getin-btn' onClick={()=>submitEmail()}><NavigateNextOutlinedIcon style={{color: 'white'}}/></button>
                          </div>
                         
                        </div>
                          
                        
                    </div>

                </DialogContent>
        
            </BootstrapDialog>
        </div>

        <Footer />

    <style jsx>{
      
      `

    
      .close-btn{
        cursor: pointer;
        border: 1px solid #57557D;
        border-radius: 2px;
        outline: none;
        float:right;
        width: 25px;
        height: 25px;
        background-color: white;
        color: #57557D;
      }

      .email-input{
        width: 500px;
        height: 35px;
        border: 1px solid #57557D;
        border-radius: 2px; 
        background-color: white;
        color: #57557D;
      }

      .email-label{
        color: #57557D;
      }

      .main-pop-up-div{
          background-color: #FEC74F;
      }
      .email-div{
        display: flex;
        flex-direction: row;
        gap: 10px;
        margin: 20px 0px 0px 25px;
        font-family: 'Oswald', sans-serif;

      }

      .getin-btn{
        cursor: pointer;
        border: 1px solid #57557D;
        border-radius: 2px;
        outline: none;
        background-color: #57557D;
        color: black;
        margin-top: 25px;
        height: 38.1px;
      }


      .banner-container{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
      }

      .welcome-heading1, .welcome-heading2{
        text-align: center;
        color: #57557D;
        padding: 10px;
        font-size: 20px;
        font-family: 'Oswald', sans-serif;

      }

      .email-text{
        color: #57557D;
  
      }


      
          
        .icon {
            padding: 10px;
            min-width: 40px;
            color: #57557D;
        }
        .input-icons i {
            position: absolute;
        }
          
        .input-icons {
            width: 100%;
            margin-bottom: 10px;
        }
      
      
      `
    }</style>
        
    </div>
  )
}

export default Home