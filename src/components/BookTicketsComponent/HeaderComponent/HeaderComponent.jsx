import React, { Component } from 'react'
import './HeaderStyling/HeaderStyling.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className='book-tickets__header'>
        <div className="header__content">
          <span className='content__title'>movie seat selection</span>
        </div>
      </div>
    )
  }
}
