import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { HomePageCollectionCenter, ReceptionPageCollectionCenter } from './components'
import { HomeCollectionCenter, ReceptionCollectionCenter } from '../assets'
import { useTheme } from 'react-native-paper'

const Tab = createMaterialBottomTabNavigator()

function MyTabs () {
  const theme = useTheme()
  theme.colors.secondaryContainer = 'transparent'

  return (
    <Tab.Navigator
      initialRouteName='HomePage_CollectionCenter'
      activeColor='#BDF26D'
      inactiveColor='#FFFFFF70'
      barStyle={{ backgroundColor: '#000', height: '8%' }}
      shifting
    >
      <Tab.Screen
        name='HomePage_CollectionCenter'
        component={HomePageCollectionCenter}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <HomeCollectionCenter fill='none' stroke={color} strokeWidth={2} />
          )
        }}
      />
      <Tab.Screen
        name='ReceptionPage_CollectionCenter'
        component={ReceptionPageCollectionCenter}
        options={{
          tabBarLabel: 'Recepción',
          tabBarIcon: ({ color }) => (
            <ReceptionCollectionCenter fill={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}

export function MenuCollectionCenter () {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MyTabs />
    </GestureHandlerRootView>
  )
}
