import React from "react";
import modules from "./Card.module.css";
import { useState } from "react";

function Card(props) {
  let [increment, setIncrement] = useState(0);

  function inc() {
    setIncrement(++increment);
  }
  function dec() {
    setIncrement(increment => Math.max(increment - 1, 0));
  }

  return (
    <div>
      <div>
        {props.products.map((content) => {
          return (
            <div>
              <div id={modules.itemId}>
                <li>{content.id}</li>
                <li>{content.title}</li>
                <li>{content.price}</li>
                <li>{content.description}</li>
                <li>{content.category}</li>
                <img src={content.image} />
                <li>{content.rating.rate}</li>
                <li>{content.rating.count}</li>

                <div id={modules.buttonContainer}>
                  <button onClick={inc}>+</button>
                  <p>{increment}</p>
                  <button onClick={dec}>-</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
