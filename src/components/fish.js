import React from "react";

const Fish = (props) => {
  const { name, image, desc, price, status } = props.details;
  const isAvailable = status === "available";
  const addToOrder = () => {
    props.addToOrder(props.index);
  };
  return (
    <li className="fish">
      <img src={image} />
      <h3>{name}</h3>
      <span>{price}</span>
      <p>{desc}</p>
      <button disabled={!isAvailable} onClick={addToOrder}>
        {isAvailable ? "Add to Order" : "Sold Out"}
      </button>
    </li>
  );
};

export default Fish;
