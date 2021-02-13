import React from "react";
import Layout from "./layout/layout";

import Store from "./components/store";
import Order from "./components/order";
import Inventory from "./components/inventory";

import fishes from "./sample-fishes";

import "./App.css";
class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };
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
  addFishSample = () => {
    this.setState({ fishes: fishes });
  };
  render() {
    return (
      <Layout>
        <div className="dashboard">
          <Store fishes={this.state.fishes} addToOrder={this.addToOrder} />
          <Order fishes={this.state.fishes} order={this.state.order} />
          <Inventory
            addFish={this.addFish}
            addFishSample={this.addFishSample}
          />
        </div>
      </Layout>
    );
  }
}

export default App;
