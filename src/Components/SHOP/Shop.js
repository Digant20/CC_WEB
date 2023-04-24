import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgb(255, 250, 245)',
  ...theme.typography.body2,
  padding: theme.spacing(4),
  textAlign: 'center',
  boxShadow: 'none',
  color: theme.palette.text.secondary,
}));



const Shop = () => {

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
                                    <img src={res.image} className='product-image-shop' alt={res.image}/>
                                </div>

                                <div className='product-name-shop'>
                                    <span >{res.name}</span><br />
                                    <span>&#x20B9;{res?.productinventories[0]?.price}</span>
                                </div>
                            </div>
                                                    
                                <div className='add-to-cart-div-shop'>
                                    <button className="add-to-cart-btn-shop" onClick={ ()=>{window.alert("btn clicked")}}>Add to Cart</button>
                                </div>  

                        </Item>

                        
                    </Grid>
                )
            })       
        }             
    </Grid>

 
   

    <style jsx>{`
   

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