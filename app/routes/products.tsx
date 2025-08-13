import { useState } from "react";
import ProductDetail from "~/components/product_view";

export default function Products() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Product Page For Parrent Change {counter}
      <ProductDetail
        changeCounter={() => setCounter(counter + 1)}
        newCounter={counter}
      />
      <button
        className="block bg-red-100"
        onClick={() => setCounter(counter + 1)}
      >
        add counter
      </button>
    </div>
  );
}
