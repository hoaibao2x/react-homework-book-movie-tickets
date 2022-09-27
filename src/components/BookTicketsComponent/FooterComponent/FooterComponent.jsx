import React, { Component } from 'react'
import './FooterStyling/FooterStyling.css'

export default class FooterComponent extends Component {
  render() {
    return (
      <div className='book-tickets__footer'>
        <div className="footer__content">
          <span className='content__title'>© 2022 Movie Seat Selection . All Rights Reserved | Design by Hoai Bao</span>
        </div>
      </div>
    )
  }
}
