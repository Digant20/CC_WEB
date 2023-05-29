import React, { useEffect, useMemo, useState } from 'react'
import Header from '../Home/Header/Header'
import Footer from '../Home/Footer/Footer'
import axios from 'axios';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import HttpsIcon from '@mui/icons-material/Https';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import CloseIcon from '@mui/icons-material/Close';
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
const[promoInput,setPromoInput]=useState(false);
const[noteInput,setnoteInput]=useState(false)
const promoinputfieldToggle = () =>{
  setPromoInput(!promoInput)
 
}
const noteinputfieldToggle = () =>{
  setnoteInput(!noteInput)

}


  return (
    <div style={{backgroundColor: "#FFFAF5"}}>
    <Header />
    <div className='main-content-div-ppage-cart-summary'>
      <div className='path-header-div-cart-summary'>
        <div style={{ flexBasis:"45%", padding: "10px 10px 10px 0px", fontSize: "20px", color:"#3A3953", marginTop: "25%", borderBottom: "1px solid black"}}>
            <span className='order-summary-heading'>My cart</span>
        </div>
        <div style={{ flexBasis:"38%",  padding: "10px 10px 10px 0px", borderBottom: "1px solid black", fontSize: "20px", color:"#3A3953", marginTop: "25%"}}>
            <div className='order-summary-heading'>Order summary</div>
        </div>
       
      </div>
     <div className='parents-div' style={{display:"flex"}}>
          <div className='parent-cart-div-ppage-cart-summary' style={{flexBasis:"63%"}} >
          {
            uniqueArr && uniqueArr.map((res, index)=>{
                console.log("cartsummary: ", res)
                return(
                  <div >
                      <div className="minicart-inner-container-div-cart-summary with-border-bottom-cart-summary" key={index}>
                        <div className="minicart-image-div-cart-summary" >
                            <img src={res?.product?.image}  className='minicart-image-cart-summary' alt={res?.product?.name} />
                        </div>

                        <div className='minicart-text-btn-cart-summary'>
                          <div style={{display:"flex",flexDirection:"row",gap:"50px"}}>
                          
                              <div>
                                  <div className='item-name-minicart-cart-summary'>
                                      {res?.product?.name}
                                  </div>
                                  <div style={{paddingTop:"10px"}}>
                                    250
                                  </div>

                                  <div  style={{paddingTop:"5px", color: "grey"}}>
                                    size: medium
                                  </div>
                              </div>
                           
                              <div  className='btn-flex-container'>
                                  <div className='quantity-minicart-div-cart-summary' >
                                      <button className="inc-decr-btns-minicart-cart-summary">-</button>
                                        <input type="text" value={quantity == "" || quantity == " " || quantity == null || !quantity ? res.quantity : parseInt(quantity)} onChange={(e)=>{setQuantity(e.target.value)}} className='input-minicart'/>
                                      <button className="inc-decr-btns-minicart-cart-summary">+</button>
                                  </div>

                                  <div>
                                    <div>500</div>
                                  </div>
                                  
                                  <div>
                                    <div><CloseIcon className='close-icon' /></div>
                                  </div>
                              </div>
                              

                        </div>
                                   
                        
                        </div>
                       
                      </div>
                            
                      </div>
                    ) 
                })  
            }
       
             <div className='promocode-div-container'>
              <div style={{textAlign:"left",cursor:"pointer", display: 'flex', alignItems: 'center'}} className='promocode-name' onClick={()=>promoinputfieldToggle()}><LocalOfferOutlinedIcon className='promo-icon'/>Enter a promo code</div>
              <div style={{display:"flex",flexDirection:"row",  width: "375px", marginLeft: "35px",}}>
                <input type="text" placeholder="Enter a Promo Code" className=
                { 
                  promoInput?
                  'promocode-input-filend-div':
                  'promocode-input-filend-div-two'
                 } />
                <button className=
                {promoInput?
                  'apply-btn':
                  'apply-btn-two'
                }>Apply</button>
              </div>
             </div>
             <div className='note-div-container'>
              <div style={{textAlign:"left",cursor:"pointer", display: 'flex', alignItems: 'center'}} onClick={()=>noteinputfieldToggle()} ><DescriptionOutlinedIcon className="note-icon" />Add a note</div>
              <div style={{display:"flex",flexDirection:"row",  width: "375px", marginLeft: "35px", height: "92px"}}>
                <input type="text" placeholder="Instructions?Special requests?Add them here" className=
                {
                  noteInput?
                  'promocode-input-filend-divs':
                  'promocode-input-filend-divs-two'
                 } />
                {/* <button className='apply-btns'>Apply</button> */}
              </div>
             </div>



          </div>
          <div className='order-summary-div'>
              <div className='subtotal-div'>
                  <div>Subtotal</div>
                  <div>250</div>
              </div>

              <div className='shipping-div'>
                  <div>Shipping</div>
                  <div>300</div>
              </div>

              <div>
                  <div className='state-div'>karnataka,India</div>
              </div>

              <div className='taxes-div'>
                  <div>Taxes</div>
                  <div>45</div>
              </div>

              <div className='total-div'>
                  <div>Total</div>
                  <div>325</div>
              </div>
              
              <div >
                  <button className='checkout-btn'>Checkout</button>
              </div>

              <div>
                  <div className='Secure-Checkout-div'><HttpsIcon className='secure-icon' />Secure Checkout</div>
              </div>
          </div>
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
                text-align: left;
           
            }


             .minicart-inner-container-div-cart-summary{
                display: flex;
                flex-direction: row;
                margin-top: 15px;
                gap: 30px;
                padding-bottom: 20px;
                width: 75%;
              
            }

       .minicart-inner-container-div-cart-summary.with-border-bottom-cart-summary{
            display: flex;
            flex-direction: row;
           
            margin-top: 15px;
            gap: 30px;
            width: 75%;
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
            text-align: left;
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
            height: 24px;
            border: 1px solid #3A3953;
        }

       
        .subtotal-div{
          display:flex;
          flex-direction:row;
          justify-content: space-between;
        }
        .shipping-div{
          display:flex;
          flex-direction:row;
          justify-content: space-between;
          margin-top:10px;
        }
        .taxes-div{
          display:flex;
          flex-direction:row;
          justify-content: space-between;
          margin-top:10px;
          padding-bottom:20px;
        }
        .total-div{
          display:flex;
          flex-direction:row;
          gap:290px;
          border-top:1px solid black;
          padding-top:30px;
        }
        .checkout-btn{
          background-color:#3A3953;
          color:white;
          border-radius: 2px;
          width:100%;
          height:7vh;
          border:none;
          outline:none;
          margin-top:20px;
          cursor:pointer;
          
        
        }
        .Secure-Checkout-div{
          margin-top:20px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .state-div{
          text-align:left;
          margin-top:10px;
          cursor:pointer;
        }
        .btn-flex-container{
          display:flex;
          flex-direction:row;
          gap: 15px;
   
      
     
        }
        .promocode-input-filend-div{
          height:34px;
          width: 300px;
          padding-left: 10px;
          outline:none
          color:grey;
          background-color:#FFFAF5;
          display:block;
        }
        .promocode-input-filend-div-two{
          display:none;
          outline:none
        }



        {/* note */}

        .promocode-input-filend-divs{
            height: 86px;
            width: 100%;
            padding-left: 12px;
            color:grey;
            background-color:#FFFAF5;
            display:block;
        }

        .promocode-input-filend-divs-two{
            display:none;
        }


        .apply-btn{
            background-color:
            color:grey;
            height:40px;
            width: 100px;
            background-color:#FFFAF5;
            display:block;
        }
        .apply-btn-two{
          
           display:none;
         }

         
        .promocode-div-container{
            margin-top:20px;
        }

      .note-div-container{
          margin-top:20px;
          }

     .instructions-field{
      width:100%;
      height:15vh;
      margin-right:50%;
     }
     .promo-icon{
        transform: rotate(80deg);
        color:grey;
        margin: 5px;
     }
     .note-icon{
      color:grey;
      margin: 5px;
     }
     .secure-icon{
      color:#3A3953;
      margin: 2px;
     }
     .close-icon{
      color:grey;
     }
     .mycart-heading{
      text-align: left;
     }
     .order-summary-heading{
      text-align: left;
     }
    
                      
        `}
    </style>
    </div>
  )
}

export default CartSummaryPage