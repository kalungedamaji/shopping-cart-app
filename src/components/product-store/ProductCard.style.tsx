import styled from 'styled-components'

export const ProductWrapper = styled.div`
.Card {
display: flex;
flex-direction: column;    
justify-content: space-between;
border: 1px solid black;
padding: 15px;
  min-height: 400px;
} 

.Flex{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
img{
    max-width: 200px;
    max-height: 250px;
    padding-left: 80px;
}
`