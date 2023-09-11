// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isFaqActive: false}

  changeIcon = () => {
    this.setState(pre => ({isFaqActive: !pre.isFaqActive}))
  }

  renderFunc = () => {
    const {isFaqActive} = this.state
    const {each} = this.props
    const {answerText} = each
    if (isFaqActive === true) {
      return (
        <>
          <hr className="hor" />
          <p className="para">{answerText}</p>
        </>
      )
    }
    return null
  }

  render() {
    const {isFaqActive} = this.state
    const {each} = this.props
    const {questionText} = each

    const altText = isFaqActive ? 'minus' : 'plus'
    const imgIcon = isFaqActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    return (
      <li className="list-con">
        <div className="list-con-text">
          <h1>{questionText}</h1>
          <button onClick={this.changeIcon} className="but" type="button">
            <img alt={altText} className="plus-icon" src={imgIcon} />
          </button>
        </div>
        {this.renderFunc()}
      </li>
    )
  }
}

export default FaqItem
