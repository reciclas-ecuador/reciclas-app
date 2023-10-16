
// import { SignupPage } from './collection_center/SignupPage'
import { NewsPage } from "./events/NewsPage";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./navigator/Navigator";

// *** Luego de probar sus views por favor borrar antes de subir ***
export default function App() {
  return (
    // <Text>Aqui tu componente</Text>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>
  )
}
