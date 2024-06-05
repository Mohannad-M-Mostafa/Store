import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FormatCurrency from "./FormatCurrency"; //$
//Passing data in cart
const StoreItem = ({ id, name, price, imgUrl }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();
  
  const quantity = null; //loop to Count the number of added items
  return (
    <Card className="h-100">
      <Card.Img //Used by Data Structure from Jason
        variant="top"
        src={imgUrl}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
          <span className="fs-2">{name}</span>
          <span className="ms-2 text-muted">{FormatCurrency(price)}</span>
        </Card.Title>

        <div className="mt-auto">
     
            <Button className="w-80" >
              Add To Cart
            </Button>
        
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
