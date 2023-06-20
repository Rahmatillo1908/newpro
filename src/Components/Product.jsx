import React from 'react'
import styled from 'styled-components'
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai"

const Info = styled.div`
   width:100%;
   opacity:0;
   height: 100%;
   position: absolute;
   top: 0px;
   left: 0px;
   background: rgba(0,0,0,.2);
   z-index: 3;
   display: flex;
   align-items: center;
   justify-content: center;
   transition: all 0.5s ease;
   cursor: pointer;
`;


const Container = styled.div`
   flex:1;
   margin:5px;
   min-width: 280px;
   height:350px;
   display: flex;
   align-items: center;
   justify-content:center;
   background: #f5fbfd ;
   position: relative;

   &:hover ${Info} {
      opacity: 1;
   }
`;
const Circle = styled.div`
   width:200px;
   height:200px;
   border-radius: 50%;
   background: white;
   position:absolute;
`;
const Image = styled.img`
   height:75%;
   z-index:2;
`;

const Icon = styled.div`
  width:40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin:10px;
  transition: all 0.5s ease;

  &:hover{
   background: #e9f5f5;
   transform: scale(1.1)
  }
`;

const Product = ({ item }) => {
   return (
      <Container>
         <Circle />
         <Image src={item.img} />
         <Info>
            <Icon>
               <AiOutlineShoppingCart />
            </Icon>
            <Icon>
               <AiOutlineSearch />
            </Icon>
            <Icon>
               <AiOutlineHeart />
            </Icon>
         </Info>
      </Container>
   )
}

export default Product