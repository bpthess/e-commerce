// import data from "../data";
import { Link } from "react-router-dom";
import { ProductArea } from "./HomeStyle";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import axios from "axios";

class Person {
  constructor(data) {
    this.data = data;
  }

  get value() {
    return `${this._data}`;
  }

  set value(value) {
    this._data = value;
  }
}

const title = new Person("Featured Products");
const submitButton = new Person("Add to cart");

axios.defaults.withCredentials = true;

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      });
  }, []);

  const { t } = useTranslation();

  return (
    <div>
      <h1>{title.data}</h1>
      <ProductArea>
        {products &&
          products.map((product) => {
            return (
              <div className="product" key={product.slug}>
                <Link to={`/product/${product.slug}`}>
                  <img src={product.image} alt={product.name} />
                </Link>
                <div className="product-info">
                  <Link to={`/product/${product.slug}`}>
                    <span>{product.name}</span>
                  </Link>
                  <p>
                    <strong>{product.price}</strong>
                  </p>
                  <button>{submitButton.data}</button>
                </div>
              </div>
            );
          })}
      </ProductArea>
    </div>
  );
}

export default HomeScreen;
