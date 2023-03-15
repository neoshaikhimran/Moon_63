/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { AuthNavigation } from './Authnavigation';
import { DashboardNavigation } from './DashboardNavigation';
import { SideDrawerNavigation } from './SideDrawerNavigation';

import AsyncStorage from '@react-native-async-storage/async-storage';







export const AppNavigation = () => {
  const [login , setLogin] = useState("false");

  React.useEffect(() => {
    const checkAsync = async () => {
      const value = await AsyncStorage.getItem('Keyvalue');
      console.log(value,"------------->>>>>>>>>>>.");
      
      if (value !== undefined && value !== null) {
        // setSelectedLang(value);
        setLogin(value)

      } else {
        setLogin('false')
      }
    };
    checkAsync();
  }, []);

  return (
    <NavigationContainer>
      {/* <AuthNavigation/> */}
      {login=='false'?<SideDrawerNavigation/>: <AuthNavigation/>}
     
    </NavigationContainer>
  );
};
