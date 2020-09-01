import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { Zoom } from 'react-slideshow-image';
import '../../App.css'

export default class componentName extends Component {




    Slideshow = (optionData, updatFeedbackState, updateMarks) => {
        return (
            <div className="slide-container">
                <Zoom scale={0.1}>
                    {
                        optionData.map((each, index) => {
                            return (
                                <div>
                                    <img key={index} style={{ width: "100%" }} src={each.image} />
                                    <div className={'selectButtonContainer'}>
                                        <button onClick={() => { updatFeedbackState(each.feedBack); updateMarks(each.marks) }}>{each.name}</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Zoom>
            </div>
        )
    }

    render() {
        let optionData = this.props.data.options
        let updatFeedbackState = this.props.updatFeedbackState
        let updateMarks = this.props.updateMarks
        return (
            <div className='slider'>
                {
                    this.Slideshow(optionData, updatFeedbackState, updateMarks)
                }
            </div>
        );
    }
}



