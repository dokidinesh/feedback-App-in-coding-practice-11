// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    isFeedbackSelected: false,
  }

  setIsFeedbackSelected = () => {
    this.setState({isFeedbackSelected: true})
  }

  renderFeedbackQuestion() {
    const {feedbackData} = this.props
    const {emojis} = feedbackData

    return (
      <div className="feedback-app-container">
        <div className="feedback-container">
          <h1>How satisfied are you with our customer support performance</h1>
          <div className="emojis-container">
            {emojis.map(eachEmoji => {
              const {name, imageUrl} = eachEmoji

              return (
                <button
                  onClick={this.setIsFeedbackSelected}
                  type="button"
                  className="each-emoji-container"
                >
                  <img alt="emoji" className="emoji-image" src={imageUrl} />
                  <p>{name}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  renderFeedbackSummary() {
    const {feedbackData} = this.props
    const {loveEmojiUrl} = feedbackData
    return (
      <div>
        <img src={loveEmojiUrl} alt="love" />
        <h1>Thank you!</h1>
        <p>
          We will use your feedback to improve our customer support performance
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div>
        <div>
          {isFeedbackSelected
            ? this.renderFeedbackSummary()
            : this.renderFeedbackQuestion()}
        </div>
      </div>
    )
  }
}

export default Feedback
