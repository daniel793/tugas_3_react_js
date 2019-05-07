import React, { Component } from 'react';

class MenuTentangKami extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tentang : this.props.tentang,
    }
  }

  render(){
    return(
      <div>
        <center>
          <p>Tentang Kami</p>
          {this.state.tentang}
        </center>
      </div>
    );
  };

}

export default MenuTentangKami;
