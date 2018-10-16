
import React from 'react';
import { createDrawerNavigator, DrawerItems,} from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Image,
    SafeAreaView,
    ScrollView,
   TouchableOpacity
} from 'react-native';

import Prodavnica from '../containers/prodavnica/Prodavnica';
import Izvjestaji from '../containers/izvjestaji/Izvjestaji'
import Najave from '../containers/najave/Najave';
import BicikliOprema from '../containers/bicikli i oprema/BicikliOprema'
import Korisno from '../containers/korisno/Korisno'
import Zanimljivosti from '../containers/zanimljivosti/Zanimljivosti'
import UdruzenjeMTBA from '../containers/udruzenjeMTBA/UdruzenjeMTBA'
import Aktuelno from '../containers/aktuelno/Aktuelno'
import MTB from '../containers/homePanel/HomePanel'




const  DrawNavigator = new createDrawerNavigator({
    Prodavnica: ({ screen: Prodavnica,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/mtb1.png'))} />
      } }),
    Aktuelno: {screen: Aktuelno,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/aktuelno.png'))} />
      }},
    "Izvještaji Sa Vožnje": { screen: Izvjestaji,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/izvjestaj.png'))} />
      } },
    Najave: { screen: Najave ,navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/najave.png'))} />
      } },
    "Bicikli i oprema": { screen: BicikliOprema,  navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/oprema.png'))} />
      } },
    "Korisno": { screen: Korisno, navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/korisno.png'))} />
      } },
    Zanimljivosti: { screen: Zanimljivosti, navigationOptions: {
        drawerIcon: <Image source={source= (require('../media/zanimljivo.png'))} />
      } },
    UdruzenjeMTBA: { screen: UdruzenjeMTBA },
},
    {
        contentComponent: (props) => {
            return (
                <SafeAreaView style={styles.safeView}>
                    <TouchableOpacity style={styles.view} onPress={()=>console.log("with navigation ", props)} >
                        <Image style={styles.logo} source={require('../media/logo.png')} />
                    </TouchableOpacity>
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