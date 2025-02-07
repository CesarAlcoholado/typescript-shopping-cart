import { Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';

type cartItemProps = {
  id: number;
  quantity: number
}

const CartItem = ({id, quantity}: cartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((item)=> item.id === id)
  if( item === null) return null

  return (
    <Stack direction="horizontal" gap={3}>
      <img src={item?.imgUrl} style={{objectFit: "cover", width: "125px", height: "75px"}}/>
    </Stack>
  )
}

export default CartItem