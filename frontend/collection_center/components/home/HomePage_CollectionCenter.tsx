import { View, Image, Text } from 'react-native'
import { HomePageStyles } from './styles_home/HomePageStyles_Home'
import { CollectionCenter, CenterEmployee, RootStackParamList } from '../../../Types'
import { useEffect, useState } from 'react'
import { getToDataCollectionCenter, getToDataCenterEmployee } from '../../services'
import { Gradient } from '../../../global'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ConfirmationCollectionCenter } from '../../modals'

type HomePageCollectionCenterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomePage_CollectionCenter'>;
}

export function HomePageCollectionCenter ({ navigation }: HomePageCollectionCenterProps) {
  const [dataCenterEmployee, setDataCenterEmployee] = useState<CenterEmployee>()
  const [dataCollectionCenter, setDataCollectionCenter] = useState<CollectionCenter>()
  const [showConfirmationModal, setShowConfirmationModal] = useState<boolean>(false)

  async function fetchData () {
    const dataCenterEmployeeBasic = await getToDataCenterEmployee('antho@email.com')
    setDataCenterEmployee(dataCenterEmployeeBasic)
    const dataCollectionCenterBasic = await getToDataCollectionCenter(dataCenterEmployeeBasic?.body?.collectCenterId)
    setDataCollectionCenter(dataCollectionCenterBasic)
  }

  useEffect(() => {
    if (dataCenterEmployee === undefined) {
      fetchData()
    }

    const handleBack = () => navigation.addListener('beforeRemove', (e) => {
      e.preventDefault()
      setShowConfirmationModal(true)
    })
    handleBack()
  }, [navigation])

  return (
    <Gradient>
      <ConfirmationCollectionCenter
        onConfirm={() => navigation.navigate('LoginPage_CollectionCenter')}
        onNotConfirm={() => {}}
        title='¿Cerrar sesión?'
        description='Estás por salir de la pantalla principal, ¿estás seguro de querer cerrar sesión?'
        confirmText='Cerrar sesión'
        notConfirmText='Cancelar'
        visible={showConfirmationModal}
        setVisible={setShowConfirmationModal}
      />
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
          <Text style={{ marginVertical: '22%' }}>GRAFICO</Text>
        </View>
      </View>
    </Gradient>
  )
}
