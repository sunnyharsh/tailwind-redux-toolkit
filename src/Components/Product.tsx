import { Link } from "react-router-dom";

const Product = ({ productData, addToCartEvent }: any) => {
  
  return (
    <div className="bg-gray-100 h-[calc(100vh-80px)] overflow-x-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
        {productData.map((product: any, index: number) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
            {!product.selected ? (
              <button
                onClick={() => addToCartEvent(product, index)}
                className="mt-4 bg-blue-600 text-black px-4 py-2 rounded-xl hover:bg-blue-700 transition border border-[#afafe4] bg-[#dfdfff]"
              >
                Add To Cart
              </button>
            ) : (
              <Link to="/cart" className="hover:text-blue-600 relative">
                <button className="mt-4 bg-blue-600 text-black px-4 py-2 rounded-xl hover:bg-blue-700 transition border border-[#afafe4] bg-[#dfdfff]">
                  Go To Cart
                </button>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
