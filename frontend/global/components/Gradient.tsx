import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import React from 'react'
import { GradientStyles } from '../styles'

type Props = {
  children: React.ReactNode;
};

export function Gradient ({ children }: Props) {
  return (
    <View style={GradientStyles.container}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={GradientStyles.gradient}
      />
      {children}
    </View>
  )
}
