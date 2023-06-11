import CartDisplayProduct from "./cart-display-product/CartDisplayProduct";
import { useEffect, useState } from "react";
import "./CartPage.css";
import { Link, NavLink, json } from "react-router-dom";
import {
  getCart,
  removeItemFromCart,
  addOrderArr,
} from "./cart-display-product/useHandleCart";
import { Modal } from "@chakra-ui/react";
import { Scroller } from "./scroller";


function CartPage(props) {
  const cartItemst = getCart();
  

  const [cartItems, setCartItems] = useState(getCart() || []);
  const [cartItemsCount, setCartItemsCount] = useState(cartItemst.length);
  const [totalPrice, setTotalPrice] = useState(0);

  const [address, setAddress] = useState(
    JSON.parse(localStorage.getItem("userAddress")) || {
      address: "",
      locality: "",
      city: "",
      state: "",
      pincode: "",
      landmark: "",
      isthere: false,
    }
  );

  const [open, setOpen] = useState(false);
  const [orderPlaceOpen, setOrderPlaceOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOrderOpen = () => {
    setOrderPlaceOpen(true);
  };

  const handleOrderClose = () => {
    setOrderPlaceOpen(false);
  };

  function handleRemove(id) {
    removeItemFromCart(id);
    setCartItems(getCart);
    setCartItemsCount(getCart().length);
  }

  const handleOrder = () => {
    localStorage.setItem("total",JSON.stringify(totalPrice))
  
  };
  function calculateTotalPrice() {
    let total = 0;
    // setCartItems(getCart());
    cartItems.forEach((item) => {
      total += +((item.quantity)||1) * +item.price;
    });
    setTotalPrice(total);
  }

  useEffect(() => {
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <>
      <div className="cart-page" >
        <div className="cart-page-left">
          <div className="cart-page-left-header">
            <h1>My Cart({cartItems.length})</h1>
            
          </div>

          {/* Map items here */}
          {cartItems.length? cartItems.map((item) =>
          <CartDisplayProduct
                key={item.id}
                id={item.id}
                name={item.name}
                image={item.image}
                price={+item.price}
                rating={item.rating}
                quantity={1}  
                discount={item.discount}
                handleRemove={handleRemove}
                setCartItems={setCartItems}
              />
            
          ):<h1>No Items in cart</h1> }
        </div>

        
        <div className="cart-page-right">
          <h1 className="cart-price-details">PRICE DETAILS</h1>
          <hr className="plane-hr" />
          <div className="cart-price">
            <h1>Price ({cartItems.length})</h1>
            <h1>₹{+totalPrice}</h1>
          </div>
          <div className="cart-discount">
            <h1>Discount</h1>
            <h1 className="disc">-₹{totalPrice?25:0}</h1>
          </div>
          <div className="cart-delivery-charges">
            <h1>Delivery Charges</h1>
            <h1 className="disc">₹ {totalPrice?33:0}</h1>
          </div>

          <hr className="dashed-hr" />
          <div className="cart-total">
            <h1 className="total-amt">Total Amount</h1>
            <h1>₹{totalPrice?totalPrice+8:0}</h1>
          </div>
          <div className="place-order-div">
            <NavLink to="/payment">
              <button onClick={handleOrder} className="place-order">
                Place Order
              </button>
            </NavLink>
          </div>
        </div>
      </div>
     <div><Scroller  /></div>
    </>
  );
}

export default CartPage;

//https://onemg-database.onrender.com/cart/cart


// {
  // "_id": "64553b2ff15f9ec53e7c77cf",
  // "image": "https://rukminim1.flixcart.com/image/612/612/xif0q/vitamin-supplement/b/2/z/90-salmon-fish-oil-omega-3-capsule-1000-mg-with-epa-180mg-and-original-imaghhwh67puse6s.jpeg?q=70",
  // "title": "CF Salmon Fish Oil Omega 3 Capsule 1000 mg with EPA 180...",
  // "price": 695,
  // "rating": 4.4,
  // "discount": 31,
  // "category": "supplement"
// },

