import AddToCartButton from '../add-to-cart-button/add-to-cart-button';
import {
  Container,
  InnerContainer,
  InnerTop,
  InnerBottom,
  Name,
  Brand,
  Price,
  Quantity,
  Spacing,
  Underline,
} from './addToCart.styles';
import QuantityStepper from '../quantity-stepper/quantity-stepper';

const AddToCartBox = ({brand, name, price}) => {
  return (
    <>
      <Container>
        <InnerContainer>
          <InnerTop>
            <Brand>{brand}</Brand>
            <Name>{name}</Name>
            <Price>${price}</Price>
          </InnerTop>
          <Underline />
          <InnerBottom>
            <Quantity>Quantity</Quantity>
            <QuantityStepper />
          </InnerBottom>
            <Spacing>
              <AddToCartButton />
            </Spacing>
        </InnerContainer>
      </Container>
    </>
  );
};

export default AddToCartBox;
