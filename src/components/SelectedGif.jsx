import React from "react";
import Gif from "./Gif"


class SelectedGif extends React.Component {
  constructor() {
    super();
    this.state = {};

  }



  render() {
    return (
      <div className= "selected-gif">
      <Gif id={this.props.selectId}/>
      </div>
    ); }
};

export default SelectedGif;
