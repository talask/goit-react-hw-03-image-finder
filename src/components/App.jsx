import React, { Component } from "react";
import { Searchbar } from './Searchbar/Searchbar';
import { Gallery } from "./Gallery/Gallery";
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";
import {  getPixabayAPI, options } from './PixabayAPI/PixabayAPI';
import { AppDiv } from "./App.styled";
import { Modal } from "./Modal/Modal";

export class App extends Component {
  state = {
    data: [],
    value: '',
    page: 0,
    modalImage: {url: '', tag: '',},
    isLoading: false,
    isLoadMore: false,
    isModal: false,
  }

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    
    if (prevState.value !== value || prevState.page !== page) {

      if(prevState.value !== value) this.setState({data: []});
      
      this.loadPixabay(value, page);
    }
  }

  handleSubmit =  (value, page) => {
    this.setState({
      value: value,
      page: page,
    });

  }  

  loadPixabay = async(value, page) => {
    this.setState({isLoading: true});
    try {
      const { totalHits, hits } = await getPixabayAPI(value, page);
           
       this.setState(prevState => ({  
          data:  [...prevState.data, ...hits],
          isLoadMore: options.page < Math.ceil(totalHits/options.per_page) }));
      
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }
  
  handleLoadMore = () => {
    
    this.setState(prevState => ({  page: prevState.page + 1,}));
   
  }

  handleModal = (id) => {
    const {data} = this.state;
    this.setState({ isModal: true, });
    
    const searchImage = data.filter((image) => {
     return image.id === id
    });
   
    this.setState({modalImage: { url: searchImage[0].largeImageURL, tag: searchImage[0].tags}});
  }

  handleCloseModal1 = (e) => {
   
    if(e.keyCode === 'Escape') { this.setState({ isModal: false, }); }
     
  }

  handleCloseModal = (e) => {
    this.setState({ isModal: false, });
    
    }
   
  render() {
    const { isLoading, data, isLoadMore, isModal,  modalImage: {url, tag} } = this.state;
    return (
     
      <AppDiv>
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        
        { data.length > 0 && <Gallery images={data} onLoadModal={this.handleModal}/> }
        { isLoading && <Loader /> }
        { isLoadMore && <Button onLoadMore={this.handleLoadMore}/> }
       
        { isModal && 
          <Modal 
            onClose={this.handleCloseModal} 
            onCloseModal={this.handleCloseModal1}  
            url={url} 
            tag={tag}/>}
      </AppDiv>  
      
    );

  }
  
};
