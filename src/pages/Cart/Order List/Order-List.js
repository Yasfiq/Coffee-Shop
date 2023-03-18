import { useSelector } from "react-redux";
import OrderItem from "./Order Item/Order-Item";

const OrderList = () => {
  const { getOrderResult, getOrderLoading, getOrderError } = useSelector(
    (state) => state.orderReducer
  );

  return (
    <>
      {getOrderResult
        ? getOrderResult.Data.map((order) => {
            return (
              <>
                <OrderItem
                  image={`https://res.cloudinary.com/dcf12mtca/image/upload/v1678543339/${order.product_image}.webp`}
                  productname={order.productname}
                  quantity={order.quantity}
                  size={order.size}
                  total_price={order.total_price}
                />
              </>
            );
          })
        : getOrderLoading}
    </>
  );
};

export default OrderList;
