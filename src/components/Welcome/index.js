// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  onSubscribe = () => {
    this.setState(prevState => ({isSubscribed: !prevState.isSubscribed}))
  }

  getText = () => {
    const {isSubscribed} = this.state

    return isSubscribed ? 'Subscribed' : 'Subscribe'
  }

  render() {
    const text = this.getText()

    return (
      <div className="bg-container">
        <h1>Welcome</h1>
        <p>Thank you! happy learning</p>
        <button type="button" onClick={this.onSubscribe}>
          {text}
        </button>
      </div>
    )
  }
}

export default Welcome
