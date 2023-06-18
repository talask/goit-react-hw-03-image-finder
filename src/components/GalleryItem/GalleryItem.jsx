import { ImageGalleryItem, ImageGalleryItemImage } from "./GalleryItem.styled"

export function GalleryItem({image, onLoadModal}) {
    return (
        <ImageGalleryItem onClick={() => onLoadModal(image.id)}>
            <ImageGalleryItemImage>
                <img 
                
                src={image.webformatURL} 
                alt={image.tags}
                width="320px"
                height="100vh"
                />
            </ImageGalleryItemImage>
        </ImageGalleryItem>
    )
}