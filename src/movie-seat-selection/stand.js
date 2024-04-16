import React, { Component } from 'react';
import Seat from './seat';
import { connect } from "react-redux";

class Stand extends Component {
    renderListSeat = () => {
        const { listSeat } = this.props;
        return listSeat?.map((seat) => {
            return (
                <div >
                    <Seat
                        seat={seat}
                    />
                </div>
                
            )
        })
    }

    render() {
        return (
            <div className='widthSeat'>
                <ul className="seat_w3ls d-flex">
                    <li className="smallBox greenBox">Selected Seat</li>
                    <li className="smallBox redBox">Reserved Seat</li>
                    <li className="smallBox emptyBox">Empty Seat</li>
                </ul>

                
                {this.renderListSeat()}
                <div className="screen">
                    <h2 className="wthree">Screen this way</h2>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
    }
};
export default connect(mapStateToProps, null)(Stand);