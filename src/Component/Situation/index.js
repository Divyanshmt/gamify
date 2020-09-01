import React, { Component } from 'react';



export default class componentName extends Component {
    render() {
        let sitationImage = this.props.data.question
        return (
            <div className='situation'>
                <img id='situationImg' src={sitationImage} />
            </div>
        );
    }
}
