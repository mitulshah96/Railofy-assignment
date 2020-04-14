import { GET_MOVIE_REQUEST, GET_MOVIE, GET_MOVIE_FAILURE } from '../constant';

export const initialState = {
    loading: false,
    loaded: false,
    data: [],
};

export function reducer(state, action) {
    switch (action.type) {
        case GET_MOVIE_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case GET_MOVIE:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: action.payload.Search,
            };
        case GET_MOVIE_FAILURE:
            return {
                ...state,
                loading: false,
                loaded: true,
                data: [],
            };
        default:
            return state;
    }
}
