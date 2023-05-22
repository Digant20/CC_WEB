import React, { useState } from 'react';

function ImageWithFallback({ src, fallbackSrc }) {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImgError = () => {
    setImgSrc(fallbackSrc);
  };

  return <img src={imgSrc} onError={handleImgError} alt="product-images"/>;
}

export default ImageWithFallback;
