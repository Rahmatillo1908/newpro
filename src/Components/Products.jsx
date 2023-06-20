import React from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import Product from './Product'


const Container = styled.div`
   padding:20px;
   display:flex;
   flex-wrap:wrap;
   justufy-content:space-between;
   `;
// position:relative;
const Products = () => {
   return (
      <Container>
         {popularProducts.map(item => (
            <Product item={item} key={item.id} />
         ))}
      </Container>
   )
}

export default Products