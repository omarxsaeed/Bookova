import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Cart.module.css";
import { useSelector, useDispatch } from "react-redux";

// import { decQuantity, delBook, incQuantity } from "./Redux/cartSlice";
import { decQuantity, delBook, incQuantity } from "../../Redux/CartSlice";

function Cart() {
  const [books, setBooks] = useState([]);
  // let [counter. setCounter] = useState(0);

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
  function plus(index) {
    dispatch(incQuantity(index));
  }
  function minus(index) {
    dispatch(decQuantity(index));
    // setCounter();
  }
  return (
    <div className="container" style={{ width: "60%" }}>
      <h1 className="mb-5">Shopping Cart</h1>

      <div className=" justify-content-center d-flex" style={{ width: "100%" }}>
        <table className="table">
          <thead>
            <tr style={{ textAlign: "center" }}>
              <th style={{ textAlign: "left", paddingLeft: "3%" }} scope="col">
                Product Details
              </th>
              <th scope="col">Price</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((item) => (
              <tr key={item.isbn13} data={item}>
                <td style={{ width: "40%" }}>
                  <div
                    className="d-flex align-content-center align-items-center  column"
                    style={{ width: "100%" }}
                  >
                    <div style={{ width: "40%" }}>
                      <img style={{ padding: "0", width: "100%", height: "100%" }} src={item.image} alt="" />
                    </div>

                    <div className="d-flex  row gap-3" style={{ width: "60%" }}>
                      <h5 style={{ padding: "0", margin: "0" }}>{item.title}</h5>
                      <p className="mb-0 p-0">{item.subtitle}</p>
                    </div>
                  </div>
                </td>
                <td
                  style={{
                    verticalAlign: "middle",
                    width: "20%",
                    textAlign: "center",
                  }}
                >
                  <p> {item.price}</p>
                </td>
                <td
                  style={{
                    verticalAlign: "middle",
                    width: "5%",
                  }}
                >
                  <div className="d-flex column border justify-content-center rounded-5">
                    <button type="button" onClick={() => minus(item.isbn13)}>
                      -
                    </button>
                    <p className="qnt mb-0" style={{}}>
                      {/* {counter} */}0
                    </p>
                    <button type="button" onClick={() => plus(item.isbn13)}>
                      +
                    </button>
                  </div>
                </td>

                <td style={{ verticalAlign: "middle", width: "fit-content", textAlign: "center" }}>
                  <p>total</p>
                </td>
                <td
                  style={{
                    verticalAlign: "middle",
                    textAlign: "start",
                    padding: "0",
                    width: "5%",
                  }}
                >
                  <button type="button" onClick={() => remove(item.id)}>
                    <i className="bi bi-x" />
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

export default Cart;
