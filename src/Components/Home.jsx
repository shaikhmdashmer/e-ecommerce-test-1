import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProduct } from "../state/selectors/ProductSelector";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
            <header className="heading">E-commerce-app: {productsQty}
            < ShoppingCartIcon className="icon-styl"/>
            </header>
            
         {products && products.map((items)=>(
             <ProductList currentitem={items}/>
         ))}
         
        </div>
    );
}