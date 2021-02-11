import React from "react";
import Layout from "./layout/layout";

import Store from "./components/store";
import Order from "./components/order";
import Inventory from "./components/inventory";

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
  render() {
    return (
      <Layout>
        <div className="dashboard">
          <Store />
          <Order />
          <Inventory addFish={this.addFish} />
        </div>
      </Layout>
    );
  }
}

export default App;
