import { ImageGalleryItem, ImageGalleryItemImage } from "./GalleryItem.styled"

export function GalleryItem({image, onLoadModal}) {
    return (
        <ImageGalleryItem onClick={onLoadModal}>
            <ImageGalleryItemImage>
                <img 
                
                src={image.webformatURL} 
                alt={image.largeImageURLtags}
                width="320px"
                height="225px"
                />
            </ImageGalleryItemImage>
        </ImageGalleryItem>
    )
}