import csrfFetch from "./csrf"

const SET_BENCHES = 'benches/SET_BENCHES';

export const setBenches = (benches) => {
    return ({
        type: SET_BENCHES,
        benches
    })
}

export const fetchBenches = () => async dispatch => {
    const res = await csrfFetch("/api/benches");
    const data = await res.json();
    dispatch(setBenches(data));
}   


function benchesReducer (state = {}, action) {
    const newState = {...state};

    switch(action.type) {
        case SET_BENCHES:
            return {...newState, ...action.data}
        default:
            return state
    };
    
}


export default benchesReducer;