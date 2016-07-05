import React from "react";

export default class Date extends React.Component {
  render() {
    return (
      <li>{this.props.date}</li>
    );
  }
}