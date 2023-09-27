import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const SignupPageStyles = StyleSheet.create({
  backButton: {
    marginLeft: '3%',
    marginTop: Constants.statusBarHeight,
    marginBottom: '35%'
  },
  appLogo: {
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-30%',
    marginBottom: '10%'
  },
  appTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    alignContent: 'center',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  grayContainer: {
    backgroundColor: '#494D4F',
    marginTop: '13%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1
  },
  processText: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 43,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: '8%',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  divider: {
    borderBottomWidthColor: 'black',
    borderBottomWidth: 1,
    marginTop: '4%',
    width: '90%',
    alignSelf: 'center'
  },
  signupInputs: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  signupButton: {
    marginTop: '20%',
    alignItems: 'center',
    marginBottom: '30%'
  }
})
