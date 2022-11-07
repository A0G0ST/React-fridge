import React from "react";
import "../styles/FridgeFilter.css";

export default class Filter extends React.Component {
  renderAll = (e) => {
    e.preventDefault();
    this.props.showAll();
  };
  renderOne = (e, val) => {
    e.preventDefault();
    this.props.showOne(val);
  };
  render() {
    return (
      <div>
        <form className="category-bottons">
          <button
            className="renderAll-button"
            onClick={(e) => this.renderAll(e)}
          >
            Show All
          </button>
          <div className="renderOne-button">
            {this.props.category.map((val, index) => {
              return (
                <button onClick={(e) => this.renderOne(e, val)} key={index}>
                  {val}
                </button>
              );
            })}
          </div>
        </form>
      </div>
    );
  }
}
