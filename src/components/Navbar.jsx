import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Example() {
  const cartProducts = useSelector((state) => state.cart);
  return (
    <>
      <div className="min-h-full w-full">
        <div as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <h2 className="text-white text-xl sm:text-2xl font-bold">Redux Store</h2>

                <div className="ml-10 flex items-baseline space-x-2">
                  <Link
                    className="text-gray-300 px-2 py-2 hover:bg-gray-700 hover:text-white"
                    to="/"
                  >
                    Dashboard
                  </Link>
                  <Link
                    className="text-gray-300 px-4 py-2 hover:bg-gray-700 hover:text-white"
                    to="/cart"
                  >
                    Cart {cartProducts.length}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
