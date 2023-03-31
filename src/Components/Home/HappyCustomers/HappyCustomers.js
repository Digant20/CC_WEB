import styled from '@emotion/styled';
import { Grid, Paper } from '@mui/material'
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  }));


const HappyCustomers = () => {
  return (
            <div className='customers-div'>

                <div className='customers-section-div'>
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>

                                            
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>

                                            
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>


                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>

                </div>                                          
                
                <div className='customers-section-div'>                      
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>

                                            
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>

                                            
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>
                                            
                    <div >
                        <img className='customers-image'  src={res.media_url} alt={res.username}/>
                    </div>
                </div> 


                <style jsx>{`

                    .customers-div .{
                        display: flex;
                        flex-direction: column;
                        margin: 10px;
                    }

                    .customers-section-div{
                        display: flex;
                        flex-direction: row;
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