import React from "react";
import "./addNew.css";

class AddNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleInput: "",
    };
  }
  handleChange(val) {
    const value = val.target.value;
    console.log("val=", value);
    this.setState({
      titleInput: value,
    });
    console.log("state=", this.state);
  }
  handleClick = () => {
    console.log(this.state.titleInput);
  };
  render() {
    return (
      <div className="add-new">
        <input value={this.state.titleInput} onChange={this.handleChange.bind(this)} />
        <button onClick={this.handleClick}>Click</button>
      </div>
    );
  }
}

export default AddNew;
