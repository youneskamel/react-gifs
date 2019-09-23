import React from "react";
import Gif from "./Gif"


class SelectedGif extends React.Component {
  constructor() {
    super();
    this.state = {};

  }



  render() {
    return (
      <Gif id={this.props.selectId} className="selected-gif"/>
    ); }
};

export default SelectedGif;
