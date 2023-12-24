import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = ({images}) => {


    return (
        <div className='product-gallary-card'>
            <ImageGallery
                items={images}
                autoPlay={true}
                showFullscreenButton={false}
                showPlayButton={false}
                showBullets={true}
                showThumbnails={false}
                showNav={false}
            />
        </div>
    )
}

export default ProductGallery