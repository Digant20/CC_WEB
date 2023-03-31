import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import blank_image from "../../../Assets/images/blank_image.webp";
import { validateImage } from "image-validator";






const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgb(255, 250, 245)',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    boxShadow: 'none',
    color: theme.palette.text.secondary,
  }));



const ProductsListing = () => {

    const [products, setProducts] = useState();

    const productApi = "http://ecom.apprikart.com/cc/api/pagination/products?limit=2&page=0";

    //jwt token
    const jwtToken ='Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIrOTEgODE5Nzc0Njc3NCIsImF1dGgiOiJST0xFX1VTRVIiLCJ0ZW5hbnQiOiI4OTg5ODEiLCJleHAiOjE3MDY0MzcxNzZ9.RKy10Jq0JZ-0mCnEhrErm2wBDSfYPdXjdVMEPWKAt18-WFm55glBTGuNilpWPxFJCalmXiYhgc1CcetHnFILJw';

   
    const headerObject =   useMemo( ()=>{
                                return( {
                                    'Authorization': jwtToken,
                                    'Accept' : '*/*',
                                    'Content-Type': 'application/json',
                                    'App-Token' : 'A14BC'
                                    }
                                 )
                            },[])


    useEffect( ()=>{

      axios.get(productApi, {headers: headerObject})
            .then( (res)=>{

              setProducts(res.data.data);

              console.log("products: ", res.data.data.product);

            }).catch((error)=>{console.log(error.message)})

    }, [headerObject])


    const urlValidation = async (url) => {
        const isValidImage = await validateImage(url);
        console.log(isValidImage);
       return isValidImage;
      };


      let [over,setOver]=React.useState(false);
      let [productIndex, setProductIndex] =useState()

  return (
    <div className='product-main-div'>

        <div className='our-range-div'>
            NEW PRODUCTS
        </div>


        
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
              
                {
                    products?.product.map((res, index)=>{

                        return(
                            <Grid item xs={6}>
                                <Item onMouseOver={()=>{setOver(true); setProductIndex(index)}} 
                                        onMouseOut={()=>{setOver(false); setProductIndex(index)}}  key={index}>
                                    <div className='product-columns' 
                                        
                                    >

                                        <div>
                                            <img className='product-image' src={urlValidation(res.image) ? res.image : blank_image} alt={res.image}/>
                                        </div>

                                        <div className='product-name'>
                                            <span >{res.name}</span><br />
                                            <span>&#x20B9;{res?.productinventories[0]?.price}</span>
                                        </div>
                                    </div>
                                    
                                { over  && productIndex === index ? 
                                        <div className='add-to-cart-div'>
                                            <button className="add-to-cart-btn" onClick={ ()=>{window.alert("btn clicked")}}>Add to Cart</button>
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
                <button className="load-more-btn" onClick={ ()=>{window.alert("btn clicked")}}>Load More</button>
            </div>

            <div className='shop-all-div'>
                <button className="shop-all-btn" onClick={ ()=>{window.alert("btn clicked")}}>SHOP ALL</button>
            </div>


            <div className='load-more-div'>
                <hr className='hrline'/>
            </div>
           
    
        
                
        


            <style jsx>{`

            .hrline{
                width: 3.5%;
                opacity: 0.7;
                border-color: #3A3953;
                margin-top: 2%;
                text-align: center;
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
                display: flex;
                justify-content: center;
                margin-top: 8px;
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