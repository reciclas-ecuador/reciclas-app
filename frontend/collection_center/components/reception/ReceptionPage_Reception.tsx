import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import { Input } from './Input_Reception'
import { Button } from './Button_Reception'
import { ReceptionPageStyles } from './styles_reception/ReceptionPageStyles_Reception'

export function ReceptionPage () {
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
      <TouchableOpacity>
        <Image
          style={ReceptionPageStyles.backButton}
          source={require('./images_reception/previous.webp')}
        />
      </TouchableOpacity>
      <Text style={ReceptionPageStyles.pageTitle}>Recepción</Text>
      <Image
        style={ReceptionPageStyles.appLogo}
        source={require('./images_reception/reciclasLogo.png')}
      />
      <View style={ReceptionPageStyles.content}>
        <Image
          source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?data=RECICLAS-APP&size=500x500&bgcolor=BDF26D' }}
          style={ReceptionPageStyles.qr}
        />
        <View style={ReceptionPageStyles.inputSection}>
          <View style={ReceptionPageStyles.quantityInput}>
            <Input
              defaultText='Cantidad de botellas'
              iconSource={require('./images_reception/trashCan.png')}
            />
            <Text style={ReceptionPageStyles.kg}>Kg</Text>
          </View>
          <Input
            defaultText='Observación'
            iconSource={require('./images_reception/comment.png')}
          />
          <Button text='Registrar' />
        </View>
      </View>
    </View>
  )
}
