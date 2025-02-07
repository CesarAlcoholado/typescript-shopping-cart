import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import CartItem from "./CartItem";

type Props = {
  isOpen: boolean;
};

const ShoppingCart = ({isOpen}:Props) => {
  const { closeCart, cartItems } = useShoppingCart();

  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item, index)=> <CartItem key={index} {...item}/>)}
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart