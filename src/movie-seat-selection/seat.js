import React, { Component } from 'react';
import { connect } from "react-redux";


class Seat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disabled : true,
            checkedValues : [],
        }
        
    };

    handleCheckboxChange = () => {
        
            const checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            const checkedCount = checkedCheckboxes.length;
            
            //số ghế > ghế đã chọn
            if(this.props.Seat > checkedCount){
                console.log("chưa đủ")
            }else{
                console.log("đủ")
                //disable input
                const {checkedValues} = this.state;

                checkedCheckboxes.forEach((checkbox) => {
                checkedValues.push(checkbox.value) ;

                this.props.submitDisable(this.state);

                //disable button(stat seclect)
                const button = document.querySelector('button');
                if (button) {
                    button.disabled = true;
                  }
              });
              
            }
            
        
    }




    render() {
        
        

        const { seat } = this.props;
        this.renderSeat = () => {
            return seat.danhSachGhe?.map((ghe) => {
                if (ghe.soGhe >= 1) {
                    return (
                        <td>
                            {ghe.soGhe}
                        </td>)
                } else {
                    return (
                        <td>
                            <input 
                            onChange={this.handleCheckboxChange} 
                            disabled={this.props.disabled} 
                            type='checkbox' 
                            className='seat' 
                            value={ghe.soGhe}
                            
                            >
                            </input>
                        </td>
                    )
                }
            })
        }
        return (

            <table id="seatsBlock">
                <tbody>
                    <tr>
                        <td>{seat.hang}</td>
                        {this.renderSeat()}
                    </tr>

                </tbody>
            </table>



        )
    }
}
const mapStateToProps = (state) => {
    return {
        disabled: state.seatReducer.info.disabled,
        Seat : state.seatReducer.info.seat,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        submitDisable: (disabled) => {

            const action = {
                type: "CF_DISABLE",
                payload: disabled,
            };
            dispatch(action);
        },

        submitValue: (checkedValues) => {

            const action = {
                type: "CF_VALUE",
                payload: checkedValues,
            };
            dispatch(action);
        },
    }}

export default connect(mapStateToProps, mapDispatchToProps)(Seat)
