import React, {Component} from 'react';
import './Color.scss'

class Color extends Component {
  constructor (props) {
    super (props)
    this.state = {
      
    }
  }

  render () {
    return (
      <div className='Color'>
        <button onClick={() => this.props.toggleLock(this.props.id)}>Unlocked</button>
        <h3>Hex Code:{this.props.hexCode}</h3>
      </div>
    )
  }
}

export default Color;