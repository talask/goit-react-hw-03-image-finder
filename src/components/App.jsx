import React, { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar'

export class App extends Component {

  handleSubmit = (value) => {
    console.log(value);
  }

  render() {
    return (
      <Searchbar onSubmit={this.handleSubmit}></Searchbar>
    );

  }
  
};
