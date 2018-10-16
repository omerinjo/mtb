import * as types from './Types'


function fetchSveVijestiRequest() {
    return {
        type: types.FETCH_SVEVIJESTI_REQUEST 
    };
}

function fetchSveVijestiSuccess(response) {
    console.log("action Sve vijesti " ,response)
    return {
        type: types.FETCH_SVEVIJESTI_SUCCESS,
        payload: response
    }
}

function fetchSveVijestiFailure(error) {
    return {
        type: types.FETCH_SVEVIJESTI_FAILURE,
        payload: error
    }
}

export function fetchSveVijesti() {
    return async (dispatch) => {
        dispatch(fetchSveVijestiRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=aktuelno`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchSveVijestiSuccess(response))  
        }
        catch (error) {
            dispatch(fetchSveVijestiFailure(error))
        }
    }
}