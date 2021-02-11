import React from "react";

class StoreSelector extends React.Component {
  // make  ref to the input
  myInput = React.createRef();

  goToStore = (event) => {
    // stope the button default behaviour
    event.preventDefault();
    // get the value from the input
    const storeInput = this.myInput.current.value;
    const storeName = storeInput.replace(/\s\s+/g, "-").toLowerCase();
    console.log(storeName);
    // go to /store/ storeName
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h3>Select a Store</h3>
          <input
            type="text"
            required
            ref={this.myInput}
            placeholder="Store Name"
          />
          <button>Select</button>
        </form>
      </>
    );
  }
}

export default StoreSelector;
