import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import '../../App.css'

export default class componentName extends Component {

    slideImages = [
        'https://via.placeholder.com/150/92c952',
        'https://via.placeholder.com/150/d32776',
        'https://via.placeholder.com/150/771796'
    ];

    Slideshow = () => {
        return (
            <div className="slide-container">
                <Zoom scale={0.4}>
                    {
                        this.slideImages.map((each, index) => <img key={index} style={{ width: "100%" }} src={each} />)
                    }
                </Zoom>
            </div>
        )
    }

    render() {
        return (
            <div className='slider'>
                {
                    this.Slideshow()
                }
            </div>
        );
    }
}



