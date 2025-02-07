import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from '../data/items.json';
import { formatCurrency } from "../utilities/formatCurrency";

type cartItemProps = {
  id: number;
  quantity: number
}

const CartItem = ({id, quantity}: cartItemProps) => {

  const { removeFromCart } = useShoppingCart()
  const item = storeItems.find((item)=> item.id === id) || null
  if( item === null) return null

  return (
    <Stack className="d-flex align-items-center" direction="horizontal" gap={3}>
      <img src={item?.imgUrl} style={{objectFit: "cover", width: "125px", height: "75px"}}/>
      <div className="me-auto">
        <div>
          {item?.name} {quantity > 1 ? <span className="text-muted" style={{fontSize: ".65rem"}}>x{quantity}</span> : null}
        </div>
      <div className="text-muted" style={{fontSize: ".75rem"}}>
        {formatCurrency(item?.price)}
      </div>
      </div>
      <div>
        {formatCurrency(item?.price * quantity)}
      </div>
      <Button variant="outline-danger" size="sm" onClick={()=> removeFromCart(id)}>&times;</Button>
    </Stack>
  )
}

export default CartItem