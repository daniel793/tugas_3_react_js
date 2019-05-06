import React, { Component } from "react";

class ListMakanan extends Component{

  consturctor(props) {
    super(props);
    this.state={
      dataList : this.props.ListMakanan,
    };
  }

  render(){
    return(
      <div>
        <img
          src={this.state.dataList}
          alt="Produk Makanan"
          width="150"
          />
      <div>
    );
  }
}
