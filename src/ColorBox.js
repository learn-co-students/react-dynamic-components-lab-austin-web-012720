import React, { Component } from 'react';

export default class ColorBox extends Component {


  render() {
    // let opacity = 1
    if(this.props.opacity >= 0.2){
    return (
      <div className="color-box" style={{opacity: this.props.opacity /*replace null with the value*/}}>
        <ColorBox opacity={this.props.opacity - 0.1}/>
      </div>
    )
  } else {
    return null
  }
}

}

