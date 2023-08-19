import React from 'react';
import ImageData from './ImageData';

const ImageGallery = ({ galleryImages }) => {
    return (
        <div className="p-6 bg-black">
            <h1 className="text-center text-3xl font-mono font-bold text-white">Mintabless</h1>
            <div className="grid grid-cols-3 gap-4">
                {galleryImages.map((image, index) => (
                    <div
                        key={image.id}
                        className="border mx-auto bg-red-50 p-4 rounded-xl h-[23rem] w-[20rem]"
                    >
                        <ImageData metadata={image} />
                        <div className="text-center mt-5 font-semibold">{image.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ImageGallery;
