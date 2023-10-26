import { gql } from '@apollo/client';

export const GET_ALL_PRODUCTS = gql(`
   query {
    getAllProducts {
    id, title, price
  }
}
`);

export const GET_CART_BY_ID = gql(`
  query getCart($id: ID) {
   getCart(id: $id) {
    id, title, price
   }
}
`);
