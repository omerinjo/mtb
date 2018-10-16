import * as types from './Types'


function fetchSvijetBiciklizmaRequest() {
    return {
        type: types.FETCH_SVIJETBICIKLIZMA_REQUEST 
    };
}

function fetchSvijetBiciklizmaSucess(response) {
    console.log("action Svijet biciklizma" ,response)
    return {
        type: types.FETCH_SVIJETBICIKLIZMA_SUCCESS,
        payload: response
    }
}

function fetchSvijetBiciklizmaFailure(error) {
    return {
        type: types.FETCH_SVIJETBICIKLIZMA_FAILURE,
        payload: error
    }
}

export function fetchSvijetBiciklizma() {
    return async (dispatch) => {
        dispatch(fetchSvijetBiciklizmaRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=svijet_biciklizma`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchSvijetBiciklizmaSucess(response))  
        }
        catch (error) {
            dispatch(fetchSvijetBiciklizmaFailure(error))
        }
    }
}