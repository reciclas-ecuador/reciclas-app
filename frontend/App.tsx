import { GestureHandlerRootView } from 'react-native-gesture-handler'
import Navigator from './navigator/Navigator'

// *** Luego de probar sus views por favor borrar antes de subir ***
export default function App() {
  return (
    // <Text>Aqui tu componente</Text>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>
  )
}
