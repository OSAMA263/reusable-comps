import { HiShoppingCart } from "react-icons/hi";
import Button from "../Button";
import Card from "../Card";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Product() {
  const context = useContext(AppContext);
  if (!context)
    throw new Error(
      "AppContext is undefined. Make sure Product is wrapped in AppProvider."
    );
  const { setActiveToast } = context;

  return (
    <Card
      title="t-shirt or somthing"
      img="https://placehold.co/600x400/png"
      description="this is the description for the porduct"
      footer={
        <Button
          variant="light"
          onClick={() =>
            setActiveToast({
              active: true,
              text: "Product added!",
              status: "success",
              direction: ["top", "center"],
              duration: 2000,
            })
          }
          styles={{ backgroundColor: "#1b2d2f" }}
          icon={HiShoppingCart}
        >
          add to cart
        </Button>
      }
    />
  );
}
