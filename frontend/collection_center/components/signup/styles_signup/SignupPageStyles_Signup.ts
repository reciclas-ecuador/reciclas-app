import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const SignupPageStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
    backgroundColor: '#77A649'
  },
  backButton: {
    marginLeft: '3%',
    marginTop: Constants.statusBarHeight,
    marginBottom: '35%',
    width: '20%'
  },
  appLogo: {
    width: '20%',
    height: '10%',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-45%',
    marginBottom: '10%'
  },
  appTitle: {
    color: 'white',
    // fontFamily: 'Monsterrat',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    alignContent: 'center'
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
    // fontFamily: 'Monsterrat',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 43,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: '8%',
    marginBottom: 0
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
