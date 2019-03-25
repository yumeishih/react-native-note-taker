import React from 'react'
import {
  createStackNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
} from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import Home from 'Screens/home'
import AboutApp from 'Screens/about/aboutApp'
import AboutDev from 'Screens/about/aboutDev'

const AboutTabNavigator = createBottomTabNavigator(
  {
    AboutApp,
    AboutDev,
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
      }
    },
  },
)

const defaultNavigationOptions = ({ navigation }) => ({
  headerLeft: (
    <Icon
      style={{
        paddingLeft: 10,
      }}
      onPress={() => navigation.openDrawer()}
      name="navicon"
      size={25}
    />
  ),
})


const AboutStackNavigator = createStackNavigator(
  {
    AboutTabNavigator,
  },
  {
    defaultNavigationOptions,
  },
)


const AppSwitchNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Start taking notes',
      },
    },
  },
  {
    defaultNavigationOptions,
  },
)

const AppDrawerNavigator = createDrawerNavigator({
  Home: { screen: AppSwitchNavigator },
  About: { screen: AboutStackNavigator },
})


export default AppDrawerNavigator
