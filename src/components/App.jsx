import React, { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
//import { Modal } from "./Modal/Modal";

export class App extends Component {

  handleSubmit = (value) => {
    console.log(value);
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        <ImageGallery />
        <Loader />
        <Button />
        
      </>
    );

  }
  
};
