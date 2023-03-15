import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { DashboardNavigation, dashboardScreenProp } from './DashboardNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Banner from '../Component/Sidercomonent/Banner/Banner';

import { Screeone } from '../Screens/Screenone/Screenone';

import { useNavigation } from '@react-navigation/native';
import { BannerData } from '../Component/Sidercomonent/Banner/BannerData/Bannerdata';
import { DrawerMenu } from '../Component/Customdrawer/Drawermenu';


export type DrawerParamList = {
  Dashboard: undefined;
};

export const stackOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? 'blue' : '',
  },
  headerTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerBackTitleStyle: {
    fontFamily: 'OpenSans-Regular',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : 'skyblue',
};

const sideDrawerNavigator = createDrawerNavigator();

export const SideDrawerNavigation = () => {
  // const {t} = useTranslation();
  const navigation = useNavigation<dashboardScreenProp>();

  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };

  return (
    <sideDrawerNavigator.Navigator
      screenOptions={{
        // drawerActiveBackgroundColor: 'skyblue',
        // drawerActiveTintColor: 'white',
        // drawerContentStyle:{
        //   borderBottomColor:"white",
        //   borderBottomWidth:1
        // },

        drawerStyle: {
          backgroundColor: 'white',
          width: '100%',

        },
        drawerLabelStyle: {
          color: 'black',
          // borderColor:"white",
          // borderBottomWidth:4
        }
      }}
      drawerContent={props => {
        return (
          <SafeAreaView style={styles.rootContainer}>
            
            <View style={styles.closex}>
              <TouchableOpacity>
              <Ionicons name="close" size={25} color='black' />  
              </TouchableOpacity>
            </View>
            <View style={styles.signOutRootContainer}>
            
            <DrawerMenu/>

             
            </View>
          </SafeAreaView>
        );
      }}>
      <sideDrawerNavigator.Screen
        name="DashboardNavigation"
        component={DashboardNavigation}
        options={{ headerShown: false }}

      />
      {/* <sideDrawerNavigator.Screen
        name="Screenone"
        component={Screeone}

      />
      <sideDrawerNavigator.Screen
        name="Screentwo"
        component={Screeone}
      />
      <sideDrawerNavigator.Screen
        name="ScreenThree"
        component={Screeone}
      /> */}
    </sideDrawerNavigator.Navigator>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
   
    flex:1,
    borderWidth:1
    
    
    
  },
  signOutRootContainer: {
    // marginTop: 'auto',

    height:"100%",
    width: '100%',
    // marginStart: 16,
  },
  signOutContainer: {
    flexDirection: 'row',
    alignItems: 'center',


  },
  signOutText: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 20,
    color: 'black'
  },
  signOutPressableContainer: {
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: "black",
    width: '92%',


  },
  closex:{
    backgroundColor:"white",
    height:40,
    paddingLeft:10,
    paddingTop:5
  }
});
