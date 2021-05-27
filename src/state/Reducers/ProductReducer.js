 const initialState = {
products :[{
    image : "Assets/Sofa-1.jpeg",
    name : "Classroom Furniture ",
    desc: `"MUEBLES CASA Jordan Fabric 6 Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa 
     Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
      Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa (Finish Color - Cherry Colour)"`,
    price : 39999,
    id : 1
},{
    image : "Assets/Sofa-2.jpeg",
    name : "Curve Slash Furniture ",
    desc: `"MUEBLES CASA Mind Cedar Leatherette 3 Seater Sofa 
     Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
      Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa (Finish Color - Cherry Colour) ."`,
    price : 12000,
    id : 2
},{
    image : "Assets/Sofa-3.jpeg",
    name : " Bassett Home Furnishings ",
    desc: `"ELTOP Lifestyle  Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa  Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
     Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa "`,
    price : 30000,
    id : 3
},{
    image : "Assets/sofa-4.jpeg",
    name : "American Signature ",
    desc: `" Bharat Lifestyle Lexus Fabric 3 + 1 + 1   Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
     Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
      Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater SofaDark Grey Sofa  ."`,
    price : 17000,
    id : 4
},{
    image : "Assets/Sofa-5.jpeg",
    name : "American Furniture  ",
    desc: `"Bharat Lifestyle Lexus Fabric 3 + 1 + 1  Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa
     Seater Sofa  (Finish Color - Beige & Brown)Leatherette 3 Seater Sofa Dark Grey Sofa "`,
    price : 5000,
    id : 5

}],
productsQty:0,
}

const ProductReducer = (state= initialState,action)=>{
    switch (action.type){
        case "SET_PRODUCT":
            return{
                ...state, products:[...state.products,action.item]
            }
        case "ADD_PRODUCT":
            return{
                ...state, productsQty:action.item
            }
            default:
                return state;
    }
   
}
export default ProductReducer;
