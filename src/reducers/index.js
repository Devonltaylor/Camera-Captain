const INITIAL_STATE = {
    starships: [],
    isLoading: true
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_STARSHIPS":
            return Object.assign({}, state, {
                starships: [],
                isLoading: true
            });
        case "RECEIVE_STARSHIPS":
            return Object.assign({}, state, {
                starships: action.starships,
                isLoading: false
            });
        default:
            return state;
    }
}
