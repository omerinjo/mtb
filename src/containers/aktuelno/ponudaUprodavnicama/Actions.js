import * as types from './Types'


function fetchPonudaUProdavnicamaRequest() {
    return {
        type: types.FETCH_PONUDAUPRODAVNICAMA_REQUEST
    };
}

function fetchPonudaUProdavnicamaSuccess(response) {
    console.log("action ponuda u prodavnicama " ,response)
    return {
        type: types.FETCH_PONUDAUPRODAVNICAMA_SUCCESS,
        payload: response
    }
}

function fetchPonudaUProdavnicamaFailure(error) {
    return {
        type: types.FETCH_PONUDAUPRODAVNICAMA_FAILURE,
        payload: error
    }
}

//@Desc Dovhaca detalje izabranog posta
export function fetchPonudaUProdavnicama() {
    return async (dispatch) => {
        dispatch(fetchPonudaUProdavnicamaRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=ponuda_u_prodavnicama`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchPonudaUProdavnicamaSuccess(response))  
        }
        catch (error) {
            dispatch(fetchPonudaUProdavnicamaFailure(error))
        }
    }
}