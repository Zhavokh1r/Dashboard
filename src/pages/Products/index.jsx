import { useEffect, useState } from "react";
import { api } from "../../Utils/axios";
export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    api.get("/products").then((e) => setProducts(e?.data?.products));
  }, []);
  console.log(products);

  return (
    <div>
      <h1>All products</h1>
      {products?.map((pr) => {
        return (
          <div key={pr?._id}>
            <ProductCard />
          </div>
        );
      })}
    </div>
  );
}
