import { View, Text, TouchableOpacity } from 'react-native'
import { InputLogin } from './components/login/Input_Login'
import { ButtonLogin } from './components/login/Button_Login'
import { LinearGradient } from 'expo-linear-gradient'
import { LoginPageStyles } from './components/login/styles_login/LoginPageStyles_Login'
import { Password, ReciclasLogo, User } from '../assets'
import { useState } from 'react'
import { KeyboardAvoidingWrapper } from '../global/components/KeyboardAvoidingWrapper'

export function LoginPageCollectionCenter () {
  const [user, setUser] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    console.log(user, password)
  }

  return (
    <View style={LoginPageStyles.container}>
      <LinearGradient
        colors={[
          'rgba(119, 166, 73, 1)',
          'rgba(0, 0, 0, 0.8)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)',
          'rgba(0, 0, 0, 1)'
        ]}
        style={LoginPageStyles.background}
      />
      <KeyboardAvoidingWrapper>
        <View>
          <ReciclasLogo style={LoginPageStyles.appLogo} />
          <Text style={LoginPageStyles.appTitle}>RE·CICLAS</Text>
          <Text style={LoginPageStyles.appSubTitle}>ECUADOR</Text>
          <Text style={LoginPageStyles.appDescription}>
            bicicletas ecológicas
          </Text>
          <View style={LoginPageStyles.grayContainer}>
            <Text style={LoginPageStyles.welcomeText}>¡Bienvenido!</Text>
            <Text style={LoginPageStyles.rolText}>Administración</Text>
            <View style={LoginPageStyles.loginInputs}>
              <InputLogin
                defaultText='Nombre de usuario'
                icon={<User />}
                setInputText={setUser}
              />
              <InputLogin
                defaultText='Contraseña'
                icon={<Password />}
                setInputText={setPassword}
              />
            </View>
            <View style={LoginPageStyles.loginButton}>
              <ButtonLogin text='Iniciar sesión' handlePress={loginUser} />
            </View>
            <TouchableOpacity>
              <Text style={LoginPageStyles.forgotPassword}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
            <ReciclasLogo width={30} height={30} style={LoginPageStyles.bottomAppLogo} />
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </View>
  )
}
