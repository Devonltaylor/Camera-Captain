const INITIAL_STATE = {
    videos: [],
    isLoading: true,
    showWelcome: true,
    showHub: true
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "REQUEST_VIDEOS":
            return Object.assign({}, state, {
                videos: [],
                isLoading: true
            });
        case "RECEIVE_VIDEOS":
            return Object.assign({}, state, {
                videos: action.youtubeVideos,
                isLoading: false,
                showWelcome: false
            });
        case "CHANGE_CONTENT":
            return Object.assign({}, state, {
                showWelcome: true
            });

        default:
            return state;
    }
}
