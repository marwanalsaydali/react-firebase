import React from "react";

class EditFishForm extends React.Component {
  handleChange = (event) => {
    console.log(event.target.value);
    const updatedFish = {
      ...this.props.fish,
      [event.target.name]: event.target.value,
    };
    this.props.updateFish(this.props.index, updatedFish);
  };

  render() {
    return (
      <>
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.fish.name}
        />
        <input
          name="price"
          type="text"
          onChange={this.handleChange}
          value={this.props.fish.price}
        />
        <select
          name="status"
          onChange={this.handleChange}
          value={this.props.fish.status}
        >
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea
          name="desc"
          value={this.props.fish.desc}
          type="text"
          onChange={this.handleChange}
        />
        <input
          name="image"
          value={this.props.fish.image}
          type="text"
          onChange={this.handleChange}
        />
        <button
          onClick={() => {
            this.props.deleteFish(this.props.index);
          }}
        >
          delete
        </button>
      </>
    );
  }
}

export default EditFishForm;
