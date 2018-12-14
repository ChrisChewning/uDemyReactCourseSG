// the purpose of this component is to show one image by itself.
import React from 'react';



class ImageCard extends React.Component {
  constructor(props){
    super(props);

    //REF: gives direct access to a single DOM element. in constructor assign as variable and use as props. no need for state b.c refs will not change over time.
    //in this case, it reaches into the DOM & figures out the img height.

    this.imageRef = React.createRef();
  }

  componentDidMount(){ //callback function b.c logging this.imageRefu.current.clientHeight returned 0 since it logged before img could load.
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }


  render(){
    const { description, urls} = this.props.image;
    return (
      <div>
        <img
          ref={this.imageRef}
          alt={description}
          src={urls.regular}

          //desctructured ^
          // alt={this.props.image.description}
          // src={this.props.image.urls.regular}
        />
      </div>
    )
  }
}

export default ImageCard;
