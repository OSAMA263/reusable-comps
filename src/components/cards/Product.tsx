import { HiShoppingCart } from "react-icons/hi";
import Button from "../Button";
import Card from "../Card";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

export default function Product() {
  const { setActiveToast } = useContext(AppContext);

  return (
    <Card
      title="t-shirt or somthing"
      img="https://placehold.co/600x400/png"
      description="this is the description for the porduct"
      footer={
        <Button
          variant="light"
          onClick={() =>
            setActiveToast((prev) => ({
              ...prev,
              active: true,
              text: "producted added",
              status: "success",
              direction: ["top", "right"],
            }))
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
