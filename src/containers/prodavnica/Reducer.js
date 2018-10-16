
export default function (state={}, action) {
    switch (action.type) {
        case "FETCH_PRODAVNICE_REQUEST":
            break;
        case "FETCH_PRODAVNICE_SUCCESS":
            state = {
                ...state,
                prodavnice: action.payload,
                indicator: false,
                msg: 'success'
            }
            break;
        case "FETCH_PRODAVNICE_FAILURE":
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