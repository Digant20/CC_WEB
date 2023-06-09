import React, { useState } from 'react';
import cc_logo from "../../Assets/images/Conscious_creatures_logo.png";
import { Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import Signup from '../Signup/Signup';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(1),
      height: '74vh',
      width: 370
    }
  }));



const Login = ({openLoginModal, setOpenLoginModal}) => {

 // for signup pop-up
 const [openSignupModal, setOpenSignupModal] = useState(false);


 //end of signup pop-up


    const handleClose = () => {

        setOpenLoginModal(false);

      };




  return (
    <div>
        <BootstrapDialog
            onClose={handleClose}
            open={openLoginModal}
            
        >
                 
                <DialogContent style={{backgroundColor: "#009BB9"}}>     
                <button className="close-btn-login" onClick={()=>handleClose()}>X</button>           
                <div className='parent-div-login'>

                <div>
                    <img className='cc-logo-login' src={cc_logo} alt="cc_logo" />
                </div>

                    <div className='input-text-div'>
                        <div >
                            <select className='country-input'>
                                <option><img src="india_flag" alt="country_flag"/> +91</option>
                                <option><img src="india_flag" alt="country_flag"/> +31</option>
                            </select>
                        </div>

                        <div >
                            <input type='number' className='mobile-num-input' name="mobile" placeholder='Mobile number'/>
                        </div>
                    </div>

                    <div>
                        <input type='password' className='password-login' placeholder='Password'/>
                        <a href="#" className='forgot-pass-login' >Forgot Password ?</a>

                    </div>

                        <button className='login-btn'>Login</button>
                    

                    <div>
                        <a href="#"  style={{color: "white", fontSize: "12px", float: 'left'}}>Terms & Conditions, Privacy policy </a>
                        <span onClick={()=>{setOpenSignupModal(true); setOpenLoginModal(false);}} style={{color: "white", fontSize: "13px",  float: "right", marginTop: "20px", textDecoration: "underline"}}>Don't have an account?</span>
                    </div>

                    {/* <div className="svg-div">
                        <svg className="wave" xmlns="http://www.w3.org/2000/svg" viewBox="40 0 79 500" preserveAspectRatio="none">
                        <path className="path" d="M0 400
                            c25 0 25 -25 50 -25
                            c25 0 25 40 50 40
                            c25 0 25 -15 50 -30
                            v115
                            h-225
                            z" />
                    </svg>         

                        
                    </div> */}
                          
                        
                    </div>

                </DialogContent>
        
            </BootstrapDialog>
                    
                    <Signup 
                        openSignupModal={openSignupModal}
                        setOpenSignupModal = {setOpenSignupModal} 
                    />


            <style jsx>{
            `

                .close-btn-login{
                    cursor: pointer;
                    border: 1px solid #FEC74F;
                    border-radius: 2px;
                    outline: none;
                    float: right;
                    width: 25px;
                    height: 25px;
                    background-color: #FEC74F;
                    color: white;
                }


                .login-btn{
                    border-radius: 3px;
                    width: 100%;                   
                    border: 1px solid #FEC74F;
                    height: 35px;
                    margin-top: 10px;
                    border-radius: 2px;
                    outline: none;
                    background-color: #FEC74F;
                    color: #FFFFFF;
                }


                .terms-privacy-login-div{                    
                    z-index: 1;
                    position: relative;
                    margin-top: 2%;
                    color: #3A3953;
                }


                .forgot-pass-login{
                     float: right;
                     margin-top: 4px;
                     color: white;
                     font-size: 13px;
                     
                }


                .password-login{
                    width: 95%;
                    height: 35px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                    padding-left: 10px;
                }

                .mobile-num-input{
                    
                    height: 35px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                    padding-left: 10px;
                }

                .country-input{
                    width: 70px;
                    height: 39px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                }

                .input-text-div{  
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    
                   
                }

                .parent-div-login{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;                   
                    z-index: 1000;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .cc-logo-login{
                    width: 120px;
                    height: 120px;
                    
                    transform: translate(65%, -40%);
                 }

                 {/* .parent-div-login:hover{
                    border: 2px solid #3A3953;
                    border-radius: 2px;
                    box-shadow: 2px 2px 4px #3A3953;

                 } */}

            
            
            
            `  
            }</style>

        </div>
    )   
}

export default Login