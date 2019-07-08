import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

export class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={this.props.avatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {this.props.author}
        </a>
        <div className="metadata">
          <span className="date">{this.props.timeAgo}</span>
        </div>
        <div className="text">{this.props.content}</div>
      </div>
    </div>
    );
  }
}
