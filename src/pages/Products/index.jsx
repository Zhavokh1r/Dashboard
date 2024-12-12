import { useEffect, useState } from "react";
import { api } from "../../Utils/axios";
import ProductCard from "../../components/ProductsCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products").then((response) => setProducts(response.data));
  }, []);

  return (
    <div className="products">
      <h1 className="text-[32px] text-center mb-5 text-light-blue-500 font-[600]">
        All Products
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((pr)=> {
          return (
            <div className="div">
              <img src="/public/card.img" alt="" />
              <h2>{pr.name_en}</h2>
            </div>
          )
        })}
      </div>
    </div>
  );
}
