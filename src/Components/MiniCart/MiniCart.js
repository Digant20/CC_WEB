import React,{useState, useEffect, useMemo} from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import axios from 'axios';
import { theDefaultJwt } from '../utils/theJwt';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {useNavigate} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="left" ref={ref} {...props} />;
});

export default function MiniCart(props) {

  const navigate = useNavigate();

  const {openModal, setOpenModal} = props;


  const handleClose = () => {
    setOpenModal(false);
  };


  const sx = {
    "& .MuiDialog-container": {
      alignItems: "flex-start",
      justifyContent: "flex-end",
      float: "right",
      top: "0px",
      bottom: "0px"
      
    }
  };



  //get the cart items data
  const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

  const jwtToken ='Bearer '+theDefaultJwt;
  const cartItemApi = "http://ecom.apprikart.com/cc/api/cart/customer/60/2?limit=10&page=0";

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

            setData(responseData?.data?.cartitem);

            
            //setData(prevData => prevData.concat(responseData?.data?.cartitem));
            //setData((prevData) => [...prevData, responseData?.data?.cartitem]);
            setTotalPages(responseData?.data?.totalPages-1);

        } catch (error) {
            console.error(error);
        }
    }

  

    if (currentPage <= totalPages) {
        getData();
        setCurrentPage(prevPage => prevPage + 1);
    }

    console.log("data:", [...new Set(data)]);

}, [currentPage, totalPages, cartItemApi, headerObject, data]);


  const [quantity, setQuantity] = useState();


const uniqueArr = data && data?.filter((obj, index) => {
  return index === data.findIndex((elem) => {
    return JSON.stringify(elem) === JSON.stringify(obj);
  });
});

console.log("uniqueArr: ", uniqueArr && uniqueArr)


let subtotal=0;

uniqueArr?.map((cartItem) => {
  const cartItemSKU = cartItem?.sku;
  const productInventory = cartItem?.product?.productinventories?.find((inventory) => inventory.sku === cartItemSKU);
  subtotal = productInventory ? productInventory.price * cartItem.quantity : 0

 
});



  return (
    <div>
     
      <Dialog
        sx={sx}

        PaperProps={{
          sx: {
            m: 0,
            top: 0,
            border: '1px solid none',
            borderRadius: "1px",
            minHeight: "100vh",
            width: "100%",
            backgroundColor:' rgb(255, 250, 245)',
            right: 0,          
            bottom: 0,  
          }
        }}
        open={openModal} 
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle className="dialogue-title-minicart">
          <div>
            <ChevronRightIcon className='right-arrow-minicart' onClick={handleClose}/>
          </div>
          <div className='the-cart-text-minicart'>
            Cart
          </div>

          <div> </div>
        </DialogTitle>
        <DialogContent className='minicart-container-div'>

          {
            data && data?.map((res, index)=>{

              const isLastElement = index === data.length - 1;
              const containerClassName = isLastElement ? 'minicart-inner-container-div' : 'minicart-inner-container-div with-border-bottom';

                return(
                      <div className={containerClassName} key={index}>
                        <div className="minicart-image-div" >
                            <img src={res?.product?.image}  className='minicart-image' alt={res?.product?.name} />
                        </div>

                        <div className='minicart-text-btn'>
                            <div className='item-name-minicart'>
                                {res?.product?.name}
                            </div>

                            <div className='price-text-minicart'>
                                Rs.{res?.product?.productinventories?.find(result => result.sku === res.sku)?.price}
                            </div>

                            <div className='quantity-minicart-div'>
                                <button className="inc-decr-btns-minicart">-</button>
                                  <input type="text" value={quantity == "" || quantity == " " || quantity == null || !quantity ? res.quantity : parseInt(quantity)} onChange={(e)=>{setQuantity(e.target.value)}} className='input-minicart'/>
                                <button className="inc-decr-btns-minicart">+</button>
                            </div>

                        </div>

                        <div>
                           
                                <CancelOutlinedIcon className='remove-icon-minicart'  style={{color: "#3A3953"}}/>
                            
                        </div>
                      </div>
                    ) 
                })  
            }

        </DialogContent>
        
        <div className="minicart-bottom-div">
            <div className='minicart-subtotal-div'>
                <label className="subtotal-text">Subtotal</label>
                <label className="subtotal-text">&#x20B9;{subtotal}.00</label>
            </div>

          
              <hr className='the-minicart-hr' />
            
            
            <div>
              <button 
                  className='view-cart-button'
                  onClick={()=>{navigate("/cart")}}
                >
                  View Cart
              </button>
            </div>
          

        </div>
      </Dialog>

      <style jsx>{`

      .subtotal-text{
        text-align: left;
        float: left;
      }

      .the-minicart-hr{
        border: none;
        border-top: 1px solid #3A3953;
        width: 100%;
      }

      .minicart-subtotal-div{
        display: flex;
        flex-direction: column;
        font-size: 25px;
        gap: 5px;
        margin: 20px 0px 0px 20px;
      }

      
      .minicart-bottom-div{
        display: flex;
        flex-direction: column;
        gap: 17px;
        min-height: 200px;
        color: #3A3953;
        font-family: sans-serif;
      }

      .view-cart-button{
          cursor: pointer;
          border: 1px solid #FEC74F;
          border-radius: 2px;
          outline: none;
          background-color: #FEC74F;
          margin-left: 36px;
          width: 275px;
          color: white;
          font-size: 15px;
          height: 42px;
      }

      .inc-decr-btns-minicart{
          border: none;
          outline: none;
          width: 22px;
          height: 23px;
      }

      .input-minicart{
        width: 22px;
        height: 22px;
        border: none;
        outline: none;
        text-align: center;
      }

      .quantity-minicart-div{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        border: 1px solid #3A3953;
      }

          .remove-icon-minicart{
            cursor: pointer;
            visibility: hidden;
          }

          
       

      .item-name-minicart{
        font-family: 'Oswald', sans-serif;
      }


      .price-text-minicart{
          font-size: 15px;
          font-weight: bold;
          color: #3A3953;
          
      }

      .minicart-text-btn{
        display: flex;
        flex-direction: column;
      }

      .minicart-inner-container-div{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 50px;
        padding-bottom: 25px;
       
      }

       .minicart-inner-container-div.with-border-bottom{
        display: flex;
        flex-direction: row;
        margin-top: 20px;
        gap: 50px;
       
        border-bottom: 1px solid #3A3953;
      }

      .minicart-inner-container-div:hover{

        .remove-icon-minicart{
            cursor: pointer;
            visibility: visible;
          }
      }


      

      .minicart-container-div{
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        overflow-y: scroll;
    
      }

      .minicart-container-div::-webkit-scrollbar{
          display: none;
        }


      .minicart-image{
        width: 80px;
        height: 80px;
      }

      .minicart-image-div{
        min-height: 80px;
        min-width: 80px;
        
      }
      
      .dialogue-title-minicart{
        display: flex;
        justify-content: space-between;
        padding: 25px;
        background-color: #3A3953;
        color: white;
      }

      .right-arrow-minicart{
        width: 40px;
        height: 40px;
        cursor: pointer;
      }

      .the-cart-text-minicart{
        color: white;
       
        padding: 5px 0px 0px 0px;
      }
      
      `  
      }</style>
    </div>
  );
}