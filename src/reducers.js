import { CHANGE_SEARCH_FIELD,
    REQUEST_DEVELOPERS_PENDING,
    REQUEST_DEVELOPERS_SUCCESS,
    REQUEST_DEVELOPERS_FAILED } from './constants';

const initialStateSearch = {
    searchField: ''
}

export const searchDevelopers = (state=initialStateSearch, action={})=> {
 switch(action.type) {
     case CHANGE_SEARCH_FIELD:
        return Object.assign({},state, { searchField:action.payload });
    default:
        return state;
 }
}

const initialStateDevelopers = {
 isPending: false,
 developers:[],
 error:''
}

export const requestDevelopers = (state=initialStateDevelopers, action={}) => {
    switch(action.type) {
        case REQUEST_DEVELOPERS_PENDING:
        return Object.assign({}, state, {isPending: true})
        case REQUEST_DEVELOPERS_SUCCESS:
        return Object.assign({}, state, {developers: action.payload, isPending: false})
        case REQUEST_DEVELOPERS_FAILED:
        return Object.assign({},state, {error: action.payload, isPending:false})
        default:
            return state;

    }
}