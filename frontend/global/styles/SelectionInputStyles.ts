import { StyleSheet } from 'react-native'

export const SelectionInputStyles = StyleSheet.create({
  touchableOpacity: {
    width: '80%'
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    borderWidth: 2,
    paddingHorizontal: 14,
    paddingVertical: 11,
    borderRadius: 10,
    gap: 10,
    width: '100%',
    alignItems: 'center'
  },
  textInput: {
    color: '#FFFFFF'
  },
  optionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    padding: '1%',
    paddingTop: 0
  },
  optionText: {
    fontSize: 16,
    color: '#FFF',
    textAlign: 'center',
    marginVertical: '4.2%'
  },
  instructionText: {
    fontSize: 20,
    color: '#BDF26D',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  divider: {
    borderBottomColor: '#ffffff90',
    borderBottomWidth: 2,
    width: '100%',
    marginHorizontal: '50%'
  }
})
