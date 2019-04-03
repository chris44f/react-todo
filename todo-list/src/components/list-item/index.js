import React from 'react';
import './index.css';

export default class ListItem extends React.Component {

  datedListItem = () => {
    const month = new Date().getMonth() + 1
    const day = new Date().getDate()
    const year = new Date().getFullYear()
    return (day.toString() + "/" + month.toString() + "/" + year.toString())
  }

  render() {
    let className = 'unchecked'
    if (this.props.complete) {
      className = 'checked'
    }
    return (
      <tr>
        <td className="column-priority"> {this.props.number}</td>
        <td className="column-title" className={className}> {this.props.text}</td>
        <td className="column-date"> {this.props.complete ? 'Complete!' : this.datedListItem() }</td>
        <td className="column-status"><input type="checkbox" checked={this.props.complete ? true : false} onChange={() => this.props.toggle(this.props.number)}/></td>
        <button onClick={() => this.props.removeItem(this.props.number)} > Delete item </button>
        <button onClick={() => this.props.handleUp(this.props.number)}>&#8679;</button>
        <button onClick={() => this.props.handleDown(this.props.number)}>&#8681;</button>
      </tr>
    )
  }
}
