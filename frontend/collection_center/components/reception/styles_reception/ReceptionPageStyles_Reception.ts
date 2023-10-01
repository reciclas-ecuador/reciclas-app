import Constants from 'expo-constants'
import { StyleSheet } from 'react-native'

export const ReceptionPageStyles = StyleSheet.create({
  backButton: {
    marginLeft: '3%',
    marginTop: Constants.statusBarHeight
  },
  appLogo: {
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  content: {
    backgroundColor: '#494D4F1F',
    borderRadius: 30,
    marginTop: '8%',
    marginHorizontal: '5%'
  },
  scanQr: {
    backgroundColor: '#76b54420',
    alignItems: 'center',
    marginVertical: '5%',
    borderRadius: 30,
    padding: '5%',
    alignSelf: 'center'
  },
  qrText: {
    color: '#BDF26D',
    fontSize: 20,
    fontWeight: 'bold',
    textShadowColor: 'rgba(119, 166, 73, 1)',
    textShadowOffset: { width: 0, height: 0.7 },
    textShadowRadius: 4
  },
  qrCameraContainer: {
    height: '49%',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    marginHorizontal: '5%',
    marginTop: '5%'
  },
  cameraContent: {
    marginTop: '-142%',
    marginBottom: '15%',
    alignItems: 'center',
    gap: 15
  },
  qrColumnObjective: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 70
  },
  qrRowObjective: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 70
  },
  user: {
    backgroundColor: '#76b54470',
    borderRadius: 50,
    alignItems: 'center',
    paddingVertical: '5%',
    alignSelf: 'center',
    padding: '5%'
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
    paddingTop: '8%',
    paddingBottom: '8%',
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
