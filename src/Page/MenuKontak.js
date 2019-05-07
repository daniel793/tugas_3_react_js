import React, { Component } from 'react';

class MenuKontak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kontak : this.props.kontak,
      hp : this.props.hp,
    }
  }

  render(){
    return(
      <div>
        <center>
          <p>{this.state.kontak}</p>
          <p>Kontak Kami : {this.state.hp}</p>
        </center>
      </div>
    );
  };

}

export default MenuKontak;
