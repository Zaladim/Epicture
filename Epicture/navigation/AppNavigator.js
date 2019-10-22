import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { fadeIn } from 'react-navigation-transitions';

import MainTabNavigator from './MainTabNavigator';
import StartScreen from '../screens/StartScreen';

export default createAppContainer(
  createSwitchNavigator({
    Auth: StartScreen,
    Main: MainTabNavigator,
  },
  {
    initialRouteName: 'Auth',
    transitionConfig: () => fadeIn(5000)
  })
);
