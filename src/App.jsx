import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import ProductsPage from "./pages/Products";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpenProducts, setIsDropdownOpenProducts] = useState(false);
  const [isDropdownOpenUsers, setIsDropdownOpenUsers] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleDropdownProducts = () =>
    setIsDropdownOpenProducts(!isDropdownOpenProducts);
  const toggleDropdownUsers = () =>
    setIsDropdownOpenUsers(!isDropdownOpenUsers);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div
        className={`sidebar bg-gray-900 fixed top-0 bottom-0 lg:left-0 ${
          isOpen ? "left-0" : "-left-80"
        } duration-300 p-2 w-72 overflow-y-auto text-center shadow h-screen lg:block`}
      >
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center rounded-md">
            <i className="bi bi-app-indicator px-2 py-1 bg-blue-600 rounded-md"></i>
            <h1 className="text-[15px] ml-3 text-xl text-gray-200 font-bold">
              Dashboard
            </h1>
            <i
              className="bi bi-x ml-20 cursor-pointer lg:hidden"
              onClick={toggleSidebar}
            ></i>
          </div>
          <hr className="my-2 text-gray-600" />

          {/* Home Section */}
          <Link
            to="/"
            className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
          >
            <i className="bi bi-house-door-fill"></i>
            <span className="text-[15px] ml-4 text-gray-200">Home</span>
          </Link>

          {/* Products Section */}
          <div
            className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
            onClick={toggleDropdownProducts}
          >
            <i className="bi bi-box"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200">Products</span>
              <span
                className={`text-sm transform ${
                  isDropdownOpenProducts ? "rotate-180" : ""
                }`}
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          {isDropdownOpenProducts && (
            <div className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto">
              <Link
                to="/products/all"
                className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              >
                All Products
              </Link>
              <Link
                to="/products/create"
                className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              >
                Create Product
              </Link>
            </div>
          )}

          {/* Users Section */}
          <div
            className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
            onClick={toggleDropdownUsers}
          >
            <i className="bi bi-person"></i>
            <div className="flex justify-between w-full items-center">
              <span className="text-[15px] ml-4 text-gray-200">Users</span>
              <span
                className={`text-sm transform ${
                  isDropdownOpenUsers ? "rotate-180" : ""
                }`}
              >
                <i className="bi bi-chevron-down"></i>
              </span>
            </div>
          </div>
          {isDropdownOpenUsers && (
            <div className="leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto">
              <Link
                to="/users/all"
                className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              >
                All Users
              </Link>
              <Link
                to="/users/create"
                className="cursor-pointer p-2 hover:bg-gray-700 rounded-md mt-1"
              >
                Create User
              </Link>
            </div>
          )}

          <hr className="my-4 text-gray-600" />

          {/* Logout Section */}
          <Link
            to="/logout"
            className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600"
          >
            <i className="bi bi-box-arrow-in-right"></i>
            <span className="text-[15px] ml-4 text-gray-200">Logout</span>
          </Link>
        </div>
      </div>

      {/* Mobile Sidebar Toggle Button */}
      {!isOpen && (
        <button
          className="lg:hidden fixed top-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition duration-300 ease-in-out z-10"
          onClick={toggleSidebar}
        >
          <i className="bi bi-list text-xl"></i>
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-800 p-0 text-white md:p-10 lg:ml-72">
        <Routes>
          <Route path="/" element={<h1>Hello! This is HomePage</h1>} />
          <Route path="/products/all" element={<ProductsPage />} />
          <Route
            path="/products/create"
            element={<h1>Hello! This is Create ProductsPage</h1>}
          />
          <Route
            path="/users/all"
            element={<h1>Hello! This is UsersPage</h1>}
          />
          <Route
            path="/users/create"
            element={<h1>Hello! This is Create UsersPage</h1>}
          />
          <Route path="/logout" element={<h1>Hello! This is LogoutPage</h1>} />
        </Routes>
      </div>
    </div>
  );
}
