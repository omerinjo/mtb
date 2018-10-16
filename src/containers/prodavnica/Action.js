import * as types from './Types'

function fetchProdavnicaRequest() {
    return {
        type: types.FETCH_PRODAVNICE_REQUEST
    };
}

function fetchProdavnicaSuccess(response) {
    console.log("action ", response)
    return {
        type: types.FETCH_PRODAVNICE_SUCCESS,
        payload: response
    }
}

function fetchProdavnicaFailure(error) {
    return {
        type: types.FETCH_PRODAVNICE_FAILURE,
        payload: error
    }
}

export function fetchProdavnica() {
    return async (dispatch) => {
        dispatch(fetchProdavnicaRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=prodavnice`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchProdavnicaSuccess(response))  
        }
        catch (error) {
            dispatch(fetchProdavnicaFailure(error))
        }
    }
}