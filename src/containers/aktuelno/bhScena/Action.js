import * as types from './Types'


function fetchBhScenaRequest() {
    return {
        type: types.FETCH_BHSCENA_REQUEST
    };
}

function fetchBhScenaSuccess(response) {
    console.log("action bhscena " ,response)
    return {
        type: types.FETCH_BHSCENA_SUCCESS,
        payload: response
    }
}

function fetchBhScenaFailure(error) {
    return {
        type: types.FETCH_BHSCENA_FAILURE,
        payload: error
    }
}

//@Desc Dovhaca detalje izabranog posta
export function fetchBhScena() {
    return async (dispatch) => {
        dispatch(fetchBhScenaRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=bh_scena`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchBhScenaSuccess(response))  
        }
        catch (error) {
            dispatch(fetchBhScenaFailure(error))
        }
    }
}