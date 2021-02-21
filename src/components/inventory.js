import React from "react";
import AddFishForm from "./addfishform";
import EditFishForm from "./editfishform";
class Inventory extends React.Component {
  render() {
    return (
      <>
        <div>Inventory</div>
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.addFishSample}>Add sample fishes</button>

        {Object.keys(this.props.fishes).map((key) => (
          <EditFishForm
            key={key}
            index={key}
            fish={this.props.fishes[key]}
            deleteFish={this.props.deleteFish}
            updateFish={this.props.updateFish}
          />
        ))}
      </>
    );
  }
}

export default Inventory;
