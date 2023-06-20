import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'
import styled from 'styled-components'
import mobile from "../Pages/Register"

const Container = styled.div`
   height:60vh;
   background: #fcf5f5;
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
`;
const Title = styled.h1`
 font-size: 70px;
 margin-bottom: 20px;
`;
const Description = styled.div`
  font-size:24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}

`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
    ${mobile({ width: "80%" })}

`;
const Input = styled.input`
  border: none; 
  flex: 8;
  padding-left: 20px;
`;
const Button = styled.button`
  flex: 1;
  border: none;
  
`;
const Newsletter = () => {
   return (
      <Container>
         <Title>Newsletter</Title>
         <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, a.</Description>
         <InputContainer>
            <Input placeholder='Your email' />
            <Button>
               <AiOutlineSend />
            </Button>
         </InputContainer>
      </Container>
   )
}

export default Newsletter