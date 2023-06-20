import React from 'react'
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineTwitter } from 'react-icons/ai'
import { BsPinterest } from "react-icons/bs"
import styled from 'styled-components'
import { MdOutlineRoom } from "react-icons/md"
import { mobile } from "../responsive";

const Container = styled.div`
display:flex;
  ${mobile({ flexDirection: "column" })}

`
const Left = styled.div`
   flex:1;
`
const Logo = styled.h1``;
const Desc = styled.p`
   margin:20px 0px;
   
`;
const SocialContainer = styled.div`
   display:flex;

   `;
const SocialIcon = styled.div`
   width:40px;
   height:40px;
   color:white;
   border-radius:50%;
   background:#${props => props.color};
   display:flex;
   align-items:center;
   justify-content:center;
   margin-right:20px;
   `;
const Center = styled.div`
   padding:20px;
   flex:1;
     ${mobile({ display: "none" })}
   `;
const Title = styled.h3`
   margin-bottom: 30px;
   `;
const List = styled.ul`
   margin:0px;
   padding:0;
   list-style:none;
   display:flex;
   flex-wrap:wrap;
   `;

const ListItem = styled.div`
   width:50%;
   margin-bottom:10px;
   `;
const Right = styled.div`
   flex:1;
   padding: 20px;
     ${mobile({ backgroundColor: "#fff8f8" })}
   `;

const ContactItem = styled.div`
   margin-bottom: 20px;
   display:flex;
   align-items: center;
   `;

const Payment = styled.img`
   width:50%;
   `
const Footer = () => {
   return (
      <Container>
         <Left>
            <Logo>LOGO</Logo>
            <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque dolorem libero blanditiis ratione similique natus sunt voluptates dicta voluptate quia reprehenderit facilis, corporis aspernatur ullam veritatis asperiores iusto laboriosam quae?</Desc>
            <SocialContainer>
               <SocialIcon>
                  <AiOutlineFacebook color='385999' />
               </SocialIcon>
               <SocialIcon>
                  <AiOutlineInstagram color='e4405f' />
               </SocialIcon>
               <SocialIcon>
                  <AiOutlineTwitter color='55acee' />
               </SocialIcon>
               <SocialIcon>
                  <BsPinterest color='e60023' />
               </SocialIcon>
            </SocialContainer>
         </Left>
         <Center>
            <Title>
               Useful
            </Title>
            <List>
               <ListItem>Home</ListItem>
               <ListItem>Cart</ListItem>
               <ListItem>Man Fashion</ListItem>
               <ListItem>Woman Fashion</ListItem>
               <ListItem>Accessories</ListItem>
               <ListItem>My Account</ListItem>
               <ListItem>Order Tracking</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Wishlist</ListItem>
               <ListItem>Terms</ListItem>
            </List>
         </Center>
         <Right>
            <Title>Contact</Title>
            <ContactItem> <MdOutlineRoom style={{ marginRight: "10px" }} />
               Fergana , Kokand
            </ContactItem>
            <ContactItem> <AiOutlinePhone style={{ marginRight: "10px" }} />
               +998 90 343 45 90
            </ContactItem>
            <ContactItem> <AiOutlineMail style={{ marginRight: "10px" }} />
               rahmatillo722022@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
         </Right>
      </Container>
   )
}

export default Footer