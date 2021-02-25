import React from "react";
import Fish from "./fish";
class Store extends React.Component {
  render() {
    return (
      <>
        <div className="store bg-white">
          {Object.keys(this.props.fishes).map((key) => (
            <Fish
              index={key}
              key={key}
              details={this.props.fishes[key]}
              addToOrder={this.props.addToOrder}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Store;
