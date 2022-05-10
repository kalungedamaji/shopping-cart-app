import styled from 'styled-components'

export const OrderWrapper = styled.div`
.Card {
  display: flex;
  flex-direction: column;    
  justify-content: space-between;
  border: 1px solid black;
  padding: 15px;
  margin-left: 20px;
  padding-bottom: 0px;
  
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
    padding-top: 10px;
    padding-bottom: 10px;
}
  .OrderHeader{
    padding: 10px;
    color: white;
    background-color: darkgray;
  }
`