import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { UserMain_home } from '../user/components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NewsPage } from '../events/NewsPage'
import { Home, HomeActive } from '../assets'
import DetailsNews from '../events/DetailsNews'
import UserPage_home from '../user/UserPage_home'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewsPage } from "../events/NewsPage";
import { Home } from "../assets";
import DetailsNews from "../events/DetailsNews";
import UserPage_home from "../user/UserPage_home";
import UserMain_home from "../user/components/User/UserMain_home";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <tab.Navigator
      initialRouteName="NewsPage"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabelStyle: { display: 'none' },
        headerBackgroundContainerStyle: { borderColor: 'white' },
        tabBarStyle: { backgroundColor: '#494D4f', borderColor: '#494D4F', height: 50, bottom: 10, marginHorizontal: 20, position: 'absolute', borderRadius: 60 },
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
        tabBarLabelStyle: { display: "none" },
        headerBackgroundContainerStyle: { borderColor: "white" },
        tabBarStyle: {
          backgroundColor: "#494D4F",
          borderColor: "#494D4F",
          height: 50,
        },
        tabBarActiveBackgroundColor: "green",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === "UserMain_home") {
            iconName = focused ? "/home.svg" : "/home.svg";
          } else if (route.name === "NewsPage") {
            iconName = focused
              ? "/assets/general/reciclasLogo.svg"
              : "/assets/general/reciclasLogo.svg";
          }
          return <Home width={40} height={40} />;
        },
        tabBarActiveTintColor: "#494",
        tavBarInactiveTintColor: "#3e2465",
      })}
    >
      <Stack.Screen name="UserMain_home" component={UserMain_home} />
      <Stack.Screen name="NewsPage" component={NewsPage} />
      <Stack.Screen
        name="DetailsNews"
        component={DetailsNews}
        options={{ tabBarButton: () => null, tabBarVisible: false }}
      />
    </tab.Navigator>
  )
}
    // <Tab.Navigator
    //   //   initialRouteName="Notas"
    //   activeColor='#494'
    //   //   labelStyle={{ fontSize: 12 }}
    //   inactiveColor='#3e2465'
    //   //   style={{ backgroundColor: "#c98804" }}
    //   barStyle={{ backgroundColor: '#494D4F' }}
    // >
    //   <Tab.Screen
    //     name='UserMain_home'
    //     component={UserMain_home}
    //     options={{
    //       tabBarLabel: 'Home',
    //       tabBarIcon: ({ color }) => (
    //         <Image
    //           source={require('../assets/home.svg')}
    //           style={{ width: 30, height: 30 }}
    //         />
    //       )
    //     }}
    //   />
    //   <Tab.Screen
    //     name='User Qr'
    //     component={UserGenerate_Qr}
    //     options={{
    //       tabBarLabel: 'QR'
    //     }}
    //   />
    // </Tab.Navigator>
  );
};

export default Navigator;
