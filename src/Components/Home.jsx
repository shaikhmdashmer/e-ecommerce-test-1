import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../state/selectors/ProductSelector";

import "./home.css";
import { ProductList } from "./ProductList";
export const Home = ()=>{
    const [products,setProducts]=useState();
    const selector = useSelector(getAllProduct);
    
  const {productsQty} = useSelector(state=>state.ProductReducer);
    useEffect(()=>{
        setProducts(selector)
    },[selector])
   
    return(
        <div>
            <header className="heading-2">E-commerce</header>
            <header className="heading">Cart items: {productsQty}
            
            </header>
            
         {products && products.map((items)=>(
             <ProductList currentitem={items}/>
         ))}
         
        </div>
    );
}