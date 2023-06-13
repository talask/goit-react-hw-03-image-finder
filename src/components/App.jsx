import React, { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import {  getPixabayAPI, options } from './PixabayAPI/PixabayAPI';
//import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    data: [],
    value: '',
    isLoading: false,
    isClickSubmit: false,
    isLoadMore: false,
  }

  handleSubmit = (value, page) => {
    
    this.setState({
      isClickSubmit: true,
      value: value,
    });
    options.page = page;
    options.q = value;
   
  }

  async componentDidUpdate(prevState) {
   const {isClickSubmit, isLoading} = this.state;
    if(prevState.state !== this.state && this.state[isClickSubmit]) {
      this.setState({isLoading: true});
    }

    try {
      if(isLoading){
        const data = await getPixabayAPI();
        console.log("--" + data);
      }
     
      //this.setState({ data: response.data });
      
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ 
        isLoading: false,
        isClickSubmit: false, 
      });
    }
  
    console.log(prevState.state, this.state);
      
    console.log('update');
  }

  render() {
    const { isLoading, data, isLoadMore } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {  data.length > 0 && <ImageGallery />}
        {  isLoading && <Loader />}
        {isLoadMore && <Button />}
        
      </>
    );

  }
  
};
