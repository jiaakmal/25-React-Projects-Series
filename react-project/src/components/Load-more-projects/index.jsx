import React, { useEffect, useState } from "react";
import './style.css'

export default function LoadMoreProducts() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disable , setDisable] = useState(false)

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }
      `);
      const result = await response.json();
      console.log(result);
      if (result && result.products && result.products.length) {
        setProducts((prevProduct)=>[...prevProduct , ...result.products]);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching data", error);
      setLoading(false);
    }
  }
  if(loading){
    return <p>Loading...</p>
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);
  useEffect(() => {
    if(products && products.length === 100) setDisable(true)}
  , [])
  

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((productItem) => (
              <div className="product" key={productItem.id}>
                <img src={productItem.thumbnail} alt={productItem.title} />
                <p>{productItem.title}</p>
              </div>
            ))
          : null}
      </div>
      <div className="button-container">
        <button disabled={disable} onClick={()=> setCount(count+1)}>Load More Products...
        </button>
        {disable ? <p>you have reached 100 products</p> : null}
      </div>
    </div>
  );
}
