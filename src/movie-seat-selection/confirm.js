import React, { Component } from 'react';
import { connect } from "react-redux";

class Confirm extends Component {
    render() {
        return (
            <div>
                <button type="button" data-toggle="button" aria-pressed="false" className= ' btn btn-primary btn-block'  >Confirm Selection</button>

                <div className="displayerBoxes txt-center" style={{ overflowX: 'auto' }}>
                    <table className="Displaytable w3ls-table" width="100%">
                        <tbody><tr>
                            <th>Name</th>
                            <th>Number of Seats</th>
                            <th>Seats</th>
                        </tr>
                            <tr>
                                <td>
                                    <textarea id="nameDisplay" disabled defaultValue={""} />
                                </td>
                                <td>
                                    <textarea id="NumberDisplay" disabled defaultValue={""} />
                                </td>
                                <td>
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

// const mapStateToProps = (state) =>{
//     return {
//       info : state.userReducer.info,
//     }
// }  connect(mapStateToProps , null)
export default  (Confirm)
