import { View, Image, Text } from 'react-native'
import { HomePageStyles } from './styles_home/HomePageStyles_Home'
import { CollectionCenter, CenterEmployee } from '../../../Types'
import { useEffect, useState } from 'react'
import { getToDataCollectionCenter, getToDataCenterEmployee } from '../../services'
import { Gradient } from '../../../global'

export function HomePageCollectionCenter () {
  const [dataCenterEmployee, setDataCenterEmployee] = useState<CenterEmployee>()
  const [dataCollectionCenter, setDataCollectionCenter] = useState<CollectionCenter>()

  async function fetchData () {
    const dataCenterEmployeeBasic = await getToDataCenterEmployee('antho@email.com')
    setDataCenterEmployee(dataCenterEmployeeBasic)
    const dataCollectionCenterBasic = await getToDataCollectionCenter(dataCenterEmployeeBasic?.body?.collectCenterId)
    setDataCollectionCenter(dataCollectionCenterBasic)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Gradient>
      <View style={HomePageStyles.user}>
        <Image style={HomePageStyles.userImage} source={{ uri: 'https://static.wikia.nocookie.net/multiversus/images/7/71/Evil_Morty_Profile_Icon.png/revision/latest?cb=20220816020218' }} />
        <Text style={HomePageStyles.userName}>¡Hola, {dataCenterEmployee?.body?.name.split(' ')[0]}!</Text>
      </View>
      <View style={HomePageStyles.summary}>
        <Text style={HomePageStyles.sectionTitle}>Resumen</Text>
        <View style={HomePageStyles.grayContainer}>
          <Text style={HomePageStyles.quantityText}>Cantidad receptada</Text>
          <Text style={HomePageStyles.quantity}>{dataCollectionCenter?.body?.name?.length} Kg</Text>
        </View>
        <View style={HomePageStyles.grayContainer}>
          <Text style={{ marginVertical: '15%' }}>GRAFICO</Text>
        </View>
      </View>
    </Gradient>
  )
}
