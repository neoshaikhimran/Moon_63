import React from 'react';
import ForgotPasswordScreen from '../Screens/forgetpassword/Forgetpass';
import Login from '../Screens/Login/Login';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';



export type LogStackParamList = {
  navigate(arg0: string): unknown;
  Login: undefined;
  ForgotPasswordScreen: undefined;
};
export type LoginScreenProp = StackNavigationProp<
  LogStackParamList,
  'Login'
  >;

const AuthStack = createStackNavigator<LogStackParamList>();


export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name="Login"
        component={Login}
      />
      <AuthStack.Screen
        name='ForgotPasswordScreen'
        component={ForgotPasswordScreen}
      />
    </AuthStack.Navigator>
  );
};


