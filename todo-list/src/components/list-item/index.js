import React from 'react';
import './index.css';

export default class ListItem extends React.Component {

  render() {
    console.log(this.props)
    return (
      <div className="listItemWrapper">
        <span className="listItemWrapperElement"> {this.props.id}</span>
        <span className="listItemWrapperElement"> {this.props.text}</span>
        <span className="listItemWrapperElement"> {this.props.complete ? 'complete' : 'need to do'}</span>
        <button onClick={() => this.props.toggle(this.props.complete)}> {this.props.complete ? 'incomplete' : 'completed'}</button>
        <button onClick={() => this.props.removeItem(this.props.id)} > Delete item </button>
      </div>
    )
  }
}
