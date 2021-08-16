import React from "react";
import "./styles.css";
import { useState } from "react";

const cuisine = {
  north_indian: [{ name: "dal makhani" }, { name: "kulcha" }],
  italian: [{ name: "pizza" }, { name: "pasta" }],
  chinese: [{ name: "noodles" }, { name: "manchurian" }]
};

export default function App() {
  const [food, setFood] = useState("chinese");
  function genreClickHandler(food) {
    setFood(food);
  }
  return (
    <div className="App">
      <h1> Good Food </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite dishes. Select a cuisine to get started{" "}
      </p>

      <div>
        {Object.keys(cuisine).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {cuisine[food].map((item) => (
            <li
              key={item.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item.name} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
