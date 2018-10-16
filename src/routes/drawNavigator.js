
import React from 'react';
import { createDrawerNavigator, DrawerItems, } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
    Dimensions
} from 'react-native';

import HomePanel from '../containers/homePanel/HomePanel';
import IzvjestajiSaVoznje from '../containers/izvjestajiSaVoznji/IzvjestajiSaVoznji'
import Najave from '../containers/najave/Najave';
import BicikliOprema from '../containers/bicikli i oprema/BicikliOprema'
import Korisno from '../containers/korisno/Korisno'
import Zanimljivosti from '../containers/zanimljivosti/Zanimljivosti'
import UdruzenjeMTBA from '../containers/udruzenjeMTBA/UdruzenjeMTBA'
import Aktuelno from '../containers/aktuelno/Aktuelno'




const  DrawNavigator = new createDrawerNavigator({
    MTB: ({ screen: HomePanel,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/mtb1.png'))} />
      } }),
    Aktuelno: {screen: Aktuelno ,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/aktuelno.png'))} />
      }},
    "Izvještaji Sa Vožnje": { screen: IzvjestajiSaVoznje,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/izvjestaj.png'))} />
      }},
    Najave: { screen: Najave,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/najave.png'))} />
      }, },
    "Bicikli i oprema": { screen: BicikliOprema,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/oprema.png'))} />
      }},
    "Korisno": { screen: Korisno,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/korisno.png'))} />
      }, },
    Zanimljivosti: { screen: Zanimljivosti,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/zanimljivo.png'))} />
      }, },
    UdruzenjeMTBA: { screen: UdruzenjeMTBA },
},


    {
        contentComponent: (props) => {
            return (
                <SafeAreaView style={styles.safeView}>
                    <View style={styles.view}>
                        <Image style={styles.logo} source={require('../media/logo.png')} />
                    </View>
                    <ScrollView>
                        <DrawerItems  {...props}></DrawerItems>
                    </ScrollView>
                </SafeAreaView>
            )
        }
    }
)


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    view: {
        height: 150,
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: 100,
        height: 150
    }
});


export default DrawNavigator