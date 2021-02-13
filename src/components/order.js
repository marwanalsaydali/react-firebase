import React from "react";

class Order extends React.Component {
  renderOrder = (key) => {
    const fish = this.props.fishes[key];
    const count = this.props.order[key];
    const isAvailable = fish.status === "available";
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fish ? fish.name : "fish"} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fish.name}
        {count * fish.price}
      </li>
    );
  };
  render() {
    const orderId = Object.keys(this.props.order);
    // we need to calc the totale using reduce
    const total = orderId.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      // make sure finh still available
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);
    console.log(total);
    return (
      <>
        <div>Order</div>
        {orderId.map(this.renderOrder)}
        <h4>Total</h4>
        <p>{total}</p>
      </>
    );
  }
}

export default Order;
