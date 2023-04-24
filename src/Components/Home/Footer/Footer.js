import React, { useState } from 'react'
import {menu_items} from '../Header/menu_items';
import { SURVEY_MENUS } from './FooterConstants';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Button } from '@mui/material';

const Footer = () => {


  const [email, setEmail] = useState("");
  const joinCommunity = (e) =>{

          //call api to send an email to the customer's email

  }

  return (
   <div className='footer-main-div'>

    
      <div className='footer-content'>
          
          <hr className='footer-hr-line'/>

          <div className='footer-content-inner'>
              <div className='footer-home-menus-div'>
                  <ul>
                    {
                      menu_items.map((res)=>{
                        return(
                          <li>{res}</li>
                        )
                      })
                    } 
                  </ul>
              </div>

              
              <div className='footer-policy-div'>
                    <ul>
                      {
                        SURVEY_MENUS.map( (res)=>{
                          return(
                            <li style={res === 'SURVEY' ? {fontWeight: 'bold'} : {fontSize: '15px', fontWeight: 0}}>{res}</li>
                          )
                        })
                      }
                    </ul>
              </div>

              <div className='footer-policy-div'>
                        <ul>
                            <li className='customer-li'>CUSTOMER SERVICE</li>
                            <li>123-456-789</li>
                            <li>1-800-000-0000</li>
                            <li>support@consciouscreatures.earth</li>
                        </ul>
               
              </div>

              <div className='footer-policy-div'>
                    <ul>
                      <li style={{fontWeight: 'bold'}}>FOLLOW OUR PAWPRINTS</li>
                      <div className='social'>
                        <li><a href='https://www.instagram.com/consciouscreatures_petfoods/'><InstagramIcon /></a></li>
                        <li><a href="#"><FacebookIcon /></a></li>
                        <li><a href="#"><TwitterIcon /></a></li>
                      </div>
                    </ul>
              </div>
          </div>

          <hr className='footer-hr-line'/>
          
      </div>

      <div className='footer-join-community-div'>
          <div className='footer-form'>
              <label className='join-text'>JOIN OUR FURRY COMMUNITY</label>
              
              <div className='join-form-btn-div'>
                <input type="email"  placeholder='Enter your email here' className="email-input" onChange={(e)=>{setEmail(e)}} required/>
                <button className="join-btn">JOIN</button>
              </div>
          </div>

          <div className='footer-copyright'>
              <label>&copy;{new Date().getFullYear()} by Lotta Farber Design Studio.</label>
          </div>

      </div>

    <style jsx>{`

    

    input::placeholder {
        font-size: 1.1em;
      }

    .footer-copyright{
          font-size: 12px;
          color: #57557D;
         margin-bottom: 50px;
    }

        .join-text{
          font-size: 30px;
          font-weight: 500;
          color: #57557D;
          margin-top: 10px;
          font-family: 'Oswald', sans-serif;
        }

        .footer-join-community-div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;   
        }

          .footer-form{
              width: 585px;
              height: 220px;
              display: flex;
              flex-direction: column;
              background-color: white;
              margin: 40px 40px 20px 40px;
          }

          .email-input{
              width: 550px;
              height: 35px;
              text-indent: 25px;

          }

          .join-form-btn-div{
              display: flex;
              margin: 35px 10px 0px 14px;
              justify-content: center;
              flex-direction: column;
            }


          .join-btn{
                height: 40px;
                width: 557px;
                margin-top: 10px;
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


          .social{
            display: flex;
            gap: 10px;
            color: #3A3953;
           
          }


          .follow-pawprints{
            color: #3A3953;
            fontWeight: bold;
          }

          .footer-home-menus-div, .footer-policy-div{
              display: flex;

          }


          .footer-home-menus-div ul li{
              list-style: none;
              text-align: left;
              color: #3A3953;
              font-weight: bold;
              line-height: 35px; 
          }

          .footer-policy-div ul li{
              list-style: none;
              text-align: left;
              color: #3A3953;
              
              line-height: 35px;
          }

          .customer-li{
            font-weight: bold;
          }

          .footer-home-menus-div ul li:active{
              color: white;
          }


          .footer-home-menus-div ul li:selected
            {
                color: white;
            }

            .footer-content-inner{
              display: flex;
              gap: 10%;
              padding: 20px;
            }


          .footer-main-div{
              display: flex;
              flex-direction: column;
              gap: 5;
              height: 900px;
              background-color: #FEC74F;
            
          }

          .footer-hr-line{
            border: none;
           
            height: 1px;
        
            color: #3A3953; 
            background-color: #3A3953;

            margin: 105px 70px 20px 70px;
            
          }
    `}</style>

   </div>
  
  )
}

export default Footer