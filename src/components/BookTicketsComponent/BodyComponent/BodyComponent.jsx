import React, { Component } from 'react'
import './BodyStyling/BodyStyling.css'

export default class BodyComponent extends Component {
  render() {
    return (
      <div className='book-tickets__body'>
        <div className="body__content">
          <div id='content__form' className="card container mx-auto my-5">
            <div className="card-body">
              <span className='body__title text-left d-block py-3'>Fill The Required Details Below And Select Your Seats</span>
              {/* Input fields */}
              <div className="form-group body__input__fields">
                <div className="row">
                  <div className="col-md-8">
                    <label className='d-block text-left' htmlFor="name__input">Name <span className='text-danger'>*</span></label>
                    <input id='name__input' type="text" className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label className='d-block text-left' htmlFor="number__seat__input">Number of Seats <span className='text-danger'>*</span></label>
                    <input id='number__seat__input' type="number" className="form-control" />
                  </div>
                </div>
              </div>
              {/* Action button */}
              <div className="body__select__btn py-3">
                <button className='btn btn-outline-dark text-left d-block'>Start Selecting</button>
              </div>
              {/* Seat status */}
              <div className="body__seat__label d-block text-left">
                <span className='selected__seat'>Selected Seat</span>
                <span className='reserved__seat'>Reserved Seat</span>
                <span className='empty__seat'>Empty Seat</span>
              </div>
              {/* Screen label */}
              <div className="body__screen">
                <span className='screen__label'>screen this way</span>
              </div>
              {/* Confirm button */}
              <div className="body__confirm__btn py-4">
                <button className='btn btn-outline-dark'>Confirm Selection</button>
              </div>
              {/* Table */}
              <div className="body__table">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Number of Seats</th>
                      <th>Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
