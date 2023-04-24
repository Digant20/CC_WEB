
import React from 'react';

import dog_girl from "../../../Assets/images/girl_dog.JPG"
import dog_bone from "../../../Assets/images/dog_bone.JPG";
import two_dogs from "../../../Assets/images/two_dogs.JPG";
import white_brown_dog from "../../../Assets/images/white_brown_dog.JPG";




const HappyCustomers = () => {
  return (
            <div className='customers-div'>

                <div className='customers-section-div'>
                    <div >
                        <img className='customers-image'  src={dog_girl} alt="girl_with_dog"/>
                    </div>                
                        
                    <div class="happy-customers-div">
                         <div className='happy-customers-text'>
                            <p>OUR</p>
                            <p>HAPPY</p>
                            <p>CUSTOMERS</p>
                         </div>
                    </div>
                                            
                    <div >
                        <img className='customers-image'  src={dog_bone} alt="dog_bone"/>
                    </div>

                    <div class="second-para-main-div">
                        <div className='second-para-header'>
                            <span>JHONY</span>
                        </div>

                        <div className="second-para-paragraphs">
                        <span>Jhony is a 2 years old dog</span>
                        <span>This text is centered.</span>
                        <span>This text is centered.</span>
                        </div>
                        
                        <div className='second-para-footer'>
                            <p>2 yr old</p>
                            <p>Golden Retriever</p>
                        </div>

                    </div>

                </div>                                          
                
                <div className='customers-section-div'>                      
                    
                <div class="third-para-main-div">
                        <div className='third-para-header'>
                            <span>PACO</span>
                        </div>

                        <div className="third-para-paragraphs">
                            <span>Paco is a 2 years old dog</span>
                            <span>This text is centered.</span>
                            <span>This text is centered.</span>
                        </div>
                        
                        <div className='third-para-footer'>
                            <p>2 yr old</p>
                            <p>Golden Retriever</p>
                        </div>

                    </div>
                    <div>
                        <img className='customers-image'  src={white_brown_dog} alt="white_dog"/>
                    </div>

                    <div class="fourth-para-main-div">
                        <div className='fourth-para-header'>
                            <span>MIKA & MILO</span>
                        </div>

                        <div className="fourth-para-paragraphs">
                            <span>Jhony is a 2 years old dog</span>
                            <span>This text is centered.</span>
                            <span>This text is centered.</span>
                        </div>
                        
                        <div className='fourth-para-footer'>
                            <p>2 yr old</p>
                            <p>Golden Retriever</p>
                        </div>

                    </div>

                    <div >
                        <img className='customers-image'  src={two_dogs} alt="two_doggos"/>
                    </div>
                                            
                </div> 


                <style jsx>{`

                

                    .happy-customers-div{
                        display: flex;
                        align-items: center;
                        width: 300px;
                        background-color: #857C48;
                        height: 300px;
                        color: white;
                        text-align: left;
                       
                    }

                    .happy-customers-text{
                        font-weight: 500;
                        font-size: 35px;
                        font-family: 'Oswald', sans-serif; 
                        line-height: 0.2;
                        margin-left: 15%;
                        }

                    .fourth-para-main-div{
                        display: flex;
                        flex-direction: column;
                        width: 300px;
                        height: 300px;
                        background-color: #F88D58;   
                        justify-content: center;

                        text-align: left;
                        color: #57557D;
                    }

                    .fourth-para-header{
                        font-weight: 500;
                        font-size: 35px;
                        font-family: 'Oswald', sans-serif; 
                        margin-left: 15%;
                    }


                    .fourth-para-paragraphs{
                        display: flex;
                        flex-direction: column;
                        margin-left: 15%;
                        font-size: 12px;

                    }

                    .fourth-para-footer{

                        margin-left: 15%;
                        margin-top: 4%;
                        font-size: 12px;
                        font-family: 'Oswald', sans-serif; 
                        line-height: 0.2;
                        

                    }



                    .second-para-main-div{
                        display: flex;
                        flex-direction: column;
                        width: 300px;
                        height: 300px;
                        background-color: #57557D;   
                        justify-content: center;

                        text-align: left;
                        color: white;
                    }

                    .second-para-header{
                        font-weight: 500;
                        font-size: 35px;
                        font-family: 'Oswald', sans-serif; 
                        margin-left: 15%;
                    }


                    .second-para-paragraphs{
                        display: flex;
                        flex-direction: column;
                        margin-left: 15%;
                        font-size: 12px;

                    }

                    .second-para-footer{

                        margin-left: 15%;
                        margin-top: 4%;
                        font-size: 12px;
                        font-family: 'Oswald', sans-serif; 
                        line-height: 0.2;
                        

                    }


                    .third-para-main-div{
                        display: flex;
                        flex-direction: column;
                        width: 300px;
                        height: 300px;
                        background-color: #FEC74F;   
                        justify-content: center;

                        text-align: left;
                        color: #57557D;
                    }

                    .third-para-header{
                        font-weight: 500;
                        font-size: 35px;
                        font-family: 'Oswald', sans-serif; 
                        margin-left: 15%;
                    }


                    .third-para-paragraphs{
                        display: flex;
                        flex-direction: column;
                        margin-left: 15%;
                        font-size: 12px;

                    }

                    .third-para-footer{

                        margin-left: 15%;
                        margin-top: 4%;
                        font-size: 12px;
                        font-family: 'Oswald', sans-serif; 
                        line-height: 0.2;
                        

                    }



                    .customers-div{
                        display: flex;
                        flex-direction: column;
                        margin-left: 80px;
                        
                    }

                    .customers-section-div{
                        display: flex;
                        flex-direction: row;
                        top: 0px;
                    }

                    .customers-image{
                        width: 300px;
                        height: 300px;
                        
                    }

                `}</style>
        </div>
  )
}

export default HappyCustomers