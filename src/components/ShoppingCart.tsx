import { Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";
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
          <div className="ms-auto fw-bold fs-5 ">
            Total {formatCurrency(cartItems.reduce((total, cartItem)=> {
              const item = storeItems.find((item) => item.id === cartItem.id) || null;
              return total + (item?.price || 0) * cartItem.quantity
            }, 0))}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart