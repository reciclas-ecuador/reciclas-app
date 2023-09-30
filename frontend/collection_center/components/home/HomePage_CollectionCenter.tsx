import { View, Image, Text } from 'react-native'
import { HomePageStyles } from './styles_home/HomePageStyles_Home'
import { User } from '../../../Types'
import { useEffect, useState } from 'react'
import { getToDataCollectionCenter, getToDataUser } from '../../services'
import { Gradient } from '../../../global'

export function HomePageCollectionCenter () {
  const [dataUser, setDataUser] = useState<User>()
  // const [dataCollectionCenter, setDataCollectionCenter] = useState<CollectionCenter>()
  const [dataCollectionCenter, setDataCollectionCenter] = useState<User>()

  async function fetchData () {
    const dataUserBasic = await getToDataUser('frankz@email.com')
    const dataCollectionCenterBasic = await getToDataCollectionCenter('frankz@email.com')
    setDataUser(dataUserBasic)
    setDataCollectionCenter(dataCollectionCenterBasic)
    console.log(dataUserBasic)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Gradient>
      <View style={HomePageStyles.user}>
        <Image style={HomePageStyles.userImage} source={{ uri: 'https://static.wikia.nocookie.net/multiversus/images/7/71/Evil_Morty_Profile_Icon.png/revision/latest?cb=20220816020218' }} />
        <Text style={HomePageStyles.userName}>¡Hola, {dataUser?.body?.name.split(' ')[0]}!</Text>
      </View>
      <View style={HomePageStyles.summary}>
        <Text style={HomePageStyles.sectionTitle}>Resumen</Text>
        <View style={HomePageStyles.grayContainer}>
          <Text style={HomePageStyles.quantityText}>Cantidad receptada</Text>
          <Text style={HomePageStyles.quantity}>{dataCollectionCenter?.body?.ci.length} Kg</Text>
        </View>
        <View style={HomePageStyles.grayContainer}>
          <Text style={{ marginVertical: '15%' }}>GRAFICO</Text>
        </View>
      </View>
    </Gradient>
  )
}
