import React from "react";
import Layout from "./layout/layout";

import Store from "./components/store";
import Order from "./components/order";
import Inventory from "./components/inventory";

import fishes from "./sample-fishes";
import base from "../src/base";
import "./App.css";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidMount() {
    const { params } = this.props.match;
    // reonstate localstorge
    const localStorageRef = localStorage.getItem(params.storeId);
    if (localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef),
      });
    }
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
  }
  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
  }
  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  addFish = (fish) => {
    // first copy what in the state
    const fishes = { ...this.state.fishes };
    //// add the new fish to that copy
    fishes[`fish${Date.now()}`] = fish;
    // set the new state
    this.setState({ fishes: fishes });
  };
  addToOrder = (key) => {
    // copy the order state
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };
  removeFromOrder = (key) => {
    // copy the order state
    const order = { ...this.state.order };
    delete order[key];
    this.setState({ order });
  };
  addFishSample = () => {
    this.setState({ fishes: fishes });
  };
  deleteFish = (key) => {
    // copy the state
    const fishes = { ...this.state.fishes };
    // remove that fish from it
    fishes[key] = null;
    // re push it
    this.setState({ fishes });
  };
  updateFish = (key, updatedFish) => {
    // copy the state
    const fishes = { ...this.state.fishes };
    // update the key
    fishes[key] = updatedFish;
    // push back the state
    this.setState({ fishes });
  };
  render() {
    return (
      <Layout>
        <div className="dashboard">
          <Store fishes={this.state.fishes} addToOrder={this.addToOrder} />
          <Order
            fishes={this.state.fishes}
            order={this.state.order}
            removeFromOrder={this.removeFromOrder}
          />
          <Inventory
            updateFish={this.updateFish}
            deleteFish={this.deleteFish}
            fishes={this.state.fishes}
            addFish={this.addFish}
            addFishSample={this.addFishSample}
          />
        </div>
      </Layout>
    );
  }
}

export default App;
