import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HomePageCollectionCenter, ReceptionPageCollectionCenter } from './components'
import { HomeCollectionCenter, ReceptionCollectionCenter } from '../assets'

const Tab = createMaterialBottomTabNavigator()

function MyTabs () {
  return (
    <Tab.Navigator
      initialRouteName='HomePage_CollectionCenter'
      activeColor='#FFFFFF'
      inactiveColor='#77A649'
      barStyle={{ backgroundColor: '#494D4F', height: '8%' }}
      shifting
    >
      <Tab.Screen
        name='HomePage_CollectionCenter'
        component={HomePageCollectionCenter}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeCollectionCenter />
          )
        }}
      />
      <Tab.Screen
        name='ReceptionPage_CollectionCenter'
        component={ReceptionPageCollectionCenter}
        options={{
          tabBarLabel: 'Recepción',
          tabBarIcon: ({ color }) => (
            <ReceptionCollectionCenter />
          ),
          tabBarColor: '#FFFFFF'
        }}
      />
    </Tab.Navigator>
  )
}

export function MenuCollectionCenter () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}
