import { Col, Row } from "react-bootstrap";
import storeItems from "../../data/items.json";

type Props = {}

const Store = (props: Props) => {
  return (
    <>
      <div>Store</div>
      <Row>
        {storeItems.map((item, index)=> (
          <Col key={index}>{JSON.stringify(item)}</Col>
        ))}
      </Row>
    </>
  );
}

export default Store