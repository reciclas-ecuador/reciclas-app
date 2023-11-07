// import { SignupPage } from './collection_center/SignupPage'
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigator from "./navigator/Navigator";
import { useState } from "react";
import { SafeAreaView, StatusBar, useWindowDimensions } from "react-native";
import LoginAthentication from "./LoginAthentication";
import AuthenticateUserContextProvider from "./context/AuthenticateUserContext";

// *** Luego de probar sus views por favor borrar antes de subir ***
export default function App() {
  return (
    <AuthenticateUserContextProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor='transparent'
          barStyle='dark-content'
          translucent
        />
        <Navigator />
      </GestureHandlerRootView>
    </AuthenticateUserContextProvider>
  )
}
