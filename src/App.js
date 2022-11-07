import React from "react";
import { useState } from "react";
import Filter from "./components/FridgeFilter.js";
import Form from "./components/FridgeForm.js";
import "./styles/App.css";

const App = () => {
  const [category, setCategory] = useState([]);
  const [products, setProducts] = useState([]);
  const [stand, setStand] = useState([]);

  const showAll = () => {
    setProducts([...stand]);
  };
  const showOne = (categoryName) => {
    const Arr = stand.filter(
      (fridgeInput) => fridgeInput.productCategory === categoryName
    );
    setProducts([...Arr]);
  };

  const getProducts = (fridgeInput) => {
    setProducts((products) => [...products, fridgeInput]);
    setStand((stand) => [...stand, fridgeInput]);

    if (category.includes(fridgeInput.productCategory)) {
      return;
    } else {
      setCategory((category) => [...category, fridgeInput.productCategory]);
    }
  };

  return (
    <div>
      <h1>Add something to your fridge !</h1>
      <div className="renderInputs">
        <Form getProducts={getProducts} category={category} />
      </div>
      <div className="renderFilters">
        {stand.length > 0 && <h2>In your fridge right now:</h2>}
        {stand.length > 0 && (
          <Filter
            category={category}
            products={products}
            showOne={showOne}
            showAll={showAll}
          />
        )}
      </div>
      <div className="category-container">
        {products.map((myProducts, index) => {
          return (
            <div className="category" key={index}>
              <h1 className="category-h1">{myProducts.productCategory}</h1>
              <h4>{"Product:  " + myProducts.productName}</h4>
              <h4>{"Amount:  " + myProducts.productAmount}</h4>
              <h4>{"Expiration date:  " + myProducts.productExpirationDate}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
