import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export const HomePageStyles = StyleSheet.create({
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
  user: {
    backgroundColor: '#494D4F1F',
    borderRadius: 30,
    alignItems: 'center',
    verticalAlign: 'center',
    marginTop: Constants.statusBarHeight + 10,
    marginHorizontal: '5%',
    padding: '10%'
  },
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 100
  },
  userName: {
    color: 'white',
    fontSize: 25,
    alignContent: 'center',
    fontWeight: 'bold',
    marginTop: '5%'
  },
  summary: {
    backgroundColor: '#494D4F1F',
    borderRadius: 30,
    alignItems: 'center',
    verticalAlign: 'center',
    marginTop: '15%',
    marginHorizontal: '5%'
  },
  grayContainer: {
    backgroundColor: '#494D4F',
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    verticalAlign: 'center',
    padding: '5%',
    marginTop: '5%'
  },
  sectionTitle: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    alignContent: 'center',
    marginTop: '5%'
  },
  quantityText: {
    color: 'white',
    fontSize: 20,
    alignContent: 'center',
    marginBottom: '5%'
  },
  quantity: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    alignContent: 'center'
  }
})
