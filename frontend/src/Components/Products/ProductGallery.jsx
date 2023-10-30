import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ProductGallery = () => {
    const images = [
        {
            original: "https://picsum.photos/id/1018/1000/600/",
            thumbnail: "https://picsum.photos/id/1018/250/150/",
        },
        {
            original: "https://picsum.photos/id/1015/1000/600/",
            thumbnail: "https://picsum.photos/id/1015/250/150/",
        },
        {
            original: "https://picsum.photos/id/1019/1000/600/",
            thumbnail: "https://picsum.photos/id/1019/250/150/",
        },
    ];

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