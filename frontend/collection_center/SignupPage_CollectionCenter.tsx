import { View, Text, TouchableOpacity } from 'react-native'
import { InputSignup } from './components/signup/Input_Signup'
import { ButtonSignup } from './components/signup/Button_Signup'
import { LinearGradient } from 'expo-linear-gradient'
import { SignupPageStyles } from './components/signup/styles_signup/SignupPageStyles_Signup'
import { User, Mail, Previous, ReciclasLogo } from '../assets'
import { useState } from 'react'
import { postUser } from './services/Signup_Services'
import { KeyboardAvoidingWrapper } from './components/general/KeyboardAvoidingWrapper'

export function SignupPageCollectionCenter () {
  const [userName, setUserName] = useState('')
  const [userLastName, setUserLastName] = useState('')
  const [userEmail, setUserEmail] = useState('')

  const registerUser = async () => {
    postUser(userName, userLastName, userEmail)
  }

  return (
    <View style={SignupPageStyles.container}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={SignupPageStyles.background}
      />
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
              <InputSignup
                defaultText='Nombre'
                icon={<User />}
                setInputText={setUserName}
              />
              <InputSignup
                defaultText='Apellido'
                icon={<User />}
                setInputText={setUserLastName}
              />
              <InputSignup
                defaultText='Correo'
                icon={<Mail />}
                keyboard='email-address'
                setInputText={setUserEmail}
              />
            </View>
            <View style={SignupPageStyles.signupButton}>
              <ButtonSignup text='Registrarse' handlePress={registerUser} />
            </View>
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  )
}
