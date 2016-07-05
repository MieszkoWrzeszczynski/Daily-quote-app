import React from "react";

export default class Name extends React.Component {
   render() {
    return (
      <li>{this.props.name}</li>
    );
  }
}