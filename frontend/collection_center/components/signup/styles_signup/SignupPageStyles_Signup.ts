import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const SignupPageStyles = StyleSheet.create({
  backButton: {
    marginLeft: '3%',
    marginTop: Constants.statusBarHeight
  },
  appLogo: {
    marginTop: '-11%',
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  appTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginVertical: '10%',
    fontSize: 45,
    alignContent: 'center',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  grayContainer: {
    backgroundColor: '#494D4F',
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
    marginVertical: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  signupButton: {
    alignItems: 'center',
    marginBottom: '11%'
  }
})
