import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import "./style/products.scss";

const Products = () => {
  const [productsData, setProductData] = useState([]);

  const [page, setPage] = useState(1);
  const arr = [1, 2, 3];
  useEffect(() => {
    const fetchPoduct = async () => {
      try {
        let { data } = await axios.get(
          "https://dummyjson.com/products?limit=100"
        );
        console.log(data);
        setProductData(data.products);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPoduct();
  }, [productsData]);

  const handlepage = (i) => {
    setPage(i);
  };

  console.log(productsData.length);
  return (
    <>
      <div className='heading'>Products</div>

      <div className='all--Product'>
        {productsData?.slice(page * 10 - 10, page * 10).map((item, index) => (
          <ProductItem productDetail={item} key={index} />
        ))}
      </div>
      <div className='pagination'>
        <button
          onClick={() => {
            if (page > 1) setPage(page - 1);
          }}
        >
          {" "}
          {"<"}{" "}
        </button>
        {productsData.length > 0 && (
          <div>
            {[...Array(productsData.length / 10)].map((item, index) => (
              <button onClick={() => handlepage(index + 1)} key={index}>
                {index + 1}
              </button>
            ))}
          </div>
        )}
        <button
          onClick={() => {
            if (page < 10) setPage(page + 1);
          }}
        >
          {" "}
          {">"}{" "}
        </button>
      </div>
    </>
  );
};

export default Products;
