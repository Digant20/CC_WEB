import React, { useEffect, useMemo, useState } from 'react'
import Header from '../Home/Header/Header'
import Footer from '../Home/Footer/Footer'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

import { theDefaultJwt } from '../utils/theJwt';

const CartSummaryPage = () => {


    
  //get the cart items data
  const [data, setData] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

const jwtToken ='Bearer '+theDefaultJwt;
const cartItemApi = "http://ecom.apprikart.com/cc/api/cart/customer/2/2?limit=10&page=0";

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


useEffect(() => {

  async function getData() {
      try {
          const response = await axios.get(cartItemApi, {headers: headerObject});
          const responseData = response.data;
  
          setData(prevData => prevData.concat(responseData?.data?.cartitem));
          setTotalPages(responseData?.data?.totalPages-1);

      } catch (error) {
          console.error(error);
      }
  }

  if (currentPage <= totalPages) {
      getData();
      setCurrentPage(prevPage => prevPage + 1);
  }

  console.log("cart data in cartsummarypage:", [...new Set(data)]);

}, [currentPage, totalPages, cartItemApi, headerObject, data]);


const [quantity, setQuantity] = useState();


const uniqueArr = data && data.filter((obj, index) => {
    return index === data.findIndex((elem) => {
            return JSON.stringify(elem) === JSON.stringify(obj);
    });
});





    
  return (
    <div style={{backgroundColor: "#FFFAF5"}}>
    <Header />
    <div className='main-content-div-ppage-cart-summary'>
      <div className='path-header-div-cart-summary'>
        <div style={{display: 'flex', gap: '10px', padding: "10px 10px 10px 0px", borderBottom: "1px solid black", fontSize: "20px", color:"#3A3953", marginTop: "25%"}}>
            <span>My cart</span>
        </div>
        <div style={{display: 'flex', gap: '10px', padding: "10px 10px 10px 0px", borderBottom: "1px solid black", fontSize: "20px", color:"#3A3953", marginTop: "25%"}}>
            <span>Order summary</span>
        </div>
       
      </div>
          <div className='parent-cart-div-ppage-cart-summary'>
          {
            uniqueArr && uniqueArr.map((res, index)=>{

              const isLastElement = index === uniqueArr.length - 1;
              const containerClassName = isLastElement ? 'minicart-inner-container-div-cart-summary' : 'minicart-inner-container-div-cart-summary with-border-bottom-cart-summary';

                return(
                      <div className={containerClassName} key={index}>
                        <div className="minicart-image-div-cart-summary" >
                            <img src={res?.product?.image}  className='minicart-image-cart-summary' alt={res?.product?.name} />
                        </div>

                        <div className='minicart-text-btn-cart-summary'>
                            <div className='item-name-minicart-cart-summary'>
                                {res?.product?.name}
                            </div>

                            <div className='price-text-minicart-cart-summary'>
                                Rs.{res?.product?.productinventories.find(result => result.sku === res.sku)?.price}
                            </div>

                            <div className='quantity-minicart-div-cart-summary'>
                                <button className="inc-decr-btns-minicart-cart-summary">-</button>
                                  <input type="text" value={quantity == "" || quantity == " " || quantity == null || !quantity ? res.quantity : parseInt(quantity)} onChange={(e)=>{setQuantity(e.target.value)}} className='input-minicart'/>
                                <button className="inc-decr-btns-minicart-cart-summary">+</button>
                            </div>

                        </div>

                        <div>
                           
                                <CancelOutlinedIcon className='remove-icon-minicart'  style={{color: "#3A3953"}}/>
                            
                        </div>

                       
                      </div>
                    ) 
                })  
            }
             
          </div>
    </div>
    <Footer />

    <style jsx>{
             `

            .main-content-div-ppage-cart-summary{
                margin: 0% 15% 15% 18%;
                display: flex;
                flex-direction: column;
                gap: 50px;
            
            }

            .path-header-div-cart-summary{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }


             .minicart-inner-container-div-cart-summary{
                display: flex;
                flex-direction: row;
                margin-top: 20px;
                gap: 50px;
                padding-bottom: 25px;
            
            }

       .minicart-inner-container-div-cart-summary.with-border-bottom-cart-summary{
            display: flex;
            flex-direction: row;
            margin-top: 20px;
            gap: 50px;
        
            border-bottom: 1px solid #3A3953;
        }

      .minicart-image-cart-summary{
            width: 80px;
            height: 80px;
        }

      .minicart-image-div-cart-summary{
            min-height: 80px;
            min-width: 80px;
        }

      .item-name-minicart-cart-summary{
            font-family: 'Oswald', sans-serif;
        }


      .price-text-minicart-cart-summary{
          font-size: 15px;
          font-weight: bold;
          color: #3A3953;
          
        }

      .minicart-text-btn-cart-summary{
            display: flex;
            flex-direction: column;
        }
           

      .inc-decr-btns-minicart-cart-summary{
            border: none;
            outline: none;
            width: 22px;
            height: 23px;
        }

      .input-minicart-cart-summary{
            width: 22px;
            height: 22px;
            border: none;
            outline: none;
            text-align: center;
        }

      .quantity-minicart-div-cart-summary{
            display: flex;
            flex-direction: row;
            margin-top: 10px;
            border: 1px solid #3A3953;
        }
                      
        `}
    </style>
    </div>
  )
}

export default CartSummaryPage