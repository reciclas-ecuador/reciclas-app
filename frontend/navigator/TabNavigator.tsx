import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { NewsPage } from '../events/NewsPage'
import DetailsNews from '../events/DetailsNews'
import { Edge } from '../Types'

export type RootStackParams = {
  NewsPage: undefined,
  DetailsNews: { news: Edge }
}

const Stack = createNativeStackNavigator<RootStackParams>()

const TabNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={
        {
          headerShown: false
        }
      }
    >
      <Stack.Screen name='NewsPage' component={NewsPage} />
      <Stack.Screen name='DetailsNews' component={DetailsNews} />
    </Stack.Navigator>
  )
}

export default TabNavigator
