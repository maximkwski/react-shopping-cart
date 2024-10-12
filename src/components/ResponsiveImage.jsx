import React, { useState, useEffect } from 'react';

const ResponsiveImage = ({ image, name }) => {
  const [currentImage, setCurrentImage] = useState(image.mobile);

  useEffect(() => {
    const updateImage = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setCurrentImage(image.desktop);
      } else if (window.matchMedia("(min-width: 768px)").matches) {
        setCurrentImage(image.tablet);
      } else {
        setCurrentImage(image.mobile);
      }
    };

    // Set the image initially
    updateImage();

    // Add event listener for window resize
    window.addEventListener('resize', updateImage);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', updateImage);
  }, [image.mobile, image.tablet, image.desktop]);

  return <img src={currentImage} alt={name} />;
};

export default ResponsiveImage;