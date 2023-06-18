import { GalleryItem } from "components/GalleryItem/GalleryItem";
import { ImageGallery } from "./Gallery.styled";
import { nanoid } from 'nanoid';

export const Gallery = ({images, onLoadModal}) => {
    return (
       
        <ImageGallery>
            {images.map((itemImage) => {
                return <GalleryItem  key={nanoid()} image={itemImage} onLoadModal={onLoadModal}/>
            })}

            </ImageGallery>
    );
    }