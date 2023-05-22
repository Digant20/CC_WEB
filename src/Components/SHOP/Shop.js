import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import { useNavigate } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import MiniCart from '../MiniCart/MiniCart';
import { Dialog, DialogContent } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(255, 250, 245)',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
      
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));


const Shop = () => {

    const {cartData} = useSelector(state=> state.cart)

    const dispatch = useDispatch();

    useEffect(() => {
        document.title = 'shop | consciouscreatures';
      }, []);

    const [data, setData] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    

    const productApi = `/pagination/products?limit=10&page=${currentPage}`;

    //jwt token
    const jwtToken ='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTEgODE5Nzc0Njc3NCIsImF1dGgiOiJST0xFX1VTRVIiLCJ0ZW5hbnQiOiI4OTg5ODEiLCJleHAiOjE3MDY0MzcxNzZ9.RKy10Jq0JZ-0mCnEhrErm2wBDSfYPdXjdVMEPWKAt18-WFm55glBTGuNilpWPxFJCalmXiYhgc1CcetHnFILJw';

   
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



        useEffect(() => {
            async function getData() {
                try {
                    const response = await axios.get(productApi, {headers: headerObject});
                    const responseData = response.data;
            
                    setData(prevData => prevData.concat(responseData?.data?.product));
                    setTotalPages(responseData?.data?.totalPages-1);

                } catch (error) {
                    console.error(error);
                }
            }
        
            if (currentPage <= totalPages) {
                getData();
                setCurrentPage(prevPage => prevPage + 1);
            }

            console.log("data:", data);

        }, [currentPage, totalPages, productApi, headerObject, data]);
        
      

        //for add-to-cart and product page naviagtion:
        
      const [open, setOpen] = React.useState(false);

      const [cartItem, setCartItem] = useState([]);

      //add-to-cart
    const modalAndDataHandler = (data) => {
        console.log("add to cart item: ", data);

        dispatch(add(data));

        setCartItem(data);
        

        setOpen(true);

    };

    console.log("productCart: ", cartData)


    const handleClose = () => {
        setOpen(false);
    };

    const [productOption, setProductOption] = useState();

    const handleProductOption = (res)=>{
        console.log("res.target.value: ", res.target.value)
        setProductOption(res.target.value);

    }

    //ifnd the product that has a matching proudciniv id with the slected id from the osze-dropdown
    const theSelectedSizeType = data?.productsArray?.filter(product => {
        // check if the product has at least one inventory with the matching ID
        return product.productinventories.filter(inv => inv.id === productOption);
      });


    console.log("theSelectedSizeType: ", theSelectedSizeType && theSelectedSizeType[0])


    let theJsx = "";

    if(cartData && cartData?.productinventories && Array.isArray(cartData?.productinventories)){

       theJsx = <select className='size-dropdown-shop' value={productOption && productOption}
                    onChange={(res)=>{handleProductOption(res)}}
                 >
                        
                    {
                        cartItem?.productinventories?.map((res, index)=>{
                            return(
                                
                                    <option value={res?.id}>{res?.inventoryType}</option>
                                
                            )})      
                            
                    }
                </select>

    }else{
       theJsx =  <div>No Data</div>
    }



    //states for mini cart open and close
    const [openModal, setOpenModal] = useState(false);
    
     //find only the selected/chosen inventoryType/size and display the sku & price
     const skuandpricefromtheSelectedSizeType = cartData?.productinventories.filter(inv => inv.id === parseInt(productOption));
    console.log("skuandpricefromtheSelectedSizeType: ", skuandpricefromtheSelectedSizeType)

     const [quantity, setQuantity] = useState(1);

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
                handleClose();
                setOpenModal(true);

            }).catch((error)=>{window.alert(error.message)})
     }

     const navigate = useNavigate();

   const takeToProductPage = (product)=>{

    const formattedUrlParam = encodeURIComponent(product.name.replace(/\s+/g, '-'));
    
        navigate(`/product-page/${formattedUrlParam}`,
                { state: { productData: product } })
   }
 

  return (
    <div className='main-div-shop'>
        <Header />
        <div className='product-main-div-shop'>

            <div className='our-range-div-shop'>
                OUR PRODUCTS
            </div>



    <Grid container rowSpacing={1}>
      
        {
            data.map((res, index)=>{

                return(
                    <Grid item xs={3}>
                        <Item 
                            key={index}>
                            <div className='product-columns-shop' 
                                
                            >

                                <div>
                                    <img src={res.image} className='product-image-shop' onClick={()=>takeToProductPage(res)} alt={res.image}/>
                                </div>

                                <div className='product-name-shop'>
                                    <span >{res.name}</span><br />
                                    <span>&#x20B9;{res?.productinventories[0]?.price}</span>
                                </div>
                            </div>
                                                    
                                <div className='add-to-cart-div-shop'>
                                    <button className="add-to-cart-btn-shop" onClick={ ()=>{modalAndDataHandler(res)}}>Add to Cart</button>
                                </div>  

                        </Item>

                        
                    </Grid>
                )
            })       
        }             
    </Grid>

            <div>
              <BootstrapDialog
                onClose={handleClose}
                open={open}
                fullWidth   
              >
                 
                <DialogContent className='main-pop-up-cart-div-shop'>     
                    <div style={{marginBottom: "10px"}}>
                        <button className="close-btn-shop" onClick={()=>setOpen(false)}>x</button>           
                    </div>
                    
                    <div className='parent-cart-div-shop'>
                        <div className='cart-image-div-shop'>
                            <img className="cart-image-shop" src={cartData?.image} alt={cartData?.name} />
                        </div>

                        <div className='image-side-info-div-shop'>
                            <div className='pet-food-sku-div-shop'>
                                <div className="food-name-shop">{cartData?.name}</div>
                                <div className='price-shop'>&#x20B9;{skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.price}.0</div>
                                <div className='sku-shop'>SKU: {skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.sku}</div>
                            </div>
                        
                            <div className='dropdowns-shop'>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop:'10px'}}>
                                    <label>Size</label>
                                    {theJsx}
                                </div>

                                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <label>Quantity</label>
                                    <input type="number" className='quantity-shop' value={quantity} onChange={(e)=> setQuantity(e.trget.value)}  min="1" max="10"/>
                                </div>
                            </div>

                            <div className='add-to-cart-btn-cart-div-shop'>
                                <button className='add-to-cart-button-shop' onClick={()=>handleAddToCartData()}>Add to Cart</button>
                                <a className="view-more-shop" href="https://www.consciouscreatures.earth/home" >View More Details</a>
                            </div>
                             
                        </div>
                         
                    </div>

                </DialogContent>
        
            </BootstrapDialog>

            <MiniCart 
                openModal={openModal}
                setOpenModal = {setOpenModal}
             />
        </div>

           

 
   

    <style jsx>{`

    .view-more-shop{
                font-size: 12px;
                color: black;
            }

    .add-to-cart-button-shop{
                cursor: pointer;
                border: 1px solid #FFFFFF;
                border-radius: 2px;
                outline: none;
                background-color: #F88D58;
                color: #FFFFFF;
                margin-top: 25px;
                height: 38.1px;
            }

            .add-to-cart-btn-cart-div-shop{
                display: flex;
                flex-direction: column;
                margin-top: 40px;
            }

    .quantity-shop{
                border: 1px solid grey;
                height: 20px;
                width: 50px;
            }

            .size-dropdown-shop{
                border: 1px solid grey;
                height: 30px;
                width: 165px;
                
            }

            input[type=number]::-webkit-inner-spin-button {
                opacity: 1
            }


    .food-name-shop{
                font-size: 25px;
                font-weight: 300;
            }

            .price-shop{
                font-size: 20px;
                font-weight: 300;
            }

            .sku-shop{
                color: grey;
                font-size: 12px;
            }

            .cart-image-shop{
                width: 400px;
                height: 400px;
                float: left;
                
            }

            .parent-cart-div-shop{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

    .pet-food-sku-div-shop, .dropdowns-shop, .add-to-cart-btn-cart-div-shop{
                margin: 15px 15px 15px 0px;
                
            }

            .pet-food-sku-div-shop{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }

    .cart-image-shop{
                width: 400px;
                height: 400px;
                float: left;
                
            }

            .parent-cart-div-shop{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }

            .close-btn-shop{
               
               border: 1px solid #57557D;
               border-radius: 2px;
               outline: none;
               float:right;
               width: 25px;
               height: 25px;
               background-color: white;
               color: #57557D;
           }
   

    .add-to-cart-div-shop{
      display: flex;
      justify-content: center;
    }

    .add-to-cart-btn-shop{
        cursor: pointer;
        height: 40px;
        width: 200px;
        border: 1px solid #3A3953;
        border-radius: 1px;
        background-color: #3A3953;
        color: white;
        font-size: 15px;
        justify-content: center;
         
        font-family: 'Roboto', sans-serif;
    }

  

    .product-main-div-shop{
        background-color: rgb(255, 250, 245);
        background-image: none;
    }


    .product-image-shop{
        width: 250px;
        height: 306px;
        cursor: pointer;
    }

    .product-columns-shop{
        display: flex;
        flex-direction: column;
        gap: 2;
    }

   
    
    .our-range-div-shop{
        text-align: center;
        color: #3A3953;
        padding: 190px 0px 40px 0px;
        font-size: 75px;
        font-weight: 400;
        font-family: 'Oswald', sans-serif;
    }

    `}</style>
</div>
        <Footer />

        
    </div>
  )
}

export default Shop