import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity } from 'react-native'
import { InputReception } from './components/reception/Input_Reception'
import { ButtonReception } from './components/reception/Button_Reception'
import { ReceptionPageStyles } from './components/reception/styles_reception/ReceptionPageStyles_Reception'
import { KeyboardAvoidingWrapper } from './components/general/KeyboardAvoidingWrapper'
import { Previous, ReciclasLogo, TrashCan, Comment, User, Scan } from '../assets'
import { useEffect, useState } from 'react'
import { postQuantity } from './services/Reception_Services'
import { BarCodeScanner } from 'expo-barcode-scanner'

interface ScanData {
  _id: string;
}

export function ReceptionPageCollectionCenter () {
  const [quantity, setQuantity] = useState('')
  const [observation, setObservation] = useState('')
  const [user, setUser] = useState('')
  const [scanData, setScanData] = useState<ScanData>()
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

  const handleBarCodeScanned = ({ type, data }: any) => {
    try {
      const _data = JSON.parse(data)
      setScanData(_data)
      setScanned(true)
      setOpenCamera(false)
      console.log('INCREIBLE ' + data)
    } catch (error) {
      console.log('Error al parse', error)
    }
  }

  if (hasPermission === false) {
    return (
      <View style={ReceptionPageStyles.container}>
        <LinearGradient
          colors={[
            'rgba(119, 166, 73, 1)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ]}
          style={ReceptionPageStyles.background}
        />
        <Text style={ReceptionPageStyles.permissionDenied}>Permisos de cámara no concedidos</Text>
      </View>
    )
  }

  if (scanned) {
    return (
      <View style={ReceptionPageStyles.container}>
        <LinearGradient
          colors={[
            'rgba(119, 166, 73, 1)',
            'rgba(0, 0, 0, 0.8)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)',
            'rgba(0, 0, 0, 1)'
          ]}
          style={ReceptionPageStyles.background}
        />
        <KeyboardAvoidingWrapper>
          <View>
            <TouchableOpacity style={ReceptionPageStyles.backButton}>
              <Previous width={40} height={40} />
            </TouchableOpacity>
            <ReciclasLogo style={ReceptionPageStyles.appLogo} />
            <View style={ReceptionPageStyles.content}>
              <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(true) }}>
                <Scan width={100} height={100} />
                <Text style={ReceptionPageStyles.qrText}>Escanear de nuevo</Text>
              </TouchableOpacity>
              <View style={ReceptionPageStyles.user}>
                <InputReception
                  defaultText='Usuario'
                  icon={<User />}
                  setInputText={setUser}
                  edit={false}
                  defaultValue={scanData?._id}
                />
              </View>
              <View style={ReceptionPageStyles.inputSection}>
                <View style={ReceptionPageStyles.quantityInput}>
                  <InputReception
                    defaultText='Cantidad de botellas'
                    icon={<TrashCan />}
                    setInputText={setQuantity}
                  />
                  <Text style={ReceptionPageStyles.kg}>Kg</Text>
                </View>
                <InputReception
                  defaultText='Observación'
                  icon={<Comment />}
                  setInputText={setObservation}
                />
                <ButtonReception text='Registrar' handlePress={registerQuantity} />
              </View>
            </View>
          </View>
        </KeyboardAvoidingWrapper>
      </View>
    )
  }

  return (
    <View style={ReceptionPageStyles.container}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={ReceptionPageStyles.background}
      />
      <KeyboardAvoidingWrapper>
        <View>
          <TouchableOpacity style={ReceptionPageStyles.backButton}>
            <Previous width={40} height={40} />
          </TouchableOpacity>
          <ReciclasLogo style={ReceptionPageStyles.appLogo} />
          <View style={ReceptionPageStyles.content}>
            {openCamera &&
              <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(false) }} disabled={scanned}>
                <Scan width={100} height={100} />
                <Text style={ReceptionPageStyles.qrText}>Cancelar</Text>
              </TouchableOpacity>}
            {!openCamera &&
              <TouchableOpacity style={ReceptionPageStyles.scanQr} onPress={() => { setScanned(false); setOpenCamera(true) }} disabled={scanned}>
                <Scan width={100} height={100} />
                <Text style={ReceptionPageStyles.qrText}>Escanear QR</Text>
              </TouchableOpacity>}
            {openCamera &&
              <View style={{ aspectRatio: 0.75 }}>
                <BarCodeScanner
                  onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                  style={{ flex: 1 }}
                />
              </View>}
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  )
}
