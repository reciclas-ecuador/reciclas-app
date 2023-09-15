import { View, Image, Text, TouchableOpacity } from 'react-native'
import { Input } from './Input_Login'
import { Button } from './Button_Login'
import { LinearGradient } from 'expo-linear-gradient'
import { LoginPageStyles } from './styles_login/LoginPageStyles_Login'

export function LoginPage () {
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
      <TouchableOpacity>
        <Image
          style={LoginPageStyles.backButton}
          source={require('./images_login/previous.webp')}
        />
      </TouchableOpacity>
      <Image
        style={LoginPageStyles.appLogo}
        source={require('./images_login/reciclasLogo.png')}
      />
      <Text style={LoginPageStyles.appTitle}>RE CICLAS</Text>
      <Text style={LoginPageStyles.appSubTitle}>ECUADOR</Text>
      <Text style={LoginPageStyles.appDescription}>
        bicicletas ecológicas
      </Text>
      <View style={LoginPageStyles.grayContainer}>
        <Text style={LoginPageStyles.welcomeText}>¡Bienvenido!</Text>
        <Text style={LoginPageStyles.rolText}>Administración</Text>
        <View style={LoginPageStyles.loginInputs}>
          <Input
            defaultText='Nombre de usuario'
            iconSource={require('./images_login/user.png')}
          />
          <Input
            defaultText='Contraseña'
            iconSource={require('./images_login/password.png')}
          />
        </View>
        <View style={LoginPageStyles.loginButton}>
          <Button text='Iniciar sesión' />
        </View>
        <TouchableOpacity>
          <Text style={LoginPageStyles.forgotPassword}>
            ¿Olvidaste tu contraseña?
          </Text>
        </TouchableOpacity>
        <Image
          style={LoginPageStyles.bottomAppLogo}
          source={require('./images_login/reciclasLogo.png')}
        />
      </View>
    </View>
  )
}
