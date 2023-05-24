import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import blank_image from "../../../Assets/images/blank_image.webp";
import { validateImage } from "image-validator";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { theDefaultJwt } from '../../utils/theJwt';
import {useDispatch, useSelector} from "react-redux";
import { add } from '../../store/cartSlice';
import MiniCart from '../../MiniCart/MiniCart';
import {useNavigate} from "react-router-dom"



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


 

const ProductsListing = () => {

    const dispatch = useDispatch();

    const {cartData} = useSelector(state=> state.cart)


    const [products, setProducts] = useState({productsArray: [], totalPages: null});

    const [pageNum, setPageNum] = useState(0);

    const productApi = "/pagination/products?limit=2&page="+pageNum;

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


    useEffect( ()=>{

      axios.get(productApi, {headers: headerObject})
            .then( (res)=>{

              //setProducts(res.data.data);
               
              let newArr = [...products.productsArray, res?.data?.data.product]
              let flatArray = newArr.flat(Infinity);

              setProducts({productsArray: flatArray, totalPages: res?.data?.data.totalPages})
                            
            }).catch((error)=>{console.log(error)})

    }, [])



    const getNextPageProducts = ()=>{

        setPageNum(pageNum + 1);

        axios.get(productApi, {headers: headerObject})
            .then( (res)=>{
               
                let newArr = [...products.productsArray, res?.data?.data.product]
                let flatArray = newArr.flat(Infinity);

              setProducts({productsArray: flatArray, totalPages: res?.data?.data.totalPages})
              
                // setProducts(flatArray)

            }).catch((error)=>{console.log(error)})

    }



    const urlValidation = async (url) => {
        const isValidImage = await validateImage(url);
       return isValidImage;
      };


      let [over,setOver]=React.useState(false);
      
      let [productIndex, setProductIndex] =useState()

      const [open, setOpen] = React.useState(false);

      const [cartItem, setCartItem] = useState([]);

      //add-to-cart
    const modalAndDataHandler = (data) => {

        dispatch(add(data));

        setCartItem(data);
        

        setOpen(true);

    };



    const handleClose = () => {
        setOpen(false);
    };

    const [productOption, setProductOption] = useState();

    const handleProductOption = (res)=>{
        setProductOption(res.target.value);

    }


    //ifnd the product that has a matching proudciniv id with the slected id from the osze-dropdown
    const theSelectedSizeType = products?.productsArray?.filter(product => {
        // check if the product has at least one inventory with the matching ID
        return product.productinventories.filter(inv => inv.id === productOption);
      });




    let theJsx = "";

    if(cartData && cartData?.productinventories && Array.isArray(cartData?.productinventories)){

       theJsx = <select className='size-dropdown'
                    onChange={(res)=>{handleProductOption(res)}}
                 >
                        
                    {
                        cartItem?.productinventories?.map((res, index)=>{
                            return(
                                
                                    <option  value={res?.id}>{res?.inventoryType}</option>
                                
                            )})      
                            
                    }
                </select>

    }else{
       theJsx =  <div>No Data</div>
    }



    //states for mini cart open and close
    const [openModal, setOpenModal] = useState(false);
    
     //find only the selected/chosen inventoryType/size and display the sku & price
     const skuandpricefromtheSelectedSizeType = cartData?.productinventories.filter(inv => inv.id === parseInt(productOption && productOption));

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
    <div className='product-main-div'>

        <div className='our-range-div'>
            NEW PRODUCTS
        </div>

            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
                {
                    products && products?.productsArray.map((res, index)=>{

                        return(
                            <Grid item xs={6}>
                                <Item onMouseOver={()=>{setOver(true); setProductIndex(index)}} 
                                        onMouseOut={()=>{setOver(false); setProductIndex(index)}}  key={index}>
                                    <div className='product-columns' 
                                        
                                    >

                                        <div>
                                            <img className='product-image' onClick={()=>takeToProductPage(res)} src={urlValidation(res.image) ? res.image : blank_image} alt={res.image}/>
                                        </div>

                                        <div className='product-name'>
                                            <span >{res.name}</span><br />
                                            <span>&#x20B9;{res?.productinventories[0]?.price}</span>
                                        </div>
                                    </div>
                                    
                                { over  && productIndex === index ? 
                                        <div className='add-to-cart-div'>
                                            <button className="add-to-cart-btn" onClick={ ()=>{modalAndDataHandler(res)}}>Add to Cart</button>
                                        </div>

                                        : <div className="add-to-cart-div blank-btn"></div>
                                    }

                                </Item>

                                
                            </Grid>
                        )
                    })       
                }             
            </Grid>

            <div className='load-more-div'>
                <button className="load-more-btn" onClick={ ()=>{getNextPageProducts()}}>Load More</button>
            </div>

            <div className='shop-all-div'>
                <button className="shop-all-btn" onClick={ ()=>{navigate("/shop")}}>SHOP ALL</button>
            </div>


            <div className='hr-div'>
                <hr className='hrline'/>
            </div>
           
    
            <div>
              <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
                fullWidth   
              >
                 
                <DialogContent className='main-pop-up-cart-div'>     
                    <div style={{marginBottom: "10px"}}>
                        <button className="close-btn" onClick={()=>setOpen(false)}>x</button>           
                    </div>
                    
                    <div className='parent-cart-div'>
                        <div className='cart-image-div'>
                            <img className="cart-image" src={cartData?.image} alt={cartData?.name} />
                        </div>

                        <div className='image-side-info-div'>
                            <div className='pet-food-sku-div'>
                                <div className="food-name">{cartData?.name}</div>
                                <div className='price'>&#x20B9;{skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.price}.0</div>
                                <div className='sku'>SKU: {skuandpricefromtheSelectedSizeType && skuandpricefromtheSelectedSizeType[0]?.sku}</div>
                            </div>
                        
                            <div className='dropdowns'>
                                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop:'10px'}}>
                                    <label>Size</label>
                                    {theJsx}
                                </div>

                                <div style={{display: 'flex', flexDirection: 'column', gap: '5px'}}>
                                    <label>Quantity</label>
                                    <input type="number" className='quantity' value={quantity} onChange={(e)=> setQuantity(e.trget.value)}  min="1" max="10"/>
                                </div>
                            </div>

                            <div className='add-to-cart-btn-cart-div'>
                                <button className='add-to-cart-button' onClick={()=>handleAddToCartData()}>Add to Cart</button>
                                <p className="view-more"  onClick={()=>takeToProductPage(cartData)}>View More Details</p>
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

            .add-to-cart-button{
                cursor: pointer;
                border: 1px solid #FFFFFF;
                border-radius: 2px;
                outline: none;
                background-color: #F88D58;
                color: #FFFFFF;
                margin-top: 25px;
                height: 38.1px;
            }

            .add-to-cart-btn-cart-div{
                display: flex;
                flex-direction: column;
                margin-top: 40px;
            }

            .view-more{
                font-size: 12px;
                color: black;
                text-decoration: underline;
                cursor: pointer;
            }

            .quantity{
                border: 1px solid grey;
                height: 20px;
                width: 50px;
            }

            .size-dropdown{
                border: 1px solid grey;
                height: 30px;
                width: 165px;
                
            }

            input[type=number]::-webkit-inner-spin-button {
                opacity: 1
            }

            .dropdowns{
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                gap: 10px;
            }

            .food-name{
                font-size: 25px;
                font-weight: 300;
            }

            .price{
                font-size: 20px;
                font-weight: 300;
            }

            .sku{
                color: grey;
                font-size: 12px;
            }

            .cart-image{
                width: 400px;
                height: 400px;
                float: left;
                
            }

            .parent-cart-div{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
            }


            .close-btn{
               
                border: 1px solid #57557D;
                border-radius: 2px;
                outline: none;
                float:right;
                width: 25px;
                height: 25px;
                background-color: white;
                color: #57557D;
            }


            .pet-food-sku-div, .dropdowns, .add-to-cart-btn-cart-div{
                margin: 15px 15px 15px 0px;
                
            }

            .pet-food-sku-div{
                display: flex;
                flex-direction: column;
                gap: 10px;
            }
            
      

      


            .hr-div{
                display: flex;
                justify-content: center;
                margin-top: 8px;
            }

            .hrline{
                width: 3.5%;
                opacity: 0.7;
                border-color: #3A3953;
                
                margin-top: 2%;
                text-align: center;

                border: none;
                border-top: 2px solid black;
                margin: 2% 0;
               
            }

            .shop-all-div{
                display: flex;
                justify-content: center;
                margin-top: 5%;
            }

            .shop-all-btn{
                height: 40px;
                width: 170px;
                border: 1px solid #3A3953;
                border-radius: 1px;
                background-color: rgb(255, 250, 245);
                color: #3A3953;
                font-size: 15px;
                justify-content: center;
                cursor: pointer;
                font-family: 'Roboto', sans-serif;
            }

            .load-more-div{
                cursor: ${pageNum === (products?.totalPages - 1) ? 'not-allowed': 'pointer'};
            }

            .load-more-btn{
                cursor: pointer;

                height: 40px;
                width: 150px;
                border: 1px solid #3A3953;
                border-radius: 1px;
                background-color: #3A3953;
                color: white;
                font-size: 15px;
                justify-content: center;
                pointer-events: ${pageNum === (products?.totalPages - 1) ? 'none': 'auto'};
                opacity: ${pageNum === (products?.totalPages - 1) ? 0.5 : 1};
                font-family: 'Roboto', sans-serif;
            }

            .add-to-cart-div{
              display: flex;
              justify-content: center;
              margin-top: 10px;
            }

            .add-to-cart-btn{
                cursor: pointer;
                height: 40px;
                width: 500px;
                border: 1px solid #3A3953;
                border-radius: 1px;
                background-color: #3A3953;
                color: white;
                font-size: 15px;
                justify-content: center;
                 
                font-family: 'Roboto', sans-serif;
            }

            .blank-btn{
                height: 40px;
                width: 500px;
                justify-content: center;
            }


            .product-main-div{
                background-color: rgb(255, 250, 245);
                background-image: none;
            }

            .product-name{
                color: #3A3953;
                font-size: 15px;
                font-family: 'Roboto', sans-serif;

            }

            .product-image{
                width: 500px;
                height: 500px;
                cursor: pointer;
            }

            .product-columns{
                display: flex;
                flex-direction: column;
                gap: 2;
            }

            
            .products-div{
                display: flex;
                flex-direction: row;
            }

            .main-products-div{
                display: flex;
                flex-direction: column;
                
            }
            
            .our-range-div{
                justify-content: center;
                text-align: center;
                height: 200px;
                color: #3A3953;
                font-size: 45px;
                font-weight: 400;
                font-family: 'Oswald', sans-serif;
            }

            `}</style>
    </div>
  )
}

export default ProductsListing