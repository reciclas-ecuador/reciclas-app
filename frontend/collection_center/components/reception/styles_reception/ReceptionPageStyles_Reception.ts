import Constants from 'expo-constants'
import { Dimensions, StyleSheet } from 'react-native'

export const ReceptionPageStyles = StyleSheet.create({
  backButton: {
    marginLeft: '3%',
    marginTop: Constants.statusBarHeight
  },
  appLogo: {
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-11%'
  },
  centerView: {
    height: Dimensions.get('window').height - (Dimensions.get('window').height * 0.176),
    display: 'flex',
    justifyContent: 'center'
  },
  content: {
    backgroundColor: 'rgba(192, 192, 192, .2)',
    borderRadius: 30,
    marginHorizontal: '5%'
  },
  scanQr: {
    backgroundColor: '#76b54420',
    alignItems: 'center',
    marginTop: '5%',
    borderRadius: 30,
    padding: '5%',
    alignSelf: 'center',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderRightWidth: 1.2,
    borderLeftWidth: 1.2,
    borderColor: '#BDF26D'
  },
  qrText: {
    color: '#BDF26D',
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  qrCameraContainer: {
    height: 320,
    borderTopRightRadius: 175,
    borderBottomLeftRadius: 175,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: '5%',
    marginTop: '5%',
    borderColor: '#BDF26D',
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderLeftWidth: 0.1
  },
  cameraContent: {
    marginTop: '-110%',
    marginBottom: '27%',
    alignItems: 'center',
    gap: 20
  },
  qrColumnObjective: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 50
  },
  qrRowObjective: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 50
  },
  cancelButton: {
    alignSelf: 'center',
    marginTop: '5%'
  },
  user: {
    alignItems: 'center',
    marginTop: '5%',
    gap: 5
  },
  joinUserInfoDividir: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  userDivider: {
    borderBottomWidth: 1,
    flex: 1,
    marginHorizontal: '4%'
  },
  userInfo: {
    fontWeight: 'bold',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  inputSection: {
    display: 'flex',
    backgroundColor: '#494D4F',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: '5%',
    marginTop: '5%',
    gap: 20
  },
  quantityInput: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%'
  },
  kg: {
    color: 'white',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  permissionDenied: {
    alignContent: 'center',
    alignSelf: 'center',
    fontSize: 20,
    color: 'white',
    marginTop: '100%',
    fontWeight: 'bold'
  }
})
