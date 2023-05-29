import React from 'react';
import cc_logo from "../../Assets/images/Conscious_creatures_logo.png";
import { Dialog, DialogContent } from '@mui/material';
import { styled } from '@mui/material/styles';



const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
        padding: theme.spacing(1),
        height: '95vh',
        width: 370,
        
    }
  }));



const Signup= ({openSignupModal, setOpenSignupModal}) => {

  

    const handleClose = () => {

        setOpenSignupModal(false);

      };


  return (
    <div>
        <BootstrapDialog
            onClose={handleClose}
            open={openSignupModal}
            
        >
                 
                <DialogContent style={{backgroundColor: "#009BB9"}}>     
                <button className="close-btn-login-signup" onClick={()=>handleClose()}>X</button>           
                <div className='parent-div-login-signup'>

                <div>
                    <img className='cc-logo-login-signup' src={cc_logo} alt="cc_logo" />
                </div>

	                <div>
                        <input type='text' className='password-login-signup' name="fname" placeholder='First Name'/>
                    </div>

                    <div>
                        <input type='text' className='password-login-signup' name="lname" placeholder='Last Name'/>
                    </div>

                    <div>
                        <input type='text' className='password-login-signup' name="email" placeholder='email Address'/>
                    </div>

                    <div className='input-text-div-signup'>
                        <div >
                            <select className='country-input-signup'>
                                <option><img src="india_flag" alt="country_flag"/> +91</option>
                                <option><img src="india_flag" alt="country_flag"/> +31</option>
                            </select>
                        </div>

                        <div >
                            	<input type='number' className='mobile-num-input-signup' name="mobile" placeholder='Mobile number'/>
                        </div>
                    </div>

                    <div>
                       	 <input type='password' className='password-login-signup' placeholder='Password'/>
                    </div>

	                <div>
                    		<input type='password' className='password-login-signup' placeholder='Confirm Password'/>
                	</div>

                        <button className='login-btn-signup'>Sign Up</button>
                    

                    <div>
                        <a href="#"  style={{color: "white", fontSize: "12px", float: 'left'}}>Terms & Conditions, Privacy policy </a>
                    </div>

                    {/* 
                    
                    <div className="svg-div">
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
        


            <style jsx>{
            `

                .close-btn-login-signup{
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


                .login-btn-signup{
                    border-radius: 3px;
                    width: 100%;                   
                    border: 1px solid #FEC74F;
                    height: 35px;
                    margin-top: 30px;
                    border-radius: 2px;
                    outline: none;
                    background-color: #FEC74F;
                    color: #FFFFFF;
                }


                .terms-privacy-login-div-signup{                    
                    z-index: 1;
                    position: relative;
                    margin-top: 2%;
                    color: #3A3953;
                }


                .forgot-pass-login-signup{
                     float: right;
                     margin-top: 4px;
                     color: white;
                     font-size: 13px;
                     
                }


                .password-login-signup{
                    width: 95%;
                    height: 35px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                    padding-left: 10px;
                }

                .mobile-num-input-signup{
                    
                    height: 35px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                    padding-left: 10px;
                }

                .country-input-signup{
                    width: 70px;
                    height: 39px;
                    border: 1px solid #FEC74F;
                    border-radius: 3px;
                }

                .input-text-div-signup{  
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    
                   
                }

                .parent-div-login-signup{
                    display: flex;
                    flex-direction: column;
                    gap: 10px;                   
                    z-index: 1000;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }

                .cc-logo-login-signup{
                    width: 120px;
                    height: 120px;
                    
                    transform: translate(65%, -10%);
                 
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

export default Signup