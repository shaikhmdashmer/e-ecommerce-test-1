import React, { useEffect, useState } from 'react'
import "./productDetails.css"
import { useLocation,useHistory } from "react-router-dom";
import * as QueryString from "query-string"
import {Row,Col,Image, Container, Button} from "react-bootstrap";
import { useDispatch, useSelector } from 'react-redux';

export const ProductDetails = () => {
    const history = useHistory();
    const [selectedProduct, setSelectedProduct]=useState();
    const params = QueryString.parse(useLocation().search);
    const dispatch= useDispatch();

    const {products, productsQty} = useSelector(state=>state.ProductReducer);
    const handleAddToCart=()=>{
        dispatch({type:"ADD_PRODUCT", item:productsQty+1})
    }
    useEffect(()=>{
        const product = products.filter(item=>item.id==params.productId);
        setSelectedProduct(product);
        
    },[params.productId, products])
    return (
        <>
            {selectedProduct && selectedProduct.map(item => (
                <React.Fragment>
                   
            <h2 className="hadding-2">Product Details</h2>
            
                         <div className="Details-page">
                             <Image className="Datail-image" src={item.image} />
                             <div className="Details-content">
                                <h2 className="detai-tital">
                             {item.name} </h2>
                         <p className="detaim-data">{item.desc }</p>
                      
                            <div className="Details-buttons" >
                                
                                     <Button variant="dark" className="detail-text" onClick={handleAddToCart}>Add to Cart</Button><p></p>
                        <Button variant="dark " onClick={e=>history.push('/')}> Back TO Home</Button>
 
                      </div>
                       
                            </div>
                                                    
                             
                        </div>
                         
                        
                      
                      
                       
                      
                      </React.Fragment>
                 )
                 )}
                 
                 
                 
        </>
    )
}
