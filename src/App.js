import logo from './logo.svg';
import './App.css';
import Situation from './Component/Situation'
import Option from './Component/Option'
import Result from './Component/Result'

import React, { Component } from 'react';

export default class App extends Component {

  data = [
    {
      question: require('./images/options/question1.jpg'),
      options: [
        {
          marks: 3,
          name: 'Select 1',
          image: require('./images/options/option1.1.png'),
          feedBack: "/images/options/feedback1.1.png",
        },
        {
          marks: 3,
          name: 'Select 2',
          image: require('./images/options/option1.2.png'),
          feedBack: '/images/options/feedback1.2.png'

        },
        {
          marks: 5,
          name: 'Select 3',
          image: require('./images/options/option1.3.png'),
          feedBack: '/images/options/feedback1.3.png'
        }
      ]
    },
    {
      question: require('./images/options/question2.png'),
      options: [
        {
          marks: 3,
          name: 'Select 1',
          image: require('./images/options/option2.1.png'),
          feedBack: '/images/options/feedback1.1.png'
        },
        {
          marks: 3,
          name: 'Select 2',
          image: require('./images/options/option2.2.png'),
          feedBack: '/images/options/feedback1.2.png'
        },
        {
          marks: 5,
          name: 'Select 3',
          image: require('./images/options/option2.3.png'),
          feedBack: '/images/options/feedback1.3.png'
        }
      ]
    }

  ]



  state = {
    marksObt: 0,
    totalMarks: 16,
    slide: true,
    currentFeedBackURL: null
  }


  updateMarks = (marks) => {
    this.setState(
      {
        marksObt: this.state.marksObt + marks
      })
  }

  goToNextSlide = () => {
    this.setState(
      {
        slide: this.state.slide + 1,
        currentFeedBackURL: ''
      }
    )
  }

  renderFeedBack = (path) => {
    return (
      <div className='situation'>
        <img id='situationImg' src={require(`.${path}`)} />
      </div>
    )
  }

  updatFeedbackState = (path) => {
    this.setState(
      {
        currentFeedBackURL: path
      }
    )
  }


  render() {
    return (
      <div className="App" >

        {
          this.state.slide == 1 ? (
            <div className='container'>
              <Situation data={this.data[0]} />
              <Option data={this.data[0]} updatFeedbackState={this.updatFeedbackState} updateMarks={this.updateMarks} />
              {this.state.currentFeedBackURL ? this.renderFeedBack(this.state.currentFeedBackURL) : <Result context={this} />
              }
            </div>

          ) :
            null
        }
        {
          this.state.slide == 2 ? (
            <div className='container'>
              <Situation data={this.data[1]} />
              <Option data={this.data[1]} updatFeedbackState={this.updatFeedbackState} updateMarks={this.updateMarks} />
              {this.state.currentFeedBackURL ? this.renderFeedBack(this.state.currentFeedBackURL) : <Result context={this} />
              }
            </div>
          ) :
            null
        }
        {
          this.state.slide == 3 ? (
            <div className='container'>
              <p>{`total Marks ${this.state.marksObt} /${this.state.totalMarks} `}</p>
            </div>
          ) : null
        }
        <div className='nextQuestion'>
          {this.state.slide != 3 ? <button onClick={() => { this.goToNextSlide() }} >Next Question</button> : null}
        </div>
      </div >
    );
  }
}





