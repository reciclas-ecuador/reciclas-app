import { StyleSheet } from 'react-native'

export const InputStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    paddingLeft: 14,
    // paddingHorizontal: 14,
    // paddingVertical: 11,
    borderRadius: 10,
    gap: 10,
    width: '80%'
  },
  icon: {
    width: 30,
    height: 30
  },
  textInput: {
    // fontFamily: 'Montserrat',
    color: '#FFFFFF'
  }
})
