import { StyleSheet } from 'react-native'

export const ReceptionPageStyles = StyleSheet.create({
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
    width: '20%',
    marginLeft: '3%',
    marginTop: '2%'
  },
  appLogo: {
    width: '20%',
    height: '10%',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '0%'
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
    fontWeight: 'bold'
  },
  user: {
    backgroundColor: '#76b54470',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: '5%',
    marginVertical: '10%'
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
    marginTop: '2%'
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
