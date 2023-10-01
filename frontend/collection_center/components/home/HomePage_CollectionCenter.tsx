import { View, Image, Text } from 'react-native'
import { HomePageStyles } from './styles_home/HomePageStyles_Home'
import { Data } from '../../../Types'
import { useEffect, useState } from 'react'
import { getToDataUser } from '../../services'
import { Gradient } from '../../../global'

export function HomePageCollectionCenter () {
  const [dataUser, setDataUser] = useState<Data>()

  async function fetchData () {
    const dataUserBasic = await getToDataUser()
    setDataUser(dataUserBasic)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Gradient>
      <View style={HomePageStyles.user}>
        <Image style={HomePageStyles.userImage} source={{ uri: dataUser?.url }} />
        <Text style={HomePageStyles.userName}>¡Hola, {dataUser?.title?.split(' ')[0]}!</Text>
      </View>
      <View style={HomePageStyles.summary}>
        <Text style={HomePageStyles.sectionTitle}>Resumen</Text>
        <View style={HomePageStyles.grayContainer}>
          <Text style={HomePageStyles.quantityText}>Cantidad receptada</Text>
          <Text style={HomePageStyles.quantity}>{dataUser?.id} Kg</Text>
        </View>
        <View style={HomePageStyles.grayContainer}>
          <Text style={{ marginVertical: '15%' }}>GRAFICO</Text>
        </View>
      </View>
    </Gradient>
  )
}
