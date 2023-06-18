import PropTypes from 'prop-types';
import { Overlay, ModalDiv } from "./Modal.styled";

export const Modal = ({url, tag, onClose, onCloseModal1}) => {
    
    return (
        <Overlay 
       
        onClick={onClose} onKeyDown={onCloseModal1}>
           
            <ModalDiv>
           
                <img src={url} alt={tag} />
            </ModalDiv>
        </Overlay>
    )
}

Modal.propTypes = {
    onCloseModal1: PropTypes.func,
    onClose: PropTypes.func,
    url: PropTypes.string,
    tag: PropTypes.string,
};