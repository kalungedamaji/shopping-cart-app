import styled from 'styled-components'

export const ProductWrapper = styled.div`
.card{
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;   
    border-bottom: 1px solid black;
    border-width: 1px; 
    padding: 15px;
    width: 75%;  
    margin-top: 40px;
    margin-left: 40px;
}

img{
    width: 150px;
    height: 160px;
}

.productImage{
    flex: 1;
}

.productInfo{
    flex: 2;
    align-self: left;
    margin-left: 30px;
}

.quantity{
    display: flex;
    width: 200px;
    align-items: center;
    flex-direction: row;  
    height: 30px; 
    gap: 0.5rem;
}


.removeButton{
    margin-top: 20px;
}

.productPrice{
    flex: 1;
    align-self: right;
}

.AlignRight{
    text-align: right;
}
`