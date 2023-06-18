import { Overlay, ModalDiv } from "./Modal.styled";

export const Modal = ({url, tag, onCloseModal, onCloseModal1}) => {
    return (
        <Overlay onClick={onCloseModal} onLoad={onCloseModal1}>
            <ModalDiv>
                <img src={url} alt={tag} />
            </ModalDiv>
        </Overlay>
    )
}
//(e) => onCloseModal(e)