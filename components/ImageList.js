import React from 'react';

const ImageList = (props) => {
  const images = props.images.map((image) => { //called w/ each image from imgs.
    return <img alt = {image.description} key = {image.id} src={image.urls.regular} /> //returns long url
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


// NOTE 2: you can replace (image) as your argument in map and instead, say description, id, urls.regular. Then make drop image off each of the properties in return so it's destructured.
