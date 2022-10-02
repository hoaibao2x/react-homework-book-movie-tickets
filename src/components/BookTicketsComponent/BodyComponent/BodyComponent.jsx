import React, { Component } from 'react'
import './BodyStyling/BodyStyling.css'
import '../../../js/disabledScrollEvent.js'

export default class BodyComponent extends Component {

  seatsList = [
    {
      "hang": "",
      "danhSachGhe": [
        { "soGhe": "1", "gia": 0 },
        { "soGhe": "2", "gia": 0 },
        { "soGhe": "3", "gia": 0 },
        { "soGhe": "4", "gia": 0 },
        { "soGhe": "5", "gia": 0 },
        { "soGhe": "6", "gia": 0 },
        { "soGhe": "7", "gia": 0 },
        { "soGhe": "8", "gia": 0 },
        { "soGhe": "9", "gia": 0 },
        { "soGhe": "10", "gia": 0 },
        { "soGhe": "11", "gia": 0 },
        { "soGhe": "12", "gia": 0 }
      ]
    }
    ,
    {
      "hang": "A",
      "danhSachGhe": [
        { "soGhe": "A1", "gia": 75000, "daDat": false },
        { "soGhe": "A2", "gia": 75000, "daDat": false },
        { "soGhe": "A3", "gia": 75000, "daDat": false },
        { "soGhe": "A4", "gia": 75000, "daDat": false },
        { "soGhe": "A5", "gia": 75000, "daDat": false },
        { "soGhe": "A6", "gia": 75000, "daDat": false },
        { "soGhe": "A7", "gia": 75000, "daDat": false },
        { "soGhe": "A8", "gia": 75000, "daDat": false },
        { "soGhe": "A9", "gia": 75000, "daDat": false },
        { "soGhe": "A10", "gia": 75000, "daDat": false },
        { "soGhe": "A11", "gia": 0, "daDat": true },
        { "soGhe": "A12", "gia": 0, "daDat": true }
      ]
    },
    {
      "hang": "B",
      "danhSachGhe": [
        { "soGhe": "B1", "gia": 75000, "daDat": false },
        { "soGhe": "B2", "gia": 75000, "daDat": false },
        { "soGhe": "B3", "gia": 75000, "daDat": false },
        { "soGhe": "B4", "gia": 75000, "daDat": false },
        { "soGhe": "B5", "gia": 75000, "daDat": false },
        { "soGhe": "B6", "gia": 75000, "daDat": false },
        { "soGhe": "B7", "gia": 75000, "daDat": false },
        { "soGhe": "B8", "gia": 75000, "daDat": false },
        { "soGhe": "B9", "gia": 75000, "daDat": false },
        { "soGhe": "B10", "gia": 75000, "daDat": false },
        { "soGhe": "B11", "gia": 75000, "daDat": false },
        { "soGhe": "B12", "gia": 75000, "daDat": false }
      ]
    },
    {
      "hang": "C",
      "danhSachGhe": [
        { "soGhe": "C1", "gia": 75000, "daDat": false },
        { "soGhe": "C2", "gia": 75000, "daDat": false },
        { "soGhe": "C3", "gia": 75000, "daDat": false },
        { "soGhe": "C4", "gia": 75000, "daDat": false },
        { "soGhe": "C5", "gia": 75000, "daDat": false },
        { "soGhe": "C6", "gia": 75000, "daDat": false },
        { "soGhe": "C7", "gia": 75000, "daDat": false },
        { "soGhe": "C8", "gia": 75000, "daDat": false },
        { "soGhe": "C9", "gia": 75000, "daDat": false },
        { "soGhe": "C10", "gia": 75000, "daDat": false },
        { "soGhe": "C11", "gia": 75000, "daDat": false },
        { "soGhe": "C12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "D",
      "danhSachGhe": [
        { "soGhe": "D1", "gia": 75000, "daDat": false },
        { "soGhe": "D2", "gia": 75000, "daDat": false },
        { "soGhe": "D3", "gia": 75000, "daDat": false },
        { "soGhe": "D4", "gia": 75000, "daDat": false },
        { "soGhe": "D5", "gia": 75000, "daDat": false },
        { "soGhe": "D6", "gia": 75000, "daDat": false },
        { "soGhe": "D7", "gia": 75000, "daDat": false },
        { "soGhe": "D8", "gia": 75000, "daDat": false },
        { "soGhe": "D9", "gia": 75000, "daDat": false },
        { "soGhe": "D10", "gia": 75000, "daDat": false },
        { "soGhe": "D11", "gia": 75000, "daDat": false },
        { "soGhe": "D12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "E",
      "danhSachGhe": [
        { "soGhe": "E1", "gia": 75000, "daDat": false },
        { "soGhe": "E2", "gia": 75000, "daDat": false },
        { "soGhe": "E3", "gia": 75000, "daDat": false },
        { "soGhe": "E4", "gia": 75000, "daDat": false },
        { "soGhe": "E5", "gia": 75000, "daDat": false },
        { "soGhe": "E6", "gia": 75000, "daDat": false },
        { "soGhe": "E7", "gia": 75000, "daDat": false },
        { "soGhe": "E8", "gia": 75000, "daDat": false },
        { "soGhe": "E9", "gia": 75000, "daDat": false },
        { "soGhe": "E10", "gia": 75000, "daDat": false },
        { "soGhe": "E11", "gia": 75000, "daDat": false },
        { "soGhe": "E12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "F",
      "danhSachGhe": [
        { "soGhe": "F1", "gia": 75000, "daDat": false },
        { "soGhe": "F2", "gia": 75000, "daDat": false },
        { "soGhe": "F3", "gia": 75000, "daDat": false },
        { "soGhe": "F4", "gia": 75000, "daDat": false },
        { "soGhe": "F5", "gia": 75000, "daDat": false },
        { "soGhe": "F6", "gia": 75000, "daDat": false },
        { "soGhe": "F7", "gia": 75000, "daDat": false },
        { "soGhe": "F8", "gia": 75000, "daDat": false },
        { "soGhe": "F9", "gia": 75000, "daDat": false },
        { "soGhe": "F10", "gia": 75000, "daDat": false },
        { "soGhe": "F11", "gia": 75000, "daDat": false },
        { "soGhe": "F12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "G",
      "danhSachGhe": [
        { "soGhe": "G1", "gia": 75000, "daDat": false },
        { "soGhe": "G2", "gia": 75000, "daDat": false },
        { "soGhe": "G3", "gia": 75000, "daDat": false },
        { "soGhe": "G4", "gia": 75000, "daDat": false },
        { "soGhe": "G5", "gia": 75000, "daDat": false },
        { "soGhe": "G6", "gia": 75000, "daDat": false },
        { "soGhe": "G7", "gia": 75000, "daDat": false },
        { "soGhe": "G8", "gia": 75000, "daDat": false },
        { "soGhe": "G9", "gia": 75000, "daDat": false },
        { "soGhe": "G10", "gia": 75000, "daDat": false },
        { "soGhe": "G11", "gia": 75000, "daDat": false },
        { "soGhe": "G12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "H",
      "danhSachGhe": [
        { "soGhe": "H1", "gia": 75000, "daDat": false },
        { "soGhe": "H2", "gia": 75000, "daDat": false },
        { "soGhe": "H3", "gia": 75000, "daDat": false },
        { "soGhe": "H4", "gia": 75000, "daDat": false },
        { "soGhe": "H5", "gia": 75000, "daDat": false },
        { "soGhe": "H6", "gia": 75000, "daDat": false },
        { "soGhe": "H7", "gia": 75000, "daDat": false },
        { "soGhe": "H8", "gia": 75000, "daDat": false },
        { "soGhe": "H9", "gia": 75000, "daDat": false },
        { "soGhe": "H10", "gia": 75000, "daDat": false },
        { "soGhe": "H11", "gia": 75000, "daDat": false },
        { "soGhe": "H12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "I",
      "danhSachGhe": [
        { "soGhe": "I1", "gia": 75000, "daDat": false },
        { "soGhe": "I2", "gia": 75000, "daDat": false },
        { "soGhe": "I3", "gia": 75000, "daDat": false },
        { "soGhe": "I4", "gia": 75000, "daDat": false },
        { "soGhe": "I5", "gia": 75000, "daDat": false },
        { "soGhe": "I6", "gia": 75000, "daDat": false },
        { "soGhe": "I7", "gia": 75000, "daDat": false },
        { "soGhe": "I8", "gia": 75000, "daDat": false },
        { "soGhe": "I9", "gia": 75000, "daDat": false },
        { "soGhe": "I10", "gia": 75000, "daDat": false },
        { "soGhe": "I11", "gia": 75000, "daDat": false },
        { "soGhe": "I12", "gia": 75000, "daDat": false }
      ]
    }, {
      "hang": "J",
      "danhSachGhe": [
        { "soGhe": "J1", "gia": 75000, "daDat": false },
        { "soGhe": "J2", "gia": 75000, "daDat": false },
        { "soGhe": "J3", "gia": 75000, "daDat": false },
        { "soGhe": "J4", "gia": 75000, "daDat": false },
        { "soGhe": "J5", "gia": 75000, "daDat": false },
        { "soGhe": "J6", "gia": 75000, "daDat": false },
        { "soGhe": "J7", "gia": 75000, "daDat": false },
        { "soGhe": "J8", "gia": 75000, "daDat": false },
        { "soGhe": "J9", "gia": 75000, "daDat": false },
        { "soGhe": "J10", "gia": 75000, "daDat": false },
        { "soGhe": "J11", "gia": 75000, "daDat": false },
        { "soGhe": "J12", "gia": 75000, "daDat": false }
      ]
    }

  ]

  state = {
    userName: '',
    numberOfSeat: 0,
    seatsArr: [],
    confirmSelected: false,
    displayWarnTitle: 'none',
    test: ''
  }

  handleChange = (name, value) => {
    this.setState({
      [name]: value,
    })
  }

  confirmInput = () => {
    let { userName, numberOfSeat } = this.state;
    if (userName === '' || numberOfSeat === 0) {
      alert('Please input valid data !');
    } else {
      this.setState({
        displayWarnTitle: 'block'
      })
    }
  }

  checkItem = (value) => {
    for (let i = 0; i < this.state.seatsArr.length; i++) {
      if (value === this.state.seatsArr[i]) {
        return '#ff9800'
      }
    }
  }

  addSeat = (seatName) => {
    if (this.state.displayWarnTitle === 'block') {
      let { numberOfSeat, seatsArr } = this.state;
      // Check seatName is exist seatsArr ?
      for (let i = 0; i < seatsArr.length; i++) {
        if (seatName === seatsArr[i]) {
          seatsArr.pop(seatName);
        }
      }
      if (seatsArr.length < numberOfSeat) {
        seatsArr.push(seatName);
        this.setState({
          seatsArr: [...seatsArr],
        })
        this.checkItem(seatName)
      } else {
        let tempArr = seatsArr.splice(0, numberOfSeat);
        this.setState({
          seatsArr: tempArr
        })
      }
    }
  }

  confirmFnc = () => {
    let { displayWarnTitle } = this.state;
    if (displayWarnTitle === 'block') {
      this.setState({
        confirmSelected: true
      })
    }

  }

  renderResult = () => {
    let { userName, numberOfSeat, seatsArr, confirmSelected } = this.state;
    if (confirmSelected && seatsArr.length > 0) {
      return <>
        <td>{userName}</td>
        <td>{numberOfSeat}</td>
        <td>
          {seatsArr.map((item) => {
            return item + ' '
          })}
        </td>
      </>
    }
  }

  renderSeatsList = () => {
    return this.seatsList.map((seatRow, index) => {
      let { hang } = seatRow;
      return <table key={`table-${index}`} className="table table-borderless mb-0 seat__table">
        <tbody>
          <tr className='seat__row'>
            <td className='text-left font-weight-bold'>{hang}</td>
            {/* Render seat number */}
            {seatRow.danhSachGhe.map((seatName, index) => {
              return <td key={`seat-${index}`}>
                <span onClick={() => {
                  this.addSeat(seatName.soGhe)
                }} className='seat'
                  style={{ background: `${this.checkItem(seatName.soGhe)}` }} >
                  {seatName.soGhe}
                </span>
              </td>
            })}
          </tr>
        </tbody>
      </table>
    })
  }

  render() {
    return (
      <div className='book-tickets__body'>
        <div className="body__content">
          <div id='content__form' className="card container mx-auto my-5">
            <div className="card-body">
              <span className='body__title font-weight-bold text-left d-block py-3'>Fill The Required Details Below And Select Your Seats</span>
              {/* Input fields */}
              <div className="form-group body__input__fields">
                <div className="row">
                  <div className="col-md-8">
                    <label className='d-block text-left font-weight-bold' htmlFor="name__input">Name <span className='text-danger'>*</span></label>
                    <input onChange={(event) => {
                      let { name, value } = event.target;
                      this.handleChange(name, value);
                    }} id='name__input' name='userName' type="text" className="form-control" />
                  </div>
                  <div className="col-md-4">
                    <label className='d-block text-left font-weight-bold' htmlFor="number__seat__input">Number of Seats <span className='text-danger'>*</span></label>
                    <input onChange={(event) => {
                      let { name, value } = event.target;
                      this.handleChange(name, value);
                    }} id='number__seat__input' name='numberOfSeat' type="number" min={1} className="form-control" />
                  </div>
                </div>
              </div>
              {/* Action button */}
              <div className="body__select__btn py-3">
                <button onClick={() => {
                  this.confirmInput()
                }} className='btn btn-info text-left d-block'>Start Selecting</button>
              </div>
              {/* Seat status */}
              <div className="body__seat__label d-block text-left">
                <span className='seat__status selected__seat'>Selected Seat</span>
                <span className='seat__status reserved__seat'>Reserved Seat</span>
                <span className='seat__status empty__seat'>Empty Seat</span>
              </div>
              {/* Warn label */}
              <div className="body__warn" style={{ display: `${this.state.displayWarnTitle}` }}>
                <span className='warn__title d-block w-50 mx-auto my-5'>Please Select your Seats NOW!</span>
              </div>
              {/* Seats List */}
              <div className="body__seats">
                {this.renderSeatsList()}
              </div>
              {/* Screen label */}
              <div className="body__screen">
                <span className='screen__label'>screen this way</span>
              </div>
              {/* Confirm button */}
              <div className="body__confirm__btn py-4">
                <button onClick={() => {
                  this.confirmFnc()
                }} className='btn btn-success'>Confirm Selection</button>
              </div>
              {/* Table */}
              <div className="body__table">
                <table className="table bg-dark text-white table-bordered">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Number of Seats</th>
                      <th>Seats</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {this.renderResult()}
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
