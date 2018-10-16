import * as types from './Types'

function fetchPostDetailsRequest() {
    return {
        type: types.FETCH_POST_DETAILS_REQUEST
    };
}

function fetchPostDetailsSuccess(response) {
    return {
        type: types.FETCH_POST_DETAILS_SUCCESS,
        payload: response
    }
}

function fetchPostDetailsFailure(error) {
    return {
        type: types.FETCH_POST_DETAILS_FAILURE,
        payload: error
    }
}

//@Desc Dovhaca detalje izabranog posta
export function fetchPostDetails(slug) {
    return async (dispatch) => {
        dispatch(fetchPostDetailsRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getPost.php?slug=${slug}`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchPostDetailsSuccess(response))  
        }
        catch (error) {
            dispatch(fetchPostDetailsFailure(error))
        }
    }
}