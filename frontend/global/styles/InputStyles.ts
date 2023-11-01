import { StyleSheet } from 'react-native'

export const InputStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 10,
    gap: 10,
    width: '80%',
    alignItems: 'center'
  },
  textInput: {
    color: '#FFFFFF',
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  }
})
