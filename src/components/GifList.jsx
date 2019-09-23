import React from "react";
import Gif from "./Gif"


class GifList extends React.Component {
  constructor() {
    super();
    this.state = {};

  }





  render() {
    return this.props.gifs.map((gif) => {
      return <Gif id={gif.id} selectId={this.props.selectId}/>;
    });
  }
}

export default GifList;
