import React from 'react';
import cc_logo from "../../Assets/images/Conscious_creatures_logo.png";

const Login = () => {


  return (
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
                </div>

            
                    <span style={{textAlign: 'right'}}>Forgot Password ?</span>
                

                <div>
                    <button className='login-btn'>Login</button>
                </div>

                <div>
                    <span>Don't have an account?</span> <a href="#" >Sign Up</a>
                </div>


                <div className='terms-privacy-login-div'>
                    Read<a href="#" >Terms & Conditions, Privacy policy </a>
                </div>
            



            <style jsx>{
            `

                .login-btn{
                    border-radius: 3px;
                    width: 100px;
                    border: 1px solid #3A3953;
                    height: 35px;
                    border-radius: 2px;
                    outline: none;
                    background-color: #3A3953;
                    color: #FFFFFF;
                }


                .terms-privacy-login-div{
                    margin-top: 50px;
                }


                .forgot-pass-login{
                    margin-top: 10px;
                    text-align: right;
                }


                .password-login{
                    width: 409px;
                    height: 35px;
                    border: 1px solid #3A3953;
                    border-radius: 3px;
                }

                .mobile-num-input{
                    width: 300px;
                    height: 35px;
                    border: 1px solid #3A3953;
                    border-radius: 3px;
                }

                .country-input{
                    width: 100px;
                    height: 38px;
                    border: 1px solid #3A3953;
                    border-radius: 3px;
                }

                .input-text-div{  
                    display: flex;
                    flex-direction: row;
                    gap: 10px;
                    align-items: cetner;
                    justify-content: center;
                    margin: 10px 5px 5px 5px;
                }

                .parent-div-login{
                    display: flex;
                    flex-direction: column;
                    align-items: cetner;
                    justify-content: center;
                    height: 100vh;
                    width: 100vw;
                    border: 1px solid yellow;
                    width: 450px;
                    height: 99vh;
                }

                .cc-logo-login{
                    width: 200px;
                    height: 200px;
                 }


            
            
            
            `  
            }</style>

        </div>
    )   
}

export default Login