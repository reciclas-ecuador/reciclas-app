import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MenuCollectionCenter } from './Menu_CollectionCenter'
import { UserIdentificationCollectionCenter } from './UserIdentification_CollectionCenter'

const Stack = createNativeStackNavigator()

export function CollectionCenter () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='UserIdentification_CollectionCenter'>
        <Stack.Screen
          name='UserIdentification_CollectionCenter'
          component={UserIdentificationCollectionCenter}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Menu_CollectionCenter'
          component={MenuCollectionCenter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
