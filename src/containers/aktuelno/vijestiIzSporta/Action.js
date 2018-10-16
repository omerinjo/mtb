import * as types from './Types'


function fetchVijestiIzSportaRequest() {
    return {
        type: types.FETCH_VIJESTIZSPORTA_REQUEST 
    };
}

function fetchVijestiIzSportaSucess(response) {
    console.log("action Svijet biciklizma" ,response)
    return {
        type: types.FETCH_VIJESTIZSPORTA_SUCCESS,
        payload: response
    }
}

function fetchVijestiIzSportaFailure(error) {
    return {
        type: types.FETCH_VIJESTIZSPORTA_FAILURE,
        payload: error
    }
}

export function fetchVijestiIzSporta() {
    return async (dispatch) => {
        dispatch(fetchVijestiIzSportaRequest());
        try {
            const url = `http://www.mtb.ba/wp-api/getLastPosts.php?perpage=128&category=vijesti_iz_sporta`
            const response = await fetch(url).then((res) => res.json())
            dispatch(fetchVijestiIzSportaSucess(response))  
        }
        catch (error) {
            dispatch(fetchVijestiIzSportaFailure(error))
        }
    }
}