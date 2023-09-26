import { LinearGradient } from 'expo-linear-gradient'
import { Image, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native'
import { ReceptionPageStyles } from '../collection_center/components/reception/styles_reception/ReceptionPageStyles_Reception'
import { Edge } from '../Types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { RootStackParams } from '../navigator/Navigator'

interface Props extends NativeStackScreenProps<RootStackParams, 'DetailsNews'> { };

const DetailsNews = ({ navigation, route }: Props) => {
  const news: Edge = route.params.news
  const { nombre, modalidad, descripcion, fechaInicio, lugar } = news.node

  console.log(modalidad)

  return (
    <ScrollView style={{ ...ReceptionPageStyles.container, backgroundColor: 'rgb(218,217,217)' }}>
      <View style={{ width: '100%', height: 300 }}>
        <Image source={require('../assets/news-page/botellas.jpeg')} style={styles.imagen} />
      </View>
      <View style={{ ...styles.contentNews }}>
        <Text style={{ fontSize: 20, fontWeight: '500', textShadowColor: 'black', textShadowOffset: { height: 1, width: 0 }, shadowRadius: 4, elevation: 20 }}>Exercitation adipisicing do tempor labore aliqua reprehenderit reprehenderit exercitation adipisicing duis amet voluptate.</Text>
        <View style={{ marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontWeight: 'bold' }}>Evento: </Text>
            <Text>{modalidad}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: 'bold' }}>Fecha de Inicio:</Text>
            <Text>{fechaInicio}</Text>
          </View>
        </View>
        <Text style={{ fontSize: 15, fontWeight: '300', marginTop: 20 }}>Suspendisse ut fringilla eros, vel imperdiet lorem. Vivamus accumsan enim nec faucibus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id augue pellentesque, efficitur lacus non, sodales arcu. Phasellus dignissim orci quam, non semper sapien tincidunt vel. Aenean erat lectus, venenatis ut condimentum nec, posuere et dolor. Sed urna diam, ornare at tempor a, porta nec sapien. Praesent pulvinar posuere eros, sit amet tristique justo porttitor at. Donec tincidunt consequat enim, et molestie dui cursus eget. Praesent quis ante id augue feugiat varius ac non dolor. Nulla eros arcu, lacinia et velit vel, auctor tempor risus. Morbi dapibus arcu vel tincidunt vehicula. Aenean efficitur lorem in odio tincidunt, non fringilla arcu tempor. Vestibulum nec tortor neque. Donec mi lectus, bibendum eget facilisis non, laoreet non nunc. Proin vel luctus tortor, sit amet tempus leo. Etiam neque arcu, ornare sed felis vel, commodo lobortis sem. Pellentesque sit amet lobortis sapien. Vivamus cursus ultricies sem, dignissim aliquet eros congue eu. Phasellus ultrices ante id odio congue, sit amet dignissim enim dapibus. Nunc luctus libero ut feugiat fringilla.</Text>
      </View>
      <View style={{ height: 'auto', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', bottom: 10 }}>
        <Text style={{ fontWeight: 'bold' }}>El evento se realizará en: </Text>
        <Text>{lugar}</Text>
      </View>
    </ScrollView>
  )
}

export default DetailsNews

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.23,
    shadowRadius: 11.27,
    elevation: 14
  },
  imagen: {
    width: '100%',
    height: 300
  },
  contentNews: {
    height: 'auto',
    width: '100%',
    top: -25,
    backgroundColor: 'rgb(218,217,217)',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 20
  }
})
