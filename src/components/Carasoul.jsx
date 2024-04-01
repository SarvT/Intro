import React from 'react';
import { Zoom, Fade, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import img1 from './static/img/Mockup 1.png';
import img2 from './static/img/Mockup 2.png';
import img3 from './static/img/Mockup 3.png';
import img4 from './static/img/Mockup 12.png';

const images = [
  img1,
  img2,
  img3,
  img4
];

const fadeImages = [
    {
      url:img1,
      caption: 'First Slide'
    },
    {
      url: img2,
      caption: 'Second Slide'
    },
    {
      url: img3,
      caption: 'Third Slide'
    },
    {
      url: img4,
      caption: 'Third Slide'
    },
  ];

const Zoomshow = () => {
    return (
      <div className="slide-container">
        <Zoom scale={0.4}>
          {
            images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
          }
        </Zoom>
      </div>
    )
}


const Fadeshow = () => {
    return (
      <div className="slide-container">
        <Fade>
          {fadeImages.map((fadeImage, index) => (
            <div key={index}>
              <img style={{ width: '100%' }} src={fadeImage.url} />
              <h2>{fadeImage.caption}</h2>
            </div>
          ))}
        </Fade>
      </div>
    )
  }


  const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    // height: '400px'
  }


  const Slideshow = () => {
    return (
      <div className="slide-container">
        <Slide>
         {fadeImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle }}>
                <img src={slideImage.url} alt="" style={{"margin":"0 20px;"}} />
                <span style={spanStyle}>{slideImage.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


export default Slideshow