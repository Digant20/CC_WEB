import axios from 'axios';
import React, { useMemo, useState } from 'react';
import { useLocation } from "react-router-dom";
import { theDefaultJwt } from '../utils/theJwt';
import MiniCart from '../MiniCart/MiniCart';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



const Productpage = () => {

    const location = useLocation();

    console.log("location: ", location)
    
    const { productData } = location?.state || {};
  

    console.log("productdata: ", productData && productData);

    const [quantity, setQuantity] = useState(1);

    //states for mini cart open and close
    const [openModal, setOpenModal] = useState(false);

    const [productOption, setProductOption] = useState();

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


    const handleAddToCartData=()=>{

    const body={
                  "quantity": quantity,
                  "sku": skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.sku,
                  "unitname": skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.unitName,
                  "customerId": 2,
                  "productId": skuandpricefromtheSelectedSizeType[0].productId,
                  "regionId":2
                  }
         
                  console.log("body: ",body)

        axios.post("http://ecom.apprikart.com/cc/api/cart/additem",body, {headers: headerObject})
          .then( (res)=>{
              
              setOpenModal(true);

          }).catch((error)=>{window.alert(error.message)})
   }

   
    const skuandpricefromtheSelectedSizeType = productData?.productinventories.filter(inv => inv.id === parseInt(productOption));

    
    const handleProductOption = (res)=>{
        setProductOption(res.target.value);

    }

    let theJsx = "";

    if(productData && productData?.productinventories && Array.isArray(productData?.productinventories)){

       theJsx = <select className='size-dropdown-ppage' value={productOption && productOption}
                    onChange={(res)=>{handleProductOption(res)}}
                 >
                        
                    {
                      productData?.productinventories?.map((res, index)=>{
                            return(
                                
                                    <option value={res?.id}>{res?.inventoryType}</option>
                                
                            )})      
                            
                    }
                </select>

    }else{
       theJsx =  <div>No Data</div>
    }

  return (
    <div style={{backgroundColor: "#FFFAF5"}}>
    <Header />
    <div className='main-content-div-ppage'>
      <div className='path-header-div'>
        <div style={{display: 'flex', gap: '10px', color:"#3A3953", marginTop: "25%"}}>
            <a href="/home" style={{textDecoration: 'none', color: '#3A3953'}}>Home</a> / <span style={{color: 'grey'}}>{productData?.name}</span>
        </div>

        {/* <div style={{display: 'flex', gap: '10px', color:"#3A3953", marginTop: "25%"}}>
            <div style={{ display: 'flex', gap: '5px'}}><ArrowBackIosIcon /> Prev</div>
            <div>|</div>
            <div style={{ display: 'flex', gap: '5px'}}>Next <ArrowForwardIosIcon /></div>
        </div> */}
      </div>
          <div className='parent-cart-div-ppage'>
              <div className='cart-image-div-ppage'>
                  <img className="cart-image-ppage" src={productData?.image} alt={productData?.name} />
              </div>

              <div className='image-side-info-div-ppage'>
                  <div className='pet-food-sku-div-ppage'>
                      <div className="food-name-ppage">{productData?.name}</div>
                      <div className='sku-ppage'>SKU: {skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.sku}</div>
                      <div className='price-ppage'>&#x20B9;{skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.price}.0</div>
                  </div>
              
                  <div className='dropdowns-ppage'>
                      <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop:'10px'}}>
                          <label style={{textAlign: 'left'}}>Size</label>
                          {theJsx}
                      </div>

                      <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                          <label style={{textAlign: 'left'}}>Quantity</label>
                          <input type="number" className='quantity-ppage' value={quantity} onChange={(e)=> setQuantity(e.trget.value)}  min="1" max="10"/>
                      </div>
                  </div>

                  <div className='add-to-cart-btn-cart-div-ppage'>
                      <button className='add-to-cart-button-ppage' onClick={()=>handleAddToCartData()}>Add to Cart</button>
                      <button className='buynow-button-ppage' >Buy Now</button>
                  </div>
                    
              </div>

              <MiniCart 
                openModal={openModal}
                setOpenModal = {setOpenModal}
             />
                         
          </div>
    </div>
    <Footer />


                    <style jsx>{
                      `

                      .main-content-div-ppage{
                            margin: 0% 15% 15% 18%;
                            display: flex;
                            flex-direction: column;
                            gap: 50px;
                            
                      }

                      .path-header-div{
                        display: flex;
                        flex-direction: row;
                        justify-content: space-between;
                       
                      }

                      .parent-cart-div-ppage{
                          display: flex;
                          flex-direction: row;
                          gap: 42px;
                          
                      }

                      .cart-image-ppage{
                            width: 450px;
                            height: 450px;
                            float: left;
                        }

                        .cart-image-div-ppage{
                          border: 1px solid black;
                        }

                        .pet-food-sku-div-ppage, .dropdowns-ppage, .add-to-cart-btn-cart-div-ppage{
                              margin: 15px 15px 15px 0px;
                              
                          }

                          .pet-food-sku-div-ppage{
                              display: flex;
                              flex-direction: column;
                              gap: 10px;
                              color: #3A3953;
                              text-align: left;
                          }

                          .food-name-ppage{
                                font-size: 30px;
                                font-weight: 300;
                                color: #3A3953;
                            }

                            .price-ppage{
                                font-size: 30px;
                                font-weight: 300;
                                color: #3A3953;
                            }

                            .sku-ppage{
                                color: #3A3953;
                                font-size: 15px;

                            }


                            .add-to-cart-button-ppage{
                                  cursor: pointer;
                                  border: 1px solid #3a3953;
                                  border-radius: 2px;
                                  outline: none;
                                  background-color: #3a3953;
                                  color: #FFFFFF;
                                  margin-top: 25px;
                                  height: 38.1px;
                              }

                              .buynow-button-ppage{
                                  cursor: pointer;
                                  border: 1px solid #3a3953;
                                  border-radius: 2px;
                                  outline: none;
                                  background-color: #FFFAF5;
                                  color: #3a3953;
                                  margin-top: 10px;
                                  height: 45px;
                              }

                              .add-to-cart-btn-cart-div-ppage{
                                  display: flex;
                                  flex-direction: column;
                                  margin-top: 40px;
                              }

                              .view-more-ppage{
                                  font-size: 12px;
                                  color: black;
                              }

                              .quantity-ppage{
                                  border: 1px solid #E5E4E2;
                                  height: 35px;
                                  width: 70px;
                                  color: #3A3953;
                                  
                              }
                              

                              .size-dropdown-ppage{
                                  border: 1px solid #E5E4E2;
                                  height: 40px;
                                  width: 350px;
                                  color: #3A3953;
                                  
                              }

                              input[type=number]::-webkit-inner-spin-button {
                                  opacity: 1
                              }

                              .dropdowns-ppage{
                                  display: flex;
                                  flex-direction: column;
                                  justify-content: space-around;
                                  gap: 20px;
                                  color: #3A3953;
                              }
                      
                      `}</style>
    </div>
  )
}

export default Productpage