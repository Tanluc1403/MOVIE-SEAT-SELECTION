import React, { Component } from 'react';
import { connect } from "react-redux";
import Seat from './seat';


class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            seat: "",
            disabled: false,
            text : false,
            confirm: true,
              
        };
        this.inputRef = React.createRef();
        
    }
    handleOnchange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        if (this.state.name == "" || this.state.seat == "") {
            alert("Please Enter your Name and Number of Seats")

        } else {
            this.setState({
                text: true
            });
            this.props.submitInfo(this.state);

            //disabled input-name
            if (this.inputRef.current) {
                this.inputRef.current.disabled = true;
              }
            
            //disable input-seat
            const numberInput = document.querySelector('input[type="number"]');
            if (numberInput) {
                numberInput.disabled = true;
              }
        }

    };
    


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

    handleConfirm = () => {
        if(this.state.name  && this.state.seat  && this.props.valueChecked ){
            this.setState({
                confirm: false,
            })
        }else{
            console.log("error")
        }
    }

    

    render() {
        return (
            <div className="w3ls-reg ">
                <h2> Fill The Required Details Below And Select Your Seats </h2>

                {/* INPUT  */}
                <div className="mr_agilemain">
                    <div className="agileits-left">
                        <label> Name
                            <span>*</span>
                        </label>
                        <input
                            type="text"
                            id="Username"
                            required
                            name="name"
                            onChange={this.handleOnchange}
                            value={this.state.name}
                            ref={this.inputRef} 
                            disabled={false}
                        />
                    </div>
                    <div className="agileits-right">
                        <label> Number of Seats
                            <span>*</span>
                        </label>
                        <input
                            type="number"
                            id="Numseats"
                            required min={1}
                            max={120}
                            name="seat"
                            onChange={this.handleOnchange}
                            value={this.state.seat}
                            
                        />
                    </div>
                </div>

                {/* BUTTON_START_SELECTION */}
                <button
                    id='button1'
                    class="btn btn-primary"
                    type="button" data-toggle="button"
                    aria-pressed="false"
                    onClick={this.handleSubmit}
                >
                    Start Selecting
                </button>


                {/* SEAT_SELECTION */}
                
                <div className='widthSeat'>
                    <ul className="seat_w3ls d-flex">
                        <li className="smallBox greenBox">Selected Seat</li>
                        <li className="smallBox redBox">Reserved Seat</li>
                        <li className="smallBox emptyBox">Empty Seat</li>
                    </ul>

                    {this.state.text === true ? <p className='textSeat'>Please select {this.state.seat} seats </p> :  <p></p>}

                    {this.renderListSeat()}
                    <div className="screen">
                        <h2 className="wthree">Screen this way</h2>
                    </div>
                </div>


                {/* CONFIRM  */}
                <button 
                type="button" 
                data-toggle="button" 
                aria-pressed="false" 
                className=' btn btn-primary btn-block'  
                onClick={this.handleConfirm}
                >
                    Confirm Selection
                </button>
                <div className="displayerBoxes txt-center" >
                    <table className="Displaytable w3ls-table" width="100%">
                        <tbody><tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                            
                        </tr>
                            <tr>
                                <td>
                                    {this.state.confirm === false ? <p className='textSeat'>{this.state.name}</p>:  ""}
                                    <textarea id="nameDisplay" disabled defaultValue={""} />
                                </td>
                                <td>{this.state.confirm === false ? <p className='textSeat'>{this.state.seat}</p>:  ""}
                                    <textarea id="NumberDisplay" disabled defaultValue={""} />
                                </td>
                                <td>{this.state.confirm === false ? <p className='textSeat'>{this.props.valueChecked}</p>:  ""}
                                    <textarea id="seatsDisplay" disabled defaultValue={""} />
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        submitInfo: (info) => {

            const action = {
                type: "INPUT_INFO",
                payload: info,
            };
            dispatch(action);
        },

        
    };
};
const mapStateToProps = (state) => {
    return {
        listSeat: state.seatReducer.listSeat,
        valueChecked: state.seatReducer.info.disabled.checkedValues,
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Content)
