import csrfFetch from "./csrf"


export const fetchBenches = () => async dispatch => {
    const res = await csrfFetch("/api/benches");
    const data = await res.json();
    console.log(data);
}   