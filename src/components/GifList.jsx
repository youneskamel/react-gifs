import React from "react";
import Gif from "./Gif"


class GifList extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
    <div className="gif-list">

    {this.props.gifs.map((gif) => {
      return <Gif id={gif.id} selectId={this.props.selectId}/>;
    })}
    </div>

      );
  }
}

export default GifList;
