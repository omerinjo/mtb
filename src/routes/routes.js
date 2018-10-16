import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import DrawNavigator from './drawNavigator';
import PostDetails from '../containers/postDetails/PostDetails';
import ProdavnicaWithDrawNavigator from '../routes/drawProdavnica';
import IzvjestajiWithDrawNavigator from '../routes/drawIzvjestaji'
import BhScena from '../containers/aktuelno/bhScena/BhScena';
import PonudaUProdavnicama from '../containers/aktuelno/ponudaUprodavnicama/PonudaUProdavnicama';
import Region from '../containers/aktuelno/region/Region';
import SveVijesti from '../containers/aktuelno/sveVijesti/SveVijesti';
import SvijetBiciklizma from '../containers/aktuelno/svijetBiciklizma/SvijetBiciklizma';
import VijestiIzSporta from '../containers/aktuelno/vijestiIzSporta/VijestiIzSporta';
import Dolomiti2011 from '../containers/izvjestajiSaVoznji/dolomiti2011/Dolomiti2011';
import EpicBalcak2012 from '../containers/izvjestajiSaVoznji/epicBalcan2012/EpicBalcan2012';
import LagoDiGarda2010 from '../containers/izvjestajiSaVoznji/lagoDiGarda2010/LagoDiGarda2010';
import Makedonija2012 from '../containers/izvjestajiSaVoznji/makedonija2012/Makedonija2012';
import SviIzvjestaji from '../containers/izvjestajiSaVoznji/sviIzvjestaji/SviIzvjestaji';
import Izvjestaji from '../containers/izvjestaji/Izvjestaji';
import Dogadzaji from '../containers/najave/dogadzaji/Dogadzaji';
import OstaleNajave from '../containers/najave/ostaleNajave/OstaleNajave';
import Takmicenja from '../containers/najave/takmicenja/Takmicenja';
import Voznje from '../containers/najave/voznje/Voznje';


const NavigationApp = new createStackNavigator({
    DrawNavigator: { screen: DrawNavigator },
    PostDetails: { screen: PostDetails },
    Prodavnica: { screen: ProdavnicaWithDrawNavigator },
    BhScena: { screen: BhScena },
    PonudaUProdavnicama: { screen: PonudaUProdavnicama },
    Region: { screen: Region },
    SveVijesti: { screen: SveVijesti },
    SvijetBiciklizma:{screen: SvijetBiciklizma},
    VijestiIzSporta:{screen: VijestiIzSporta},
    Dolomiti2011:{screen: Dolomiti2011},
    EpicBalcak2012:{screen: EpicBalcak2012},
    LagoDiGarda2010:{screen: LagoDiGarda2010},
    Makedonija2012:{screen: Makedonija2012},
    SviIzvjestaji:{screen: SviIzvjestaji},
    Izvjestaji: {screen: IzvjestajiWithDrawNavigator},
    Dogadzaji: {screen: Dogadzaji},
    OstaleNajave: {screen: OstaleNajave},
    Takmicenja:{screen: Takmicenja},
    Voznje: {screen: Voznje}
},
    {
        headerMode: 'none',
    })

export default NavigationApp