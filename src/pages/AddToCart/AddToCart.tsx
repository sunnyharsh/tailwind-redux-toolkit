import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { addToCart } from "../../features/addToCart/addCartSlice";

const AddToCart = () => {
  const cartData: any = useSelector(
    (state: RootState) => state.addToCart.products
  );
  const [cartItems, setCartItems] = useState<any>(cartData);

  const updateQuantity = (id: any, amount: any) => {
    setCartItems((prev: any) =>
      prev?.map((item: any) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };
  const dispatch = useDispatch();
  const removeItem = (id: any) => {
    const filterCartItem = cartItems.filter((item: any) => item.id !== id);
    setCartItems(filterCartItem);
    dispatch(addToCart(filterCartItem));
  };

  const total = cartItems.reduce(
    (sum: any, item: any) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 h-[calc(100vh-80px)]">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div>
          <p className="text-center text-gray-500">Your cart is empty.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2 space-y-6">
            {cartItems.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-4 border border-gray-300 bg-gray-50 rounded-lg shadow-sm"
              >
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="w-8 text-center">
                    {item.quantity ? item.quantity : 1}
                  </span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                    onClick={() => updateQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${item.price * item.quantity}</p>
                  <button
                    className="text-sm text-red-500 hover:underline mt-1"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-sm h-fit">
            <h2 className="text-xl font-bold mb-4">Summary</h2>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-lg border-t pt-2">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <button className="w-full mt-6 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCart;
