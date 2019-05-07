import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component {
  constructor(props) {
    super(props);
    this.state={
      jumlahPesanan : 0,
    };
    this.rubahPesanan = this.rubahPesanan.bind(this);
    this.pesanan = this.pesanan.bind(this);
  }

  rubahPesanan(){
    this.setState((state,props)=>{
      return{
        pesan : state.nama,
      };
    });
  }

  pesanan(e){
      console.log(e.target.value);
  }

  render(){
    return(
      <div>
        <h3>Daftar Makanan yang kami sediakan:</h3>
        <table>
          <tr>
            <ListMakanan src="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
            <center>
              <button onClick={this.pesanan} >Pesan Sekarang</button>
            </center>
          </tr>
        </table>

      </div>
    );
  };
}

export default MenuMakanan;
