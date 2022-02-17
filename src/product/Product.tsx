interface ProductProps{
    productName: string,
    productDescription: string,
    productPrice: string
}

const Product:React.FC<ProductProps>=(productProps)=>{
  return(
    <div>
        <h5>{productProps.productName}</h5>
        <h6>{productProps.productDescription}</h6>
        <h3>{productProps.productPrice}</h3>
    </div>
  );
}

export default Product;