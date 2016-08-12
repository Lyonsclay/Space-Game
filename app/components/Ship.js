import React from 'react';

class Ship extends React.Component() {
  render() {
    const shipStyle={transform: 'translate(' + this.props.ship.x + ')' };
    return <p>SHIP</p>;
  }
};

export default Ship;
