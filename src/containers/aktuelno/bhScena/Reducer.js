
export default function (state={}, action) {
    switch (action.type) {
        case "FETCH_BHSCENA_REQUEST":
            break;
        case "FETCH_BHSCENA_SUCCESS":
            state = {
                ...state,
                post: action.payload,
                indicator: false,
                msg: 'success'
            }
            break;
        case "FETCH_BHSCENA_FAILURE":
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