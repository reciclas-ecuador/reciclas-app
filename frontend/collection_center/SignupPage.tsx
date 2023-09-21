import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Input } from './components/signup/Input_Signup'
import { Button } from './components/signup/Button_Signup'
import { LinearGradient } from 'expo-linear-gradient'
import { SignupPageStyles } from './components/signup/styles_signup/SignupPageStyles_Signup'

export function SignupPage () {
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
      <TouchableOpacity>
        <Image
          style={SignupPageStyles.backButton}
          source={require('../assets/general/previous.svg')}
        />
      </TouchableOpacity>
      <Image
        style={SignupPageStyles.appLogo}
        source={require('../assets/general/reciclasLogo.svg')}
      />
      <Text style={SignupPageStyles.appTitle}>RE·CICLAS</Text>
      <View style={SignupPageStyles.grayContainer}>
        <Text style={SignupPageStyles.welcomeText}>¡Bienvenido!</Text>
        <Text style={SignupPageStyles.rolText}>Administración</Text>
        <View style={SignupPageStyles.loginInputs}>
          <Input
            defaultText='Nombre'
            iconSource={require('../assets/login-signup/user.svg')}
          />
          <Input
            defaultText='Apellido'
            iconSource={require('../assets/login-signup/user.svg')}
          />
          <Input
            defaultText='Correo'
            iconSource={require('../assets/login-signup/mail.svg')}
          />
        </View>
        <View style={SignupPageStyles.loginButton}>
          <Button text='Iniciar sesión' />
        </View>
      </View>
    </View>
  )
}
