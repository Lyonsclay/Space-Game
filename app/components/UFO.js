import React from 'react';

class UFO extends React.Component {
  render() {
    const ufoStyle={transform: 'translate(' + this.props.ufo.x + ')' };
    return <p style={ufoStyle}>SHIP</p>;
  }
}

export default UFO;

