import { useEffect, useState } from "react";
import sampleProducts from "../../data/product.json";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/addToCart/addCartSlice";
import { Link } from "react-router-dom";
import Product from "../../Components/Product";
import "./home.css";
import { RootState } from "../../app/store";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const [cart, setCart] = useState<any>([]);
  const [productData, setProductData] = useState<any>([]);
  const cartProduct: any = useSelector(
    (state: RootState) => state.addToCart.products
  );
  useEffect(() => {
    if (productData.length <= 0) setProductData(sampleProducts);
  }, []);

  const addToCartEvent = (product: any, index: number) => {
    let cartData: any = [...cartProduct, { ...product, quantity: 1 }];
    // setCart(cartData);
    dispatch(addToCart(cartData));

    const updatedProducts = productData.map((obj: any, i: number) =>
      i === index ? { ...obj, selected: true } : obj
    );
    setProductData(updatedProducts);
  };
  console.log(productData, "+++++");
  return (
    <div className="h-[calc(100vh-80px)]">
      <div className="flex">
        <div className="w-1/6 bg-gray-100 has-[]: shadow-lg link-container">
          <div>
            <Link to="/under consuntraction">Item 01</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 02</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 03</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 04</Link>
          </div>{" "}
          <div>
            <Link to="/under consuntraction">Item 05</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 06</Link>
          </div>{" "}
          <div>
            <Link to="/under consuntraction">Item 07</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 08</Link>
          </div>{" "}
          <div>
            <Link to="/under consuntraction">Item 09</Link>
          </div>
          <div>
            <Link to="/under consuntraction">Item 10</Link>
          </div>
        </div>
        <Product productData={productData} addToCartEvent={addToCartEvent} />
      </div>
    </div>
  );
};

export default ProductsPage;
