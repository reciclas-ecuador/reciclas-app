import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Edge } from '../../Types'
import { useNavigation } from '@react-navigation/native'

const News = (item: Edge) => {
  console.log(item.node.descripcion)

  const navigation = useNavigation()

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.9}
      onPress={
        () => navigation.navigate('DetailsNews', {
          news: item
        })}
    >
      <Image source={require('../../assets/news-page/botellas.jpeg')} style={styles.imagen} />
      <View style={{ paddingHorizontal: 10, paddingVertical: 15, height: 'auto', borderTopRightRadius: 25, borderTopLeftRadius: 25, backgroundColor: 'rgb(218,217,217)', top: -20 }}>
        <Text numberOfLines={2} style={{ fontSize: 20 }}>Exercitation adipisicing do tempor labore aliqua reprehenderit reprehenderit exercitation adipisicing duis amet voluptate. </Text>
        <View style={{ marginTop: 75, marginLeft: 170, flexDirection: 'row', position: 'absolute' }}>
          <Text style={{ fontWeight: 'bold', textAlign: 'right' }}>Fecha: </Text>
          <Text style={{ fontSize: 15, textAlign: 'right' }}>
            {item.node.fechaInicio}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default News

const styles = StyleSheet.create({
  container: {
    height: 240,
    width: 320,
    borderRadius: 25,
    marginBottom: 20,
    backgroundColor: 'rgb(218,217,217)',
  },
  imagen: {
    height: 140,
    width: 320,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25
  }
})
