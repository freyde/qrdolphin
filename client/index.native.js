/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import name from './src/app.json';

const { appName } = name;
AppRegistry.registerComponent('qrdolphin', () => App);
