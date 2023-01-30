import { Component } from "react";
// importing 'Component' from React Library when creating components as classes

class ImageComponent extends Component {
  render() {
    // don't forget to use render (it is MANDATORY) when you're creating a component as a class
    return (
      // render should 'return'
      <img
        className="imgComponent"
        src={this.props.imgSrc}
        alt={this.props.imgAlt}
      />
    );
  }
}

export default ImageComponent;
// don't forget to export to be able to use it on any other file
