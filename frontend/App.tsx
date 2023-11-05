// import { SignupPage } from './collection_center/SignupPage'
import { NewsPage } from "./events/NewsPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator/Navigator";
import { useState } from "react";
import { SafeAreaView, StatusBar, useWindowDimensions } from "react-native";
import LoginAthentication from "./LoginAthentication";

// *** Luego de probar sus views por favor borrar antes de subir ***
export default function App() {
  const [loginState, setLoginState] = useState(false);
  const { height } = useWindowDimensions();
  return (
    // <Text>Aqui tu componente</Text>

    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor="transparent"
          barStyle="dark-content"
          translucent={true}
        />
        {loginState ? <LoginAthentication /> : <Navigator />}
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}
