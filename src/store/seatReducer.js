import { isDisabled } from "@testing-library/user-event/dist/utils";
import data from "./data.json";

const initialState = {
    listSeat: data,
    info :{
        name:"",
        seat: "",
        disabled: true,
        checkedValue: [],
    },
    
    
}

const seatReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "INPUT_INFO":
            const newInfo = action.payload;
            state.info = newInfo;
            return { ...state };

        case "CF_DISABLE":
            const newDisable = action.payload;
            state.info.disabled = newDisable;
            return { ...state };

        case "CF_VALUE":
            const newValue = action.payload;
            state.info.disabled = newDisable;
            return { ...state };


        default:
            return { ...state };
    }
}
export default seatReducer;