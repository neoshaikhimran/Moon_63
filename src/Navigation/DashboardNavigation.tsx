import React from "react";
import Dashboardscreen from "../Screens/Dashboard/Dashboardscreen";
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { stackOptions } from "./SideDrawerNavigation";
import { Settings } from "../Screens/Settings/Settings";
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

export type AppStackParamList = {
  Dashboard: undefined;
   Settings: undefined;
};
export type dashboardScreenProp = StackNavigationProp<
  AppStackParamList,
  'Dashboard'
>;

const DashboardNavigator = createStackNavigator<AppStackParamList>();

export const DashboardNavigation = () => {
  return (
    <DashboardNavigator.Navigator
       screenOptions={stackOptions}
      initialRouteName="Dashboard"

    >
      <DashboardNavigator.Screen
        name="Dashboard"
        component={Dashboardscreen}
        options={dashboardScreenOptions}

      />

      <DashboardNavigator.Screen name="Settings" component={Settings} />


    </DashboardNavigator.Navigator>
  );
};

export const dashboardScreenOptions = (props: any) => {
  return {
    title: 'Dashboard',
    headerLeft: () => (
      <HeaderButtons >
        <Item
          title="menu"
          iconName="menu-outline"
          onPress={() => props.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),

  };
};