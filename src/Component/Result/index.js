import React, { Component } from 'react';
import '../../App.css'

export default class componentName extends Component {
    render(props) {
        let marksObt = this.props.context.state.marksObt
        let totalMarks = this.props.context.state.totalMarks
        let currentFeedBackURL = this.props.context.currentFeedBackURL
        return (
            <div className="result-container">
                <div className='result'>
                    <p class="marks3d">{`${marksObt} /${totalMarks}`}</p>
                </div>
            </div>
        );
    }
}
