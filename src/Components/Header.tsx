import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header = () => {
  const cartData: any = useSelector(
    (state: RootState) => state.addToCart.products
  );

  return (
    <header className="bg-white shadow-md w-full">
      <div
        className=" mx-auto px-4 py-4 flex justify-between items-center"
        style={{ background: "rgb(204 229 255)" }}
      >
        <h1 className="text-2xl font-bold text-blue-600">
          <Link to="/" className="hover:text-blue-600">
            🛒 My Store
          </Link>
        </h1>
        <nav className="space-x-4">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/cart" className="hover:text-blue-600 relative">
            Cart
            <span className="text-red font-extra-bold absolute -top-2">
              {cartData?.length ? cartData?.length : ""}
            </span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
