interface DisplayProductProps{
    productName: string,
    producrDescription: string,
    productPrice: string
}

function DisplayProduct(props:DisplayProductProps){
  return(
    <div>
        <h5>{props.productName}</h5>
        <h6>{props.producrDescription}</h6>
        <h3>{props.productPrice}</h3>
    </div>
  );
}

export default DisplayProduct;