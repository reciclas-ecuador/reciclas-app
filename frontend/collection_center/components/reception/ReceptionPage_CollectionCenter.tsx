import { View, Text, TouchableOpacity } from 'react-native'
import { ReceptionPageStyles } from './styles_reception/ReceptionPageStyles_Reception'
import { Previous, ReciclasLogo, TrashCan, Comment, User, Scan } from '../../../assets'
import { useEffect, useState } from 'react'
import { postQuantity } from '../../services'
import { BarCodeScanner } from 'expo-barcode-scanner'
import { Gradient, Button, Input, KeyboardAvoidingWrapper } from '../../../global'

export function ReceptionPageCollectionCenter () {
  const [quantity, setQuantity] = useState('')
  const [observation, setObservation] = useState('')
  const [user, setUser] = useState('')
  const [hasPermission, setHasPermission] = useState(true)
  const [scanned, setScanned] = useState(false)
  const [openCamera, setOpenCamera] = useState(false)

  const registerQuantity = async () => {
    postQuantity(user, quantity, observation)
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
      <KeyboardAvoidingWrapper>
        <View>
          <TouchableOpacity style={ReceptionPageStyles.backButton}>
            <Previous width={40} height={40} />
          </TouchableOpacity>
          <ReciclasLogo style={ReceptionPageStyles.appLogo} />
          <View style={ReceptionPageStyles.centerView}>
            <View style={[ReceptionPageStyles.content, openCamera ? { borderTopRightRadius: 175 } : null]}>
              {scanned &&
                <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(true) }}>
                  <Scan width={80} height={80} />
                  <Text style={ReceptionPageStyles.qrText}>Escanear QR</Text>
                </TouchableOpacity>}
              {scanned &&
                <View style={ReceptionPageStyles.user}>
                  <User />
                  <View style={ReceptionPageStyles.joinUserInfoDividir}>
                    <View style={ReceptionPageStyles.userDivider} />
                    <Text style={ReceptionPageStyles.userInfo}>{user}</Text>
                    <View style={ReceptionPageStyles.userDivider} />
                  </View>
                </View>}
              {!scanned && !openCamera &&
                <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(true) }} disabled={scanned}>
                  <Scan width={80} height={80} />
                  <Text style={ReceptionPageStyles.qrText}>Escanear QR</Text>
                </TouchableOpacity>}
              {!scanned && openCamera &&
                <View style={ReceptionPageStyles.qrCameraContainer}>
                  <BarCodeScanner
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style={{ width: 500, height: 500, flex: 1 }}
                  />
                  <View style={ReceptionPageStyles.cameraContent}>
                    <View style={ReceptionPageStyles.qrColumnObjective}>
                      <View style={ReceptionPageStyles.qrRowObjective}>
                        <View style={{ height: 50, width: 50, borderLeftWidth: 7, borderTopWidth: 2, borderColor: '#BDF26D', borderTopLeftRadius: 20 }} />
                        <View style={{ height: 50, width: 50, borderRightWidth: 2, borderTopWidth: 7, borderColor: '#BDF26D', borderTopRightRadius: 20 }} />
                      </View>
                      <View style={ReceptionPageStyles.qrRowObjective}>
                        <View style={{ height: 50, width: 50, borderLeftWidth: 2, borderBottomWidth: 7, borderColor: '#BDF26D', borderBottomLeftRadius: 20 }} />
                        <View style={{ height: 50, width: 50, borderRightWidth: 7, borderBottomWidth: 2, borderColor: '#BDF26D', borderBottomRightRadius: 20 }} />
                      </View>
                    </View>
                  </View>
                </View>}
              {!scanned && openCamera &&
                <View style={ReceptionPageStyles.cancelButton}>
                  <Button text='Cancelar' handlePress={() => { setScanned(false); setOpenCamera(false) }} />
                </View>}
              <View style={ReceptionPageStyles.inputSection}>
                <View style={ReceptionPageStyles.quantityInput}>
                  <Input
                    defaultText='Cantidad de botellas'
                    icon={<TrashCan />}
                    setInputText={setQuantity}
                  />
                  <Text style={ReceptionPageStyles.kg}>Kg</Text>
                </View>
                <Input
                  defaultText='Observación'
                  icon={<Comment />}
                  setInputText={setObservation}
                />
                {scanned &&
                  <Button text='Registrar' handlePress={registerQuantity} />}
              </View>
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </Gradient>
  )
}
