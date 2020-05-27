import { FETCH_RICKNMORTY } from '../actions';

const initialState = {
    id: '1',
    error: '',
    isFetching: false
};

function reducer(state = initialState, action) {
    console.log('reducer', action);
    switch(action.type) {
        case FETCH_RICKNMORTY:
            return {
                ...state,
                isFetching: true,
            };
        default:
            return state;
    }
}

export default reducer;