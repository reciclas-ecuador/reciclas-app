import { View, Text, TouchableOpacity } from 'react-native'
import { SignupPageStyles } from './styles_signup/SignupPageStyles_Signup'
import { User, Mail, Previous, ReciclasLogo, Phone, Location } from '../../../assets'
import { useState } from 'react'
import { postCenterEmployee } from '../../services'
import { KeyboardAvoidingWrapper, Gradient, Button, Input } from '../../../global'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Types'

type SignupPageCollectionCenterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SignupPage_CollectionCenter'>;
}

export function SignupPageCollectionCenter ({ navigation }: SignupPageCollectionCenterProps) {
  const [centerEmployeeName, setCenterEmployeeName] = useState('')
  const [centerEmployeeLastName, setCenterEmployeeLastName] = useState('')
  const [centerEmployeeEmail, setCenterEmployeeEmail] = useState('')
  const [centerEmployeePhone, setCenterEmployeePhone] = useState('')
  const [centerEmployeeLocation, setCenterEmployeeLocation] = useState('')

  const registerCenterEmployee = async () => {
    postCenterEmployee(centerEmployeeEmail, centerEmployeeName, centerEmployeeLastName, centerEmployeePhone, centerEmployeeLocation)
    setCenterEmployeeName('')
    setCenterEmployeeLastName('')
    setCenterEmployeeEmail('')
    setCenterEmployeePhone('')
    setCenterEmployeeLocation('')
    navigation.navigate('LoginPage_CollectionCenter')
  }

  return (
    <Gradient>
      <KeyboardAvoidingWrapper>
        <View>
          <TouchableOpacity style={SignupPageStyles.backButton} onPress={() => navigation.navigate('LoginPage_CollectionCenter')}>
            <Previous width={40} height={40} />
          </TouchableOpacity>
          <ReciclasLogo style={SignupPageStyles.appLogo} />
          <Text style={SignupPageStyles.appTitle}>RE·CICLAS</Text>
          <View style={SignupPageStyles.grayContainer}>
            <Text style={SignupPageStyles.processText}>Registro</Text>
            <View style={SignupPageStyles.divider} />
            <View style={SignupPageStyles.signupInputs}>
              <Input
                defaultText='Nombre'
                icon={<User />}
                setInputText={setCenterEmployeeName}
                defaultValue={centerEmployeeName}
              />
              <Input
                defaultText='Apellido'
                icon={<User />}
                setInputText={setCenterEmployeeLastName}
                defaultValue={centerEmployeeLastName}
              />
              <Input
                defaultText='Correo'
                icon={<Mail />}
                keyboard='email-address'
                setInputText={setCenterEmployeeEmail}
                defaultValue={centerEmployeeEmail}
              />
              <Input
                defaultText='Celular'
                icon={<Phone width={22} />}
                keyboard='numeric'
                setInputText={setCenterEmployeePhone}
                defaultValue={centerEmployeePhone}
              />
              <Input
                defaultText='Centro de recolección'
                icon={<Location fill='#000' stroke='#000' strokeWidth='8' />}
                keyboard='numeric'
                setInputText={setCenterEmployeeLocation}
                defaultValue={centerEmployeeLocation}
              />
            </View>
            <View style={SignupPageStyles.signupButton}>
              <Button text='Registrarse' handlePress={registerCenterEmployee} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </Gradient>
  )
}
