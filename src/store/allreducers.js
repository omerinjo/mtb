import { combineReducers } from 'redux'

import IzvjestajiSaVoznji from '../containers/izvjestaji/Reducer';
import PostDetails from '../containers/postDetails/Reducer';
import Prodavnica from '../containers/prodavnica/Reducer';
import BhScena from '../containers/aktuelno/bhScena/Reducer';
import PonudaUProdavnicama from '../containers/aktuelno/ponudaUprodavnicama/Reducer';
import Region from '../containers/aktuelno/region/Reducer';
import SveVijesti from '../containers/aktuelno/sveVijesti/Reducer';
import SvijetBiciklizma from '../containers/aktuelno/svijetBiciklizma/Reducer'
import VijestiIzSporta from '../containers/aktuelno/vijestiIzSporta/Reducer'


const AllReducers = combineReducers({
    IzvjestajiSaVoznjiReducer: IzvjestajiSaVoznji,
    PostDetailsReducer: PostDetails,
    ProdavnicaReducer: Prodavnica,
    BhScenaReducer: BhScena,
    PonudaUProdavnicamareducer: PonudaUProdavnicama,
    RegionReducer: Region,
    SveVijestireducer: SveVijesti,
    SvijetBiciklizmaReducer: SvijetBiciklizma,
    VijestiIzSportaReducer: VijestiIzSporta
})

export default AllReducers