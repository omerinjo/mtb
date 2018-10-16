import * as types from './Types'


function fetchRegionRequest() {
    return {
        type: types.FETCH_REGION_REQUEST
    };
}

function fetchRegionSuccess(response) {
    console.log("action region " ,response)
    return {
        type: types.FETCH_REGION_SUCCESS,
        payload: response
    }
}

function fetchRegionFailure(error) {
    return {
        type: types.FETCH_REGION_FAILURE,
        payload: error
    }
}

//@Desc Dovhaca detalje izabranog posta
export function fetchRegion() {
    return async (dispatch) => {
        dispatch(fetchRegionRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=region`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchRegionSuccess(response))  
        }
        catch (error) {
            dispatch(fetchRegionFailure(error))
        }
    }
}