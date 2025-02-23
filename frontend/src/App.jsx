import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [products, setproducts] = useState([]);
  async function get() {
    await axios
      .get("http://localhost:6500/gettingproducts")
      .then((response) => setproducts(response.data))
      .catch((erorr) => console.log(erorr));
  }
  return (
    <>
      <h1>My products</h1>
      <button onClick={get}>Display the products</button>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} width={100} />
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
