import { View, Text, TouchableOpacity } from 'react-native'
import { ReceptionPageStyles } from './ReceptionPageStyles_Reception'
import { ReciclasLogo, TrashCan, Comment, User, Scan } from '../../../assets'
import { useEffect, useState } from 'react'
import { postLogActionCollaborator, postObservation } from '../../services'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Gradient, Input, KeyboardAvoidingWrapper, useCollectionCenterContext } from '../../../global'
import { MessageCollectionCenter, ScanQRCollectionCenter } from '../../modals'
import { Button, ActivityIndicator } from 'react-native-paper'

export function ReceptionPageCollectionCenter () {
  const [quantity, setQuantity] = useState('')
  const [observation, setObservation] = useState('')
  const [user, setUser] = useState('')
  const [hasPermission, setHasPermission] = useState(true)
  const [scanned, setScanned] = useState(false)
  const [openCamera, setOpenCamera] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
  const { activeCenterEmployee, idToken } = useCollectionCenterContext()
  const [isLoading, setIsLoading] = useState(false)

  const registerQuantity = async () => {
    setIsLoading(true)
    const currentLogActionCollaboratorId = await postLogActionCollaborator(new Date().toISOString(), quantity, user, String(activeCenterEmployee.collectCenterId), activeCenterEmployee.email, idToken)
    if (observation !== '') {
      postObservation(observation, currentLogActionCollaboratorId, idToken)
    }
    setQuantity('')
    setObservation('')
    setUser('')
    setScanned(false)
    setOpenCamera(false)
    setShowSuccessModal(true)
    setIsLoading(false)
  }

  useEffect(() => {
    askForCameraPermission()
  }, [])

  const askForCameraPermission = async () => {
    try {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      if (status === 'granted') {
        setHasPermission(true)
      } else {
        setHasPermission(false)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleBarCodeScanned = (qrInfo: any) => {
    try {
      setUser(qrInfo.data)
      setScanned(true)
      setOpenCamera(false)
    } catch (error) {
      console.log('Error al parse', error)
    }
  }

  if (hasPermission === false) {
    return (
      <Gradient>
        <Text style={ReceptionPageStyles.permissionDenied}>Permisos de cámara no concedidos</Text>
      </Gradient>
    )
  }

  return (
    <Gradient>
      <MessageCollectionCenter
        title='¡Registro exitoso!'
        description='El registro de botellas se ha realizado con éxito.'
        handlePress={() => {}}
        visible={showSuccessModal}
        setVisible={setShowSuccessModal}
      />
      <KeyboardAvoidingWrapper>
        <View>
          <ReciclasLogo style={ReceptionPageStyles.appLogo} fill='#BDF26D' />
          <View style={ReceptionPageStyles.centerView}>
            <View style={ReceptionPageStyles.content}>
              {!openCamera &&
                <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(true) }}>
                  <Scan width={80} height={80} />
                  <Text style={ReceptionPageStyles.qrText}>Escanear QR</Text>
                </TouchableOpacity>}
              {scanned &&
                <View style={ReceptionPageStyles.user}>
                  <User />
                  <View style={ReceptionPageStyles.joinUserInfoDivider}>
                    <View style={ReceptionPageStyles.userDivider} />
                    <Text style={ReceptionPageStyles.userInfo}>{user}</Text>
                    <View style={ReceptionPageStyles.userDivider} />
                  </View>
                </View>}
              <ScanQRCollectionCenter
                handleScan={handleBarCodeScanned}
                handlePress={() => {}}
                visible={!scanned && openCamera}
                setVisible={(visible: boolean) => { setScanned(visible); setOpenCamera(visible) }}
              />
              <View style={ReceptionPageStyles.inputSection}>
                <View style={ReceptionPageStyles.quantityInput}>
                  <Input
                    defaultText='Peso'
                    icon={<TrashCan />}
                    keyboard='numeric'
                    setInputText={setQuantity}
                    defaultValue={quantity}
                  />
                  <Text style={ReceptionPageStyles.kg}>Kg</Text>
                </View>
                <Input
                  defaultText='Observación'
                  icon={<Comment />}
                  setInputText={setObservation}
                  defaultValue={observation}
                />
                {isLoading ? <ActivityIndicator animating={isLoading} color='#77A649' size={41} /> : null}
                {!isLoading && scanned &&
                  <View style={ReceptionPageStyles.optionButtons}>
                    <Button
                      mode='outlined'
                      buttonColor='#00000030'
                      textColor='#BDF26D'
                      onPress={() => { setScanned(false); setOpenCamera(false); setUser('') }}
                      labelStyle={ReceptionPageStyles.buttonText}
                      style={ReceptionPageStyles.button}
                    >
                      Cancelar
                    </Button>
                    <Button
                      mode='outlined'
                      buttonColor='#76b54430'
                      textColor='#BDF26D'
                      onPress={registerQuantity}
                      labelStyle={ReceptionPageStyles.buttonText}
                      style={ReceptionPageStyles.button}
                    >
                      Registrar
                    </Button>
                  </View>}
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </Gradient>
  )
}
