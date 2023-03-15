/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import i18next from './src/Component/Language/i18next';

AppRegistry.registerComponent(appName, () => App);
