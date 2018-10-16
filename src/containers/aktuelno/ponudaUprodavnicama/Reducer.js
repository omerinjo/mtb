
export default function (state={}, action) {
    switch (action.type) {
        case "FETCH_PONUDAUPRODAVNICAMA_REQUEST":
            break;
        case "FETCH_PONUDAUPRODAVNICAMA_SUCCESS":
            state = {
                ...state,
                post: action.payload,
                indicator: false,
                msg: 'success'
            }
            break;
        case "FETCH_PONUDAUPRODAVNICAMA_FAILURE":
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