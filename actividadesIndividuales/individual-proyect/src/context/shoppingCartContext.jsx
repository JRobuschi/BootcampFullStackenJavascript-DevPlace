import { createContext, useContext, useState } from "react";
import { ShoppingCart } from "../components/cart/ShoppingCart";
import { useLocalStorage } from "../hooks/useLocalStorage";
const ShoppingCartContext = createContext({});

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  function getItemQuantity(idProduct) {
    return (
      cartItems.find((item) => item.idProduct === idProduct)?.quantity || 0
    );
  }

  function increaseCartQuantity(idProduct) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.idProduct === idProduct) == null) {
        return [...currItems, { idProduct, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.idProduct === idProduct) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(idProduct) {
    setCartItems((currItems) => {
      if (
        currItems.find((item) => item.idProduct === idProduct)?.quantity === 1
      ) {
        return currItems.filter((item) => item.idProduct !== idProduct);
      } else {
        return currItems.map((item) => {
          if (item.idProduct === idProduct) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function removeFromCart(idProduct) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.idProduct !== idProduct);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
