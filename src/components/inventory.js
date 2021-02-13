import React from "react";
import AddFishForm from "./addfishform";
class Inventory extends React.Component {
  render() {
    return (
      <>
        <div>Inventory</div>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.addFishSample}>Add sample fishes</button>
      </>
    );
  }
}

export default Inventory;
