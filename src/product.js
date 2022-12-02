import React, { Component } from "react";
import Price from "./price";
import ProductName from "./productName";
class Product extends Component {
  render() {
    return (
      <div>
        <Price />
        <ProductName />
      </div>
    );
  }
}
export default Product;
