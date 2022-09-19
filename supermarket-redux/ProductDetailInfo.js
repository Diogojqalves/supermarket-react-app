import Button from "./Button.js";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetailInfo(props) {
  const { product } = props;
  const dispatch = useDispatch();
  const onProductAdd = () => {
    // TODO: use redux action
    dispatch(addProduct(product));
  };

  return (
    <>
      <p>
        {product.description} sold at <strong>${product.price}</strong> per
        piece.
      </p>
      <Button onClick={() => onProductAdd()}>${product.price}</Button>
    </>
  );
}
