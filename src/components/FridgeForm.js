import React from "react";
import "../styles/FridgeForm.css";

const Form = (props) => {
  const fridgeInput = {
    productName: "",
    productAmount: 0,
    productCategory: "",
    productExpirationDate: "",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.getProducts(fridgeInput);

    for (const clear of e.target.children) {
      clear.value = "";
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          required
          type="text"
          placeholder="Product Name"
          onChange={(e) => (fridgeInput.productName = e.target.value)}
        />
        <input
          required
          type="text"
          placeholder="Product Category"
          onChange={(e) => (fridgeInput.productCategory = e.target.value)}
        />
        <input
          required
          type="number"
          placeholder="Amount"
          min="1"
          onChange={(e) =>
            (fridgeInput.productAmount = parseInt(e.target.value))
          }
        />
        <p className="expDate">Expiration date</p>
        <input
          required
          type="date"
          onChange={(e) => (fridgeInput.productExpirationDate = e.target.value)}
        />

        <input className="submit-button" type="submit" />
      </form>
    </div>
  );
};

export default Form;
