import React, { useEffect, useState } from 'react';
import { INSTAGRAM_CREDENTIALS } from '../CONSTANTS/instagram_constants';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import the_cat from "../../../Assets/images/cat.jpg";
import Backdrop from '@mui/material/Backdrop';



const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  }));



const SocialMedia = () => {

    //backdrop-work
    const [open, setOpen] = React.useState(false);
    const handleClose = () => {
      setOpen(false);
    };
    const handleToggle = () => {
      setOpen(!open);
    };


//  GET "https://graph.instagram.com/refresh_access_token
//   ?grant_type=ig_refresh_token
//   &access_token={long-lived-access-token}"

    const [accessToken, setAccessToken] = useState(INSTAGRAM_CREDENTIALS.INSTAGRAM_ACCESS_TOKEN);

    const refresh_access_token_api = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token="+accessToken;
    
    setInterval( ()=>{

        axios.get(refresh_access_token_api)
             .then((res)=>{
                setAccessToken(res?.data?.access_token);
             }).catch((error)=> console.log(error));

    }, 4752000000); //55 days in millisec


    const instagram_get_media_api = "https://graph.instagram.com/me/media?fields=id,username,caption,media_url&access_token="+INSTAGRAM_CREDENTIALS.INSTAGRAM_ACCESS_TOKEN+"&limit=8";
    
    const [instaPosts, setInstaPosts] = useState({
                                                    posts: [],
                                                    nextPost: "",
                                                });

    useEffect( ()=>{

        axios.get(instagram_get_media_api)
        .then((res)=>{

           setInstaPosts({posts: res?.data?.data.map((res)=> res) , nextPost: res?.data?.paging?.next})

        }).catch((err)=> console.log(err))
           

    }, [instagram_get_media_api])



    function getInstFeed(){

         axios.get(instagram_get_media_api)
              .then((res)=>{
                
                setInstaPosts({posts: res?.data?.data.map((res)=> res) , nextPost: res?.data?.paging?.next})

            }).catch((err)=> console.log(err))
       
    }


    setInterval( ()=>{
       
        getInstFeed();

    }, 3600000); //3600000 =60 mins in milliseconds



    const getNextInstaPost = ()=>{

            axios.get(instaPosts?.nextPost)
            .then((res)=>{

                let newArr = [...instaPosts.posts, res?.data?.data]
                let flatArray = newArr.flat(Infinity);

                setInstaPosts({posts: flatArray , nextPost: res?.data?.paging?.next})
    
            }).catch((err)=> console.log(err));

    }


  return (
    <div className='social-media-div'>

        <div className='social-media-title'>
            SOCIAL MEDIA FLUFF
        </div>

        <Grid container gap={0.5} marginTop={2}  justifyContent={'center'} direction="row" flexGrow={0} >
            {
                instaPosts && instaPosts.posts.map((res)=>{
                    return(<>
                            <Item 
                               key={res.id}
                             >                                  
                                    <div >
                                        <img className='insta-image' onClick={handleToggle} src={res.media_url} alt={res.username}/>
                                    </div>

                            </Item>

                            <Backdrop
                                invisible={false}
                                sx={{ color: '#fff',opacity: 0.5, zIndex: (theme) => theme.zIndex.drawer + 1 }}
                                open={open}
                            >
                                
                                <div style={{float: 'right'}}>
                                    <button onClick={handleClose}>X</button>
                                </div>
                                
                            </Backdrop>

                            </>
                    )
                }) 

            }

    </Grid>

    <div className='load-more-div'>
        <button className="load-more-btn" onClick={()=>{getNextInstaPost()}}>Load More</button>
    </div>

        <style jsx>{`

        .social-media-div{
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .load-more-div{ 
              margin: 3%;            
              height: 40px;
              cursor: ${instaPosts.nextPost === undefined || instaPosts.nextPost === "" || instaPosts.nextPost.length  === 0 ? 'not-allowed': ''};
            }

    
        .load-more-btn{
                    pointer-events: ${instaPosts.nextPost === undefined || instaPosts.nextPost === "" || instaPosts.nextPost.length  === 0 ? 'none': 'auto'};
                    height: 40px;
                    width: 120px;
                    border: 1px solid #3A3953;
                    border-radius: 1px;
                    justify-content: center;
                    background-color: white;
                    color: #3A3953;
                    text-align: center;
                    font-size: 15px;
                    
                    cursor: pointer;
            }

            .social-media-title{               
                text-align: center;
                margin: 10px;
                color: #3A3953;
                font-size: 50px;
                font-weight: bold;
                letter-spacing: 2px;
                font-family: 'Oswald', sans-serif;
            }

            .insta-image{
                width: 300px;
                height: 300px;
                }

        `}</style>

    </div>
  )
}

export default SocialMedia