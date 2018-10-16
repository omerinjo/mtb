import * as types from './Types'

function fetchIzvjestajiSaVoznjiRequest() {
    return {
        type: types.FETCH_IZVJESTAJI_SA_VOZNJE_REQUEST
    };
}

export function fetchIzvjestajiSaVoznjiSuccess(response) {
    return {
        type: types.FETCH_IZVJESTAJI_SA_VOZNJE_SUCCESS,
        payload: response
    }
}

function fetchIzvjestajiSaVoznjiFailure(error) {
    return {
        type: types.FETCH_IZVJESTAJI_SA_VOZNJE_FAILURE,
        payload: error
    }
}

//@Desc Dohvaca sve izvjestaje 
export function fetchIzvjestajiSaVoznji() {
    return async (dispatch) => {
        dispatch(fetchIzvjestajiSaVoznjiRequest());
        try {
            const url = 'http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=izvjestaji_sa_voznji'
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchIzvjestajiSaVoznjiSuccess(response))
        }
        catch (error) {
            dispatch(fetchIzvjestajiSaVoznjiFailure(error))
        }
    }
}

