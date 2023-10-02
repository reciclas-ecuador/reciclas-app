import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NewsPage } from '../events/NewsPage'
import { Home, HomeActive } from '../assets'
import UserMain_home from '../user/components/User/UserMain_home'
import TabNavigator from './TabNavigator'

const Stack = createNativeStackNavigator()
const tab = createBottomTabNavigator()

const Navigator = () => {
  return (
    <tab.Navigator
      initialRouteName='NewsPage'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { display: 'none' },
        headerBackgroundContainerStyle: { borderColor: 'white' },
        tabBarStyle: {
          backgroundColor: '#494D4f',
          borderColor: '#494D4F',
          height: 50,
          bottom: 5,
          marginHorizontal: 20,
          position: 'absolute',
          borderRadius: 60
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string
          if (route.name === 'UserMain_home') {
            return focused ? <Home /> : <HomeActive width={30} height={30} />
          } else if (route.name === 'NewsPage') {
            iconName = focused ? '/assets/general/reciclasLogo.svg' : '/assets/general/reciclasLogo.svg'
          }
        },
        // tabBarActiveTintColor: '#494',
        tavBarInactiveTintColor: '#3e2465'
      })}
    >

      <Stack.Screen name='UserMain_home' component={UserMain_home} />
      <Stack.Screen name='TabNavigator' component={TabNavigator} />

    </tab.Navigator>
  )
}

export default Navigator
