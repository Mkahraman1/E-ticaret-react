import { useState } from "react";
import { FaMoon, FaSun, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

import logo from "../images/Logo.png";
import "../css/header.css";

function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + (item.quantity || 1),
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0
  );

  const changeMode = () => {
    const newDarkMode = !darkMode;

    setDarkMode(newDarkMode);

    document.body.style.backgroundColor = newDarkMode
      ? "#111827"
      : "#f9fafb";
  };

  return (
    <header>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col items-center">
          <img
            className="max-h-15 max-w-15"
            src={logo}
            alt="E-Ticaret logosu"
          />

          <p
            className={
              darkMode
                ? "font-semibold text-white"
                : "font-semibold text-gray-900"
            }
          >
            Kahraman A.Ş
          </p>
        </div>

        <div className="flex flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Ürün ara..."
            className="w-64 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
          />

          <button type="button" onClick={changeMode}>
            {darkMode ? (
              <FaSun className="icon" />
            ) : (
              <FaMoon className="icon" />
            )}
          </button>

          <div className="relative">
            <button
              type="button"
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative"
            >
              <FaShoppingCart className="icon" />

              {totalQuantity > 0 && (
                <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-bold text-white">
                  {totalQuantity}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 top-12 z-50 w-80 rounded-lg bg-white p-4 shadow-lg">
                <h2 className="mb-4 text-lg font-bold text-gray-900">
                  Sepet
                </h2>

                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    Sepetiniz boş.
                  </p>
                ) : (
                  <>
                    <div className="flex max-h-80 flex-col gap-3 overflow-y-auto">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center gap-3 border-b pb-3"
                        >
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-14 w-14 object-contain"
                          />

                          <div className="flex-1">
                            <p className="line-clamp-1 text-sm font-semibold text-gray-900">
                              {item.title}
                            </p>

                            <p className="text-sm text-gray-500">
                              Adet: {item.quantity || 1}
                            </p>

                            <p className="text-sm font-bold text-gray-900">
                              {item.price} $
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 border-t pt-4">
                      <div className="flex items-center justify-between">
                        <span className="font-semibold text-gray-700">
                          Toplam:
                        </span>

                        <span className="text-lg font-bold text-gray-900">
                          {totalPrice.toFixed(2)} $
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;