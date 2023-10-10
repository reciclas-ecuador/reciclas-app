import { Platform, StyleSheet } from 'react-native'

export const LoginPageStyles = StyleSheet.create({
  appLogo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '10%'
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
  appSubTitle: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    alignContent: 'center',
    letterSpacing: 5,
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  appDescription: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 15,
    alignContent: 'center',
    marginTop: '4%',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  grayContainer: {
    backgroundColor: '#494D4F',
    marginTop: '13%',
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    flex: 1,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4
      },
      android: {
        elevation: 5
      }
    })
  },
  welcomeText: {
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
  rolText: {
    color: 'white',
    marginLeft: 'auto',
    marginRight: 'auto',
    alignContent: 'center',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  loginInputs: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10
  },
  loginButton: {
    marginTop: '12%',
    alignItems: 'center'
  },
  otherOptionsContainer: {
    alignSelf: 'center',
    marginTop: '3.5%'
  },
  otherOptionsText: {
    fontSize: 15,
    color: '#FFFFFF98',
    textShadowColor: 'rgba(119, 166, 73, 0.7)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  bottomAppLogo: {
    marginVertical: '11.7%',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
})
