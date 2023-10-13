import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NewsPage } from '../events/NewsPage'
import { Home, HomeActive, ReceptionCollectionCenter } from '../assets'
import UserMain_home from '../user/components/User/UserMain_home'
import TabNavigator from './TabNavigator'
import { useRef } from 'react'
import { Animated, Dimensions, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { HomePageCollectionCenter, ReceptionPageCollectionCenter } from '../collection_center'
import DetailsNews from '../events/DetailsNews'

const Stack = createNativeStackNavigator()
const tab = createBottomTabNavigator()

const Navigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current

  console.log(tabOffsetValue)

  function getWidth() {
    let width = Dimensions.get('window').width
    // total four Tabs...
    return width / 4
  }

  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName='TabNavigator'
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelStyle: { display: 'none' },
          tabBarStyle: {
            backgroundColor: '#494D4f',
            borderColor: '#494D4f'
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName: string
            if (route.name === 'UserMain_home') {
              iconName = !focused ? 'home' : 'home-outline'
            } else if (route.name === 'TabNavigator') {
              iconName = !focused ? 'calendar' : 'calendar-outline'
            } else if (route.name === 'HomePageCollectionCenter') {
              iconName = !focused ? 'person' : 'person-outline'
            } else if (route.name === 'ReceptionPage') {
              iconName = !focused ? 'leaf' : 'leaf-outline'
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarInactiveTintColor: '#494',
          tabBarActiveTintColor: 'grey'
        })}
      >

        <Stack.Screen name='UserMain_home' component={UserMain_home} listeners={({ navigation, route }) => ({
          tabPress: () => {
            Animated.spring(tabOffsetValue, {
              toValue: 0,
              useNativeDriver: true
            }).start()
          }
        })}
        />
        <Stack.Screen name='TabNavigator' component={TabNavigator} listeners={({ navigation, route }) => ({
          tabPress: () => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth(),
              useNativeDriver: true
            }).start()
          }
        })}
        />
        <Stack.Screen name='HomePageCollectionCenter' component={HomePageCollectionCenter} listeners={() => ({
          tabPress: () => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 2,
              useNativeDriver: true
            }).start()
          }
        })}
        />
        <Stack.Screen name='ReceptionPage' component={ReceptionPageCollectionCenter} listeners={() => ({
          tabPress: () => {
            Animated.spring(tabOffsetValue, {
              toValue: getWidth() * 3,
              useNativeDriver: true
            }).start()
          }
        })}
        />

      </tab.Navigator>
      <Animated.View
        style={{
          width: 50,
          height: 4,
          position: 'absolute',
          backgroundColor: '#494',
          bottom: 45,
          left: 23,
          borderRadius: 50,
          transform: [
            { translateX: tabOffsetValue }
          ]
        }}
      />
    </NavigationContainer>
  )
}

export default Navigator
