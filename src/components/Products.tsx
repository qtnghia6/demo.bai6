import { useDispatch } from "react-redux";
import addToCart from "./addToCart";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addToCart } from "../slices/cartSlice";
import { useGetAllProductsQuery } from "../slices/productsApi";
import { RootState } from '../store'; // assuming you have a RootState type defined in your store file
import { Product } from '../types'; // a

export const Products = () => {

  
 
    const { items: products, status } = useSelector((state: RootState) => state.products);
    const dispatch = useDispatch();
    const history = useHistory();
  
    const { data, error, isLoading } = useGetAllProductsQuery();
    console.log("Api", isLoading);
  
    const handleAddToCart = (product: Product) => {
      dispatch(addToCart(product));
      history.push("/cart");
    };
  
    return (
      <div className="home-container">
        {status === "success" ? (
          <>
            <h2>New Arrivals</h2>
            <div className="products">
              {data &&
                data?.map((product: Product) => (
                  <div key={product.id} className="product">
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} />
                    <div className="details">
                      <span>{product.desc}</span>
                      <span className="price">${product.price}</span>
                    </div>
                    <button onClick={() => handleAddToCart(product)}>
                      Add To Cart
                    </button>
                  </div>
                ))}
            </div>
          </>
        ) : status === "pending" ? (
          <p>Loading...</p>
        ) : (
          <p>Unexpected error occured...</p>
        )}
      </div>
    );
  };

  
