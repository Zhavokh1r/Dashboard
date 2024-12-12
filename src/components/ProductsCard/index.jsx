import { Button } from "@material-tailwind/react";

export default function ProductCard({ img, title, text, price, color, quantity }) {
  return (
    <div className="card max-w-sm rounded-lg shadow-lg bg-gray-700 dark:bg-gray-800 transition-colors duration-300 p-6 m-3 md:m-0">
      <img
        src={img}
        alt={title || "Product Image"}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <h2 className="text-xl font-bold text-white dark:text-gray-100 mb-2">
        {title || "No Title Available"}
      </h2>
      <p className="text-white dark:text-gray-300 mb-4">
        {text || `Color: ${color || "N/A"} | Quantity: ${quantity || 0}`}
      </p>
      <p className="text-lg font-semibold text-white dark:text-gray-100 mb-6">
        {price ? `$${price}` : "Price not available"}
      </p>
      <div className="flex gap-4">
        <Button className="bg-red-500 hover:bg-red-700 text-white">Delete</Button>
        <Button className="bg-transparent border-solid border-[1px] border-white text-white hover:bg-gray-600">
          Update
        </Button>
      </div>
    </div>
  );
}
