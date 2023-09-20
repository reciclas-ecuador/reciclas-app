import { StyleSheet } from 'react-native'

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
    width: '15%',
    height: '25%',
    objectFit: 'contain',
    marginLeft: '2%',
    marginTop: '10%'
  },
  appLogo: {
    width: '20%',
    height: '10%',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-40%'
  },
  appTitle: {
    color: 'white',
    // fontFamily: 'Monsterrat',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 45,
    marginTop: '-5%',
    alignContent: 'center'
  },
  grayContainer: {
    backgroundColor: '#494D4F',
    marginTop: '13%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    height: '100%'
  },
  welcomeText: {
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
  rolText: {
    color: 'white',
    // fontFamily: 'Monsterrat',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
    marginTop: 0
  },
  loginInputs: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  loginButton: {
    marginTop: '6%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})
