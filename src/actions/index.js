import $ from 'jquery-ajax';

// trigger the process, make the request, and call the other two actions
export function fetchVideos(category) {
    // when using async actions and thunk, instead of returning the action object,
    // we return a callback function. This has a `dispatch` parameter that we
    // can use to dispatch other actions whenever we want.
    return function(dispatch) {
        dispatch(requestVideos());
        $.get("https://content.googleapis.com/youtube/v3/search?q=" + category + "photography&maxResults=25&part=snippet&key=AIzaSyCvpOFekKCjVUrLFpUS-3NKfg_GlwU7_io", function(data) {
            // Here is where we dig into the response JSON to find the data we actually need.
            const youtubeVideos = data.items;
            dispatch(receiveVideos(youtubeVideos));
        });
    }
}

// Allow the reducer to update the state when the request starts loading.
function requestVideos() {
    return {
        type: "REQUEST_VIDEOS"
    }
}

// Allow the reducer to update the state when the request finishes and brings back data.
function receiveVideos(youtubeVideos) {
    return {
        type: "RECEIVE_VIDEOS",
        youtubeVideos
    }
}
