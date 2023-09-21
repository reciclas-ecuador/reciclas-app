import { StyleSheet, Text, View, Image } from 'react-native'
// import icon from "../assets/home.svg"

// ---------
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { UserGenerate_Qr, UserMain_home } from './components'

const Tab = createMaterialBottomTabNavigator()
function MyTabs () {
  return (
    <Tab.Navigator
      //   initialRouteName="Notas"
      activeColor='#494'
      //   labelStyle={{ fontSize: 12 }}
      inactiveColor='#3e2465'
      //   style={{ backgroundColor: "#c98804" }}
      barStyle={{ backgroundColor: '#494D4F' }}
    >
      <Tab.Screen
        name='UserMain_home'
        component={UserMain_home}
        options={{
          tabBarLabel: 'Home',
          //   tabBarBadge: "hi",
          tabBarIcon: ({ color }) => (
            // <MaterialCommunityIcons name="home" color={color} size={26} />
            <Image
              source={require('../assets/home.svg')}
              style={{ width: 30, height: 30 }}
            />
          )
        }}
      />
      <Tab.Screen
        name='User Qr'
        component={UserGenerate_Qr}
        options={{
          tabBarLabel: 'QR'
          //   tabBarBadge: "hi",
          // tabBarIcon: ({ color }) => (
          //   // <MaterialCommunityIcons name="home" color={color} size={26} />
          //   <Image
          //     source={require("../assets/home.svg")}
          //     style={{ width: 30, height: 30 }}
          //   />
          // ),
        }}
      />
    </Tab.Navigator>
  )
}

const UserPage_home = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default UserPage_home

const styles = StyleSheet.create({})
