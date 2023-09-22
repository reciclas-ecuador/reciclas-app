import { StyleSheet } from 'react-native'

export const LoginPageStyles = StyleSheet.create({
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
  appLogo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '15%'
  },
  appTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    alignContent: 'center'
  },
  appSubTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    alignContent: 'center',
    letterSpacing: 5
  },
  appDescription: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    alignContent: 'center',
    marginTop: '4%'
  },
  grayContainer: {
    backgroundColor: '#494D4F',
    marginTop: '13%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1
  },
  welcomeText: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 43,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: '8%'
  },
  rolText: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center'
  },
  loginInputs: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 20
  },
  loginButton: {
    marginTop: '8%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  forgotPassword: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '3%'
  },
  bottomAppLogo: {
    marginTop: '15%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10%'
  }
})
