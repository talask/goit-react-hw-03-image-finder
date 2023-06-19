import React, { Component } from 'react';
import { Overlay, ModalDiv } from "./Modal.styled";

//export const Modal = ({url, tag, onClose}) => {
export class Modal extends Component {
    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
      }
    
    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
      }
    
    handleKeyDown = (event) => {
        if (event.key === 'Escape') {
          // Здесь вызываем функцию для закрытия модального окна
          this.props.onClose();
        }
      }
      
    render() {
        return (
            <Overlay onClick={this.props.onClose}>
           
                <ModalDiv>
                    <img src={this.props.url} alt={this.props.tag} />
                </ModalDiv>
             </Overlay>
        )
    }
}

