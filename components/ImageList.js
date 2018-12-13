import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => { //called w/ each image from imgs.
    return <img src={image.urls.regular} /> //returns long url
  })

  return <div>{images}</div>
};


export default ImageList;



//NOTE: this is possible too. However, you don't get to wrap the div with a couple diff. elements.

// const ImageList = (props) => {
//   return props.images.map((image) => { //called w/ each image from imgs.
//     return <img src={image.urls.regular} /> //returns long url
//   })
// };
