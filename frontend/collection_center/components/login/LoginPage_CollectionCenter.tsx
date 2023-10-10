import { View, Text, TouchableOpacity } from 'react-native'
import { LoginPageStyles } from './styles_login/LoginPageStyles_Login'
import { Password, ReciclasLogo, User } from '../../../assets'
import { useState } from 'react'
import { KeyboardAvoidingWrapper, Gradient, Input, Button } from '../../../global'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../Types'

type LoginPageCollectionCenterProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginPage_CollectionCenter'>;
}

export function LoginPageCollectionCenter ({ navigation }: LoginPageCollectionCenterProps) {
  const [centerEmployee, setCenterEmployee] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async () => {
    console.log(centerEmployee, password)
    setCenterEmployee('')
    setPassword('')
    navigation.navigate('Menu_CollectionCenter')
  }

  return (
    <Gradient>
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
              <Input
                defaultText='Nombre de usuario'
                icon={<User />}
                setInputText={setCenterEmployee}
                defaultValue={centerEmployee}
              />
              <Input
                defaultText='Contraseña'
                icon={<Password />}
                setInputText={setPassword}
                defaultValue={password}
              />
            </View>
            <TouchableOpacity style={LoginPageStyles.otherOptionsContainer} onPress={() => navigation.navigate('SignupPage_CollectionCenter')}>
              <Text style={LoginPageStyles.otherOptionsText}>
                ¿No tienes una cuenta? Regístrate
              </Text>
            </TouchableOpacity>
            <View style={LoginPageStyles.loginButton}>
              <Button text='Iniciar sesión' handlePress={loginUser} />
            </View>
            <TouchableOpacity style={LoginPageStyles.otherOptionsContainer}>
              <Text style={LoginPageStyles.otherOptionsText}>
                ¿Olvidaste tu contraseña?
              </Text>
            </TouchableOpacity>
            <ReciclasLogo width={30} height={30} style={LoginPageStyles.bottomAppLogo} />
          </View>
        </View>
      </KeyboardAvoidingWrapper>
    </Gradient>
  )
}
