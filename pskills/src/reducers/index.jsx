import {LOAD_DATA, LOAD_SUCCESS, LOAD_FAILURE, START_LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, DELETE_DATA, DELETE_SUCCESS, DELETE_FAILURE, EDIT_DATA, EDIT_SUCCESS, EDIT_FAILURE, ADD_DATA, ADD_SUCCESS, ADD_FAILURE } from '../actions/index'

const initialState = {
        jobData: [],
        loading: false,
        error: '',

        user: [
            {
                username: '',
                password: '',
            }
        ],

        candidates: [
            {
                name: '',
                age: '',
                skill: '',
                provider_id: ''
            }
        ]
    
};

// React 2 stuff, feel free to check it out

const reducer = (state=initialState, action) => {
    switch(action.type) {
        case LOAD_DATA:
            return{
                ...state,
                loading: true,
                error: ''
            }
        case LOAD_SUCCESS:
            return {
                ...state,
                loading: false,
                error: '',
                jobData: action.payload
            }
        case LOAD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
            case START_LOGIN:
                return {
                    ...state,
                    loading: true,
                    error: ''
                }
            case LOGIN_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    user: action.payload,
                    error: ''
                }
            case LOGIN_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
                case EDIT_DATA:
                return {
                    ...state,
                    loading: true,
                    error: ''
                }
            case EDIT_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    candidate: action.payload,
                    error: ''
                }
            case EDIT_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
                case DELETE_DATA:
                return {
                    ...state,
                    loading: true,
                    error: ''
                }
            case DELETE_SUCCESS: 
                return {
                    ...state,
                    loading: false,
                    candidate: action.payload,
                    error: ''
                }
            case DELETE_FAILURE:
                return {
                    ...state,
                    loading: false,
                    error: action.payload
                }
                case ADD_DATA:
                    return {
                        ...state,
                        loading: true,
                        error: ''
                    }
                case ADD_SUCCESS: 
                    return {
                        ...state,
                        loading: false,
                        candidate: action.payload,
                        error: ''
                    }
                case ADD_FAILURE:
                    return {
                        ...state,
                        loading: false,
                        error: action.payload
                    }
        default:
            return state;
    }
};

export default reducer;