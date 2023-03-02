import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Wishlist.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useSelector, useDispatch } from "react-redux";

import { delBook } from "../../Redux/CartSlice";

function Wishlist() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    axios.get("https://api.itbook.store/1.0/new").then((res) => {
      console.log(res.data.books);
      setBooks(res.data.books);
    });
  }, []);

  const cart = useSelector((state) => state.cartReducer.cart);
  console.log("hi from cart", cart);
  const dispatch = useDispatch();
  function remove(id) {
    dispatch(delBook(id));
  }

  return (
    <div className="container ">
      <h1 className="mb-5">WishList</h1>
      <div className="table-container justify-content-center d-flex">
        <table className="table">
          <thead>
            <tr className="table-tr">
              <th scope="col">Action</th>
              <th scope="col">Action</th>
              <th className="table-th" style={{ textAlign: "left", paddingLeft: "3%" }} scope="col">
                Product Details
              </th>
              <th scope="col">Price</th>
              <th scope="col">Stock Status</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.isbn13} data={item}>
                <td className="tbody-td1">
                  <button type="button" onClick={() => remove(item.id)}>
                    <i className="bi bi-x" />
                  </button>
                </td>
                <td className="tbody-td2">
                  <img src={item.image} alt="" />
                </td>
                <td className="tbody-td3">
                  <h5>{item.title}</h5>
                </td>
                <td className="tbody-td4">
                  <p> {item.price}</p>
                </td>

                <td className="tbody-td5">
                  <p>Avaliable</p>
                </td>
                <td className="tbody-td6">
                  <button type="button" className="btn btn-dark">
                    Add To Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Wishlist;
