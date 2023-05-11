import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import numberWithCommas from '../util/covertPrice'
import productData from "../assets/fake-data/products";
import Helmet from '../components/Hemet'
import CartItem from "../components/CartItem";
import Button from '../components/Button';
function Cart() {
  const cartItems = useSelector((state) => state.cartItems.value);
  const [cartProduct, setCartProduct] = useState(productData.getCartItemsInfo(cartItems));
  const [totalProduct, setTotalProduct] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
useEffect(()=>{
    setCartProduct(productData.getCartItemsInfo(cartItems))
    setTotalProduct(cartItems.reduce((total,item)=> total + Number(item.quantity),0))
    setTotalPrice(cartItems.reduce((total,item)=> total + (Number(item.quantity) * Number(item.price)),0))
},[cartItems])
  return (
   <Helmet title="Giỏ hàng">
     <div className="cart">
      <div className="cart__info">
        <div className="cart__info__txt">
          <p>Bạn đang có {totalProduct} sản phẩm trong giỏ hàng</p>
          <div className="cart__info__txt__price">
            <span>Thành tiền:</span>
            <span>{numberWithCommas(Number(totalPrice))}</span>
          </div>
        </div>
        <div className="cart__info__btn">
          <Button primary>
Đặt hàng 
          </Button>
          <Button primary>Tiếp tục mua hàng</Button>
        </div>
      </div>
      <div className="cart__list">
        {cartItems.map((item,index) => (
           <CartItem key={index} item={item}/>
        ))}
      </div>
    </div>
   </Helmet>
  );
}

export default Cart;
