import React, { useState } from "react";
import "./Home.css";
import logo from "../img/StockPe.png";
import HomeSlider from "./HomeSlider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import firebase from "../ult/firebase";

function Home() {
  const [title, setTitle] = useState("");
  const [show, setShow] = useState(false);

  const handleOnChange = (e) => {
    setTitle(e.target.value);
  };

  const createTodo = () => {
    const todoRef = firebase.database().ref("Todo");
    const todo = {
      title,
      Compelete: false,
    };

    todoRef.push(todo);
  };

  return (
    <div className="home">
      <div className="home_from_area">
        <img src={logo} alt="logo" className="home_logo" />
        <HomeSlider />
        <form onChange={handleOnChange}>
          <div class="form-group d-flex mx-5" style={{ margin: "-550px" }}>
            <input
              type="tel"
              pattern=".{10}"
              class="form-control  "
              id="validationCustom08"
              aria-describedby="emailHelp"
              placeholder="Mobile"
              required
              style={{ maxWidth: "400px", height: 50, marginLeft: "150px" }}
            />
            <button
              type="submit"
              onClick={() => {
                createTodo();
                setShow(true);
              }}
              class="btn btn-primary mx-3 px-5"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
