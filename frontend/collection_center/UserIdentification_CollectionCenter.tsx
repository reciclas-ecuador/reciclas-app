import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginPageCollectionCenter, SignupPageCollectionCenter } from './components'

const Stack = createNativeStackNavigator()

export function UserIdentificationCollectionCenter () {
  return (
    <Stack.Navigator initialRouteName='LoginPage_CollectionCenter'>
      <Stack.Screen
        name='LoginPage_CollectionCenter'
        component={LoginPageCollectionCenter}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignupPage_CollectionCenter'
        component={SignupPageCollectionCenter}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
