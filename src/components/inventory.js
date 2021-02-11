import React from "react";
import AddFishForm from "./addfishform";
class Inventory extends React.Component {
  render() {
    return (
      <>
        <div>Inventory</div>
        <AddFishForm addFish={this.props.addFish} />
      </>
    );
  }
}

export default Inventory;
