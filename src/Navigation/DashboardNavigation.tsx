import React from "react";
import Dashboard from "../Screens/Dashboard/Dashboard";
import {
    createStackNavigator,
    StackNavigationProp,
  } from '@react-navigation/stack';

  export type AppStackParamList = {
    Dashboard: undefined;
    TripDetail: undefined;
    TrackingScreen: undefined;
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
      initialRouteName="Dashboard">
      <DashboardNavigator.Screen
        name="Dashboard"
        component={Dashboard}
      />

    </DashboardNavigator.Navigator>
  );
};