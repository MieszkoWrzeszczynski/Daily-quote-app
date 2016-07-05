import React from "react";

export default class Time extends React.Component {
  render() {
    return (
      <li>{this.props.time}</li>
    );
  }
}