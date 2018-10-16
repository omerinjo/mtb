
export default function (state = {}, action) {
    switch (action.type) {
        case "FETCH_IZVJESTAJI_SA_VOZNJE_REQUEST":
            break;
        case "FETCH_IZVJESTAJI_SA_VOZNJE_SUCCESS":
            state = {
                ...state,
                izvjestaji: action.payload,
                indicator: false,
                msg: 'successe'
            }
            break;
        case "FETCH_IZVJESTAJI_SA_VOZNJE_FAILURE":
            state = {
                ...state,
                error: action.payload,
                indicator: true,
                msg: 'faulure'
            }
            break;
        default:
            state
    }
    return state
}