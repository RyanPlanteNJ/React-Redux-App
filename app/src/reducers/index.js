import { 
    FETCH_RICKNMORTY, 
    FETCH_RICKNMORTY_SUCCESS, 
    FETCH_RICKNMORTY_FAILURE 
} from '../actions';

const initialState = {
    character: [],
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_RICKNMORTY:
            return {
                ...state,
                error: '',
                isFetching: true
            };
        case FETCH_RICKNMORTY_SUCCESS:
            return {
                ...state,
                error: '',
                isFetching: false,
                character: action.payload
            };
        case FETCH_RICKNMORTY_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false
            };
        default:
            return state;
    }
}

export default reducer;