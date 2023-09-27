import { View, Text, TouchableOpacity } from 'react-native'
import { SignupPageStyles } from './styles_signup/SignupPageStyles_Signup'
import { User, Mail, Previous, ReciclasLogo } from '../../../assets'
import { useState } from 'react'
import { postUser } from '../../services'
import { KeyboardAvoidingWrapper, Gradient, Button, Input } from '../../../global'

export function SignupPageCollectionCenter () {
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const registerUser = async () => {
    postUser(userName, userLastName, userEmail)
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
                setInputText={setUserName}
              />
              <Input
                defaultText='Apellido'
                icon={<User />}
                setInputText={setUserLastName}
              />
              <Input
                defaultText='Correo'
                icon={<Mail />}
                keyboard='email-address'
                setInputText={setUserEmail}
              />
            </View>
            <View style={SignupPageStyles.signupButton}>
              <Button text='Registrarse' handlePress={registerUser} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </Gradient>
  )
}
