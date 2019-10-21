import { axiosWithLoginAuth } from '../utils/axiosWithLoginAuth';
import axios from 'axios';

export const LOAD_DATA = 'LOAD_DATA';
export const LOAD_SUCCESS = 'LOAD_SUCCESS';
export const LOAD_FAILURE ='LOAD_FAILURE';

// React 2 stuff, feel free to check it out

export const fetchData = () => (dispatch) => {
    dispatch({type: LOAD_DATA })
    axios
    .get('https://date.nager.at/api/v2/PublicHolidays/2017/AT')
        .then(res => dispatch({ type: LOAD_SUCCESS, payload: res.data}))
        .catch(err => dispatch({ type: LOAD_FAILURE, payload: err.response}))
}
