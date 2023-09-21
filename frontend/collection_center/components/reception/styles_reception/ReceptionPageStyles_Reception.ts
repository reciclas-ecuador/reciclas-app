import { StyleSheet } from 'react-native'

export const ReceptionPageStyles = StyleSheet.create({
  container: {
    flex: 1,
    height: '50%'
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
  pageTitle: {
    color: 'white',
    // fontFamily: 'Monsterrat',
    fontWeight: 'bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: 25,
    marginTop: '-49%',
    marginBottom: '5%',
    alignContent: 'center'
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
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: '8%',
    marginLeft: '5%',
    marginRight: '5%'
  },
  qr: {
    width: '45%',
    height: '45%',
    objectFit: 'contain',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '-4%'
  },
  inputSection: {
    display: 'flex',
    backgroundColor: '#494D4F',
    borderRadius: 30,
    alignItems: 'center',
    paddingTop: '8%',
    paddingBottom: '8%',
    marginTop: '-4%',
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
    // fontFamily: 'Monsterrat',
    fontSize: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '2%'
  }
})
