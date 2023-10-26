import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NewsPage } from "../events/NewsPage";
import { Home, HomeActive, ReceptionCollectionCenter } from "../assets";
import UserMain_home from "../user/components/User/UserMain_home";
import UserQr_home from "../user/components/User/UserQr_home";
import UserChart_home from "../user/components/User/UserChart_home";
import TabNavigator from "./TabNavigator";
import { useRef } from "react";
import { Animated, Dimensions, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import {
  HomePageCollectionCenter,
  ReceptionPageCollectionCenter,
} from "../collection_center";
import DetailsNews from "../events/DetailsNews";
import HomeMaps from "../maps/Home";

const Stack = createNativeStackNavigator();
const tab = createBottomTabNavigator();

const Navigator = () => {
  const tabOffsetValue = useRef(new Animated.Value(0)).current;

  console.log(tabOffsetValue);

  function getWidth() {
    let width = Dimensions.get("window").width;
    // total four Tabs...
    return width / 5;
  }

  interface TabIcon {
    focused: string;
    notFocused: string;
  }

  type TabIconMapping = Record<string, TabIcon>;

  const tabIconMapping: TabIconMapping = {
    UserMain_home: { focused: "home-outline", notFocused: "home" },
    UserChart_home: {
      focused: "bar-chart-outline",
      notFocused: "bar-chart",
    },
    TabNavigator: { focused: "calendar-outline", notFocused: "calendar" },
    HomeMaps: { // HomePageCollectionCenter
      focused: "bicycle-outline",
      notFocused: "bicycle-sharp",
    },
    UserQr_home: { focused: "leaf-outline", notFocused: "leaf" },
  };

  return (
    <NavigationContainer>
      <tab.Navigator
        initialRouteName="UserMain_home"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarLabelStyle: { display: "none" },
          tabBarStyle: {
            backgroundColor: "#494D4f",
            borderColor: "#494D4f",
          },
          // tabBarIcon: ({ focused, color, size }) => {
          //   let iconName: string;
          //   if (route.name === "UserMain_home") {
          //     iconName = !focused ? "home" : "home-outline";
          //   } else if (route.name === "TabNavigator") {
          //     iconName = !focused ? "calendar" : "calendar-outline";
          //   } else if (route.name === "HomePageCollectionCenter") {
          //     iconName = !focused ? "person" : "person-outline";
          //   } else if (route.name === "UserQr_home") {
          //     iconName = !focused ? "leaf" : "leaf-outline";
          //   }
          //   return <Ionicons name={iconName} size={size} color={color} />;
          // },
          // tabBarInactiveTintColor: "#494",
          // tabBarActiveTintColor: "grey",

          tabBarIcon: ({ focused, color, size }) => {
            const { focused: focusedIcon, notFocused: notFocusedIcon } =
              tabIconMapping[route.name] || {};

            return (
              <Ionicons
                name={focused ? focusedIcon : notFocusedIcon}
                size={size}
                color={color}
              />
            );
          },
          tabBarInactiveTintColor: "#494",
          tabBarActiveTintColor: "grey",
        })}
      >
        <Stack.Screen
          name="UserMain_home"
          component={UserMain_home}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: 0,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Stack.Screen
          name="UserChart_home"
          component={UserChart_home}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth(),
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          listeners={({ navigation, route }) => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 2,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Stack.Screen
          name="HomeMaps"
          component={HomeMaps}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 3,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
        <Stack.Screen
          name="UserQr_home"
          component={UserQr_home}
          listeners={() => ({
            tabPress: () => {
              Animated.spring(tabOffsetValue, {
                toValue: getWidth() * 4,
                useNativeDriver: true,
              }).start();
            },
          })}
        />
      </tab.Navigator>
      <Animated.View
        style={{
          width: 50,
          height: 4,
          position: "absolute",
          backgroundColor: "#494",
          bottom: 45,
          left: 14,
          borderRadius: 50,
          transform: [{ translateX: tabOffsetValue }],
        }}
      />
    </NavigationContainer>
  );
};

export default Navigator;
