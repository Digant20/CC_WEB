import React, { useEffect, useMemo, useState } from 'react'
import Hamburger from './Hamburger';
import logo from '../../../Assets/images/Conscious_creatures_logo.png'
// import '../Header/Hamburger.css';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';

import List from '@mui/material/List';

import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { ListItemButton } from '@mui/material';

import { NavLink, useNavigate } from "react-router-dom";

import { menu_items } from './menu_items';
import MiniCart from '../../MiniCart/MiniCart';
import { theDefaultJwt } from '../../utils/theJwt';
import axios from 'axios';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});


const Header = () => {

  const navigate = useNavigate();


  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

  const handleClickOpen = () => {
    setOpenHamburgerMenu(true);
  };

  const handleClose = () => {
    setOpenHamburgerMenu(false);
  };

  const [cartLength, setCartLength] = useState(0);

  const jwtToken ='Bearer '+theDefaultJwt;
  const cartItemApi = "http://ecom.apprikart.com/cc/api/cart/customer/6/2?limit=10&page=0";

  const headerObject =   useMemo( ()=>{

    return( {
        'Authorization': jwtToken,
        'Accept' : '*/*',
        'Content-Type': 'application/json',
        'App-Token' : 'A14BC',
        'Access-Control-Allow-Origin': '*'
        }
     )

  },[jwtToken])

  
  useEffect(()=>{
    axios.get(cartItemApi, {headers: headerObject})
          .then((res)=>{
            setCartLength(res.data.data.totalItems);
          });
    

  }, [])


  //states for mini cart open and close
  const [openModal, setOpenModal] = useState(false);

  const openTheMiniCart = ()=>{
    setOpenModal(true);
  }

  return (
    <div>
        <div className='navigation'>

          <div className='hexagon'>
            <img src={logo} alt="cc_logo" />
            
          </div>
          
          <div className='ul-div'>
                <ul>
                    {menu_items.map((res, index)=>{

                      return(

                        <li key={index}  className='header-menu-options'> <NavLink activeClassName="active" style={{textDecoration: 'none'}}  to={"/"+res.toLowerCase()}>{res}</NavLink></li>

                      )

                    })}
                </ul>
      
          </div>


          <div>
              <IconButton  aria-label="cart" onClick={()=>openTheMiniCart()}>
                <StyledBadge badgeContent={cartLength && cartLength} color="secondary">
                  <ShoppingCartOutlinedIcon fontSize="medium" color="action" />
                </StyledBadge>
              </IconButton>
          </div>

          <div className='hamburger' onClick={handleClickOpen}>
              <Hamburger isOpen={openHamburgerMenu}/>
          </div>

           <Dialog
              fullScreen
              open={openHamburgerMenu}
              onClose={handleClose}
              TransitionComponent={Transition}
            >
                   
                   <div style={{textAlign: 'right', padding: '20px'}}>

                      <CloseIcon onClick={handleClose} style={{ fontSize: '45px'}}/>

                   </div>
                   
              <List style={{marginLeft: '20px'}}>
              {

                menu_items.map((res, index)=>{

                  return(
                          <ListItemButton 
                              key={index}  
                              autoFocus='true' 
                              sx={{
                                    '&.Mui-selected': {
                                      color: 'orange',
                                      
                                    }
                                  }}
                              >
                              <ListItemText primary={res} />
                          </ListItemButton>
                      )

                  })

              }
               
               
              </List>
            </Dialog>


            <MiniCart 
                openModal={openModal}
                setOpenModal = {setOpenModal}
             />


        </div>




        <style jsx>{`

          ul li a{
              color: #3A3953;
            }

            .header-menu-options{
              cursor: pointer;
            }


              .ul-div{
                right: 0px;
                margin: 0px;
                color: #3A3953;
              }

              .hexagon {
                  width: 200px;
                  height: 200px;
                  background-color: #FEC74F; /* Change this to your desired background color */
                  position: relative;
                  margin: 80px 0px 0px 79px; /* This is half of the hexagon's height */
                  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
                }

                .hexagon img {
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }

                .navigation{
                  display:flex;
                  flex-direction: row;
                  justify-content: space-around;
                  height: 112px;
                  
                  align-items: center;        
                  position: fixed;
                  top: 0px;
                  z-index:600;
                  width: 100%;
                  background-color: #FEC74F;
                   
                }
                
                
                .navigation ul{
                    display:flex;
                    flex-direction: row;
                    float: right;

                  }
                  
                .navigation ul li{
                    list-style-type: none;
                    padding-right: 100px;
                } 


                .hamburger{
                    display: none;
                    z-index: 10;
                } 


                @media (max-width: 500px){


                  .hexagon {
                      width: 100px;
                      height: 100px;
                      background-color: #FEC74F; /* Change this to your desired background color */
                      position: relative;
                      margin-top: 50px; /* This is half of the hexagon's height */
                      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);  
                     }

                    .hexagon img {
                      position: absolute;
                      top: 0;
                      left: 0;
                      width: 100%;
                      height: 100%;
                      object-fit: cover;
                    }

                  .navigation{
                  
                  height: 8vh;
                  positon: fixed;
                
                }
                  
                    .hamburger{
                        display:flex;
                       
                       justify-content: 'center';
                       
                        z-index: 10;
                    }
                
                   
                    .navigation ul{
                        display: ${openHamburgerMenu ? 'flex' : 'none'};
                        background-color: #FEC74F;
                        flex-direction: column;
                        color: #3A3953;
                        height: 100vh;

                        width: 50vw;
                       
                        position: fixed;
                        top: 5.9vh;
                        right: 0;
                        transition: transform .3s
                                    cubic-bezier(0, .52, 0, 1);
                        overflow: scroll;
                        z-index: 1000;
                        
                    }

                      .navigation ul li:active{
                        color: orange;
                          
                      } 
                   


                }
                
               
                
            `}</style>

    </div>
  )
}

export default Header