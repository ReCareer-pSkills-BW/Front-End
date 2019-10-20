import { axiosWithLoginAuth } from '../utils/axiosWithLoginAuth';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE ='LOAD_FAILURE';

// React 2 stuff, feel free to check it out

export const fetchData = () => (dispatch) => {
    dispatch({type: LOAD_DATA })
    axiosWithLoginAuth()
    .get('')
        .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data.data}))
        .catch(err => dispatch({ type: LOAD_FAILURE, payload: err.response}))
}
