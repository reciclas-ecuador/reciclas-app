import { View, Text, TouchableOpacity } from 'react-native'
import { SignupPageStyles } from './styles_signup/SignupPageStyles_Signup'
import { User, Mail, Previous, ReciclasLogo, Phone, Location } from '../../../assets'
import { useState } from 'react'
import { postCenterEmployee } from '../../services'
import { KeyboardAvoidingWrapper, Gradient, Button, Input } from '../../../global'

export function SignupPageCollectionCenter () {
  const [centerEmployeeName, setCenterEmployeeName] = useState('')
  const [centerEmployeeLastName, setCenterEmployeeLastName] = useState('')
  const [centerEmployeeEmail, setCenterEmployeeEmail] = useState('')
  const [centerEmployeePhone, setCenterEmployeePhone] = useState('')
  const [centerEmployeeLocation, setCenterEmployeeLocation] = useState('')

  const registerCenterEmployee = async () => {
    postCenterEmployee(centerEmployeeEmail, centerEmployeeName, centerEmployeeLastName, centerEmployeePhone, centerEmployeeLocation)
  }

  return (
    <Gradient>
      <KeyboardAvoidingWrapper>
        <View>
          <TouchableOpacity style={SignupPageStyles.backButton}>
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
              />
              <Input
                defaultText='Apellido'
                icon={<User />}
                setInputText={setCenterEmployeeLastName}
              />
              <Input
                defaultText='Correo'
                icon={<Mail />}
                keyboard='email-address'
                setInputText={setCenterEmployeeEmail}
              />
              <Input
                defaultText='Celular'
                icon={<Phone width={22} />}
                keyboard='numeric'
                setInputText={setCenterEmployeePhone}
              />
              <Input
                defaultText='Centro de recolección'
                icon={<Location fill='#000' stroke='#000' strokeWidth='8' />}
                keyboard='numeric'
                setInputText={setCenterEmployeeLocation}
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
