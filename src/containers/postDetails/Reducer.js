
export default function (state={}, action) {
    switch (action.type) {
        case "FETCH_POST_DETAILS_REQUEST":
            break;
        case "FETCH_POST_DETAILS_SUCCESS":
            state = {
                ...state,
                post: action.payload,
                indicator: false,
                msg: 'success'
            }
            break;
        case "FETCH_POST_DETAILS_FAILURE":
            state = {
                ...state,
                error: action.payload,
                indicator: true,
                msg: 'failure'
            }
            break;
        default:
            state
    }
    return state
}