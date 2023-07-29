import styled from 'styled-components'

export const ProductImage = styled.img`
  border-radius: 20px;
  width: 100%;
  height: 100%;
  margin-top: 5%;
`;

export const Container = styled.div`
  height: 100vh;
  display: grid;
  justify-items: center;
`;

export const InnerContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 42px;
  width: 80%;
  justify-items: center;
  row-gap: 10px;
`;

