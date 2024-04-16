import React, { Component } from 'react';
import { connect } from "react-redux";

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            seat: "",
        }
    }

    handleOnchange = (event) => {
        const { name, value } = event.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = () => {
        this.props.submitInfo(this.state);
    };

    render() {
        return (
            <div>
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
                <button 
                class="btn btn-primary" 
                type="button" data-toggle="button" 
                aria-pressed="false" 
                onClick={this.handleSubmit} 
                >
                    Start Selecting
                </button>

            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitInfo: (info) => {
            if (info) {
                const action = {
                    type: "INPUT_INFO",
                    payload: info,
                };
                dispatch(action);
            }
        },
    };
};
export default connect(null, mapDispatchToProps)(InputForm);