import React from 'react';
import './index.css';

export default class ListItem extends React.Component {

  render() {
    let className = 'unchecked'
    if (this.props.complete) {
      className = 'checked'
    }
    return (
      <div className="listItemWrapper">
        <span className="listItemWrapperElement"> {this.props.id}</span>
        <span className="listItemWrapperElement" className={className}> {this.props.text}</span>
        <span className="listItemWrapperElement"> {this.props.complete ? 'complete' : 'need to do'}</span>
        <input type="checkbox" checked={this.props.complete ? true : false} onClick={() => this.props.toggle(this.props.id)}/>
        <button onClick={() => this.props.removeItem(this.props.id)} > Delete item </button>
      </div>
    )
  }
}
