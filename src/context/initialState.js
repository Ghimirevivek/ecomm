const fetchLocalStorage = () => {
  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user'))
      : localStorage.clear();
  return userInfo;
};

const fetchCart = () => {
  const cartInfo =
    localStorage.getItem('cartItems') !== 'undefined'
      ? JSON.parse(localStorage.getItem('cartItems'))
      : localStorage.clear();

  return cartInfo ? cartInfo : [];
};

const userInfo = fetchLocalStorage();
const cartInfo = fetchCart();

export const initialState = {
  user: userInfo ? userInfo : null,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
