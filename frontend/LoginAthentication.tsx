import React, { useState } from 'react'
import { Alert, StyleSheet, Text, View } from 'react-native'
import { Gradient } from './global'
import { ReciclasLogo } from './assets'
import { Button, TextInput } from 'react-native-paper'
import { StackScreenProps } from '@react-navigation/stack'
import { useAuthenticate } from './context/AuthenticateUserContext'
import { useForm } from './hooks/useForm'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { auth } from './config/firebase'

// interface Props extends StackScreenProps<any, any> { }

const LoginAthentication = () => {
  const { user } = useAuthenticate()
  const [uid, setUid] = useState('')

  const { form, onChange } = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { email, password, name } = form

  const onRegisterPress = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => console.log('registrado'))
      .catch((err) => Alert.alert('loginError', err.message))
  }

  return (
    <Gradient>
      <View style={styles.logoHome}>
        <ReciclasLogo width={70} height={70} fill='#bdf26d' />
        <Text
          style={{
            color: 'white',
            fontSize: 40,
            marginTop: 15,
            fontWeight: 'bold',
            letterSpacing: 2
          }}
        >
          Re- ciclas
        </Text>
        <Text style={{ color: 'white' }}>Ecuador</Text>
        <Text style={{ color: 'white' }}>bicicletas ecológicas</Text>
      </View>
      <View style={styles.content_glass}>
        <TextInput
          mode='outlined'
          label='Correo'
          placeholder='Type something'
          onChangeText={(value) => onChange(value, 'email')}
          // right={<TextInput.Affix text="/100" />}
          style={{
            width: '90%',
            marginVertical: 20
          }}
        />
        <TextInput
          mode='outlined'
          label='Password'
          placeholder='Type something'
          onChangeText={(value) => onChange(value, 'password')}
          // right={<TextInput.Affix text="/100" />}
          style={{ width: '90%', marginVertical: 10 }}
        />
        <TextInput
          mode='outlined'
          label='name'
          placeholder='Type something'
          onChangeText={(value) => onChange(value, 'name')}
          // right={<TextInput.Affix text="/100" />}
          style={{ width: '90%', marginVertical: 10 }}
        />
        <Button
          icon='blur-off'
          style={{
            backgroundColor: '#bdf26d',
            width: '70%',
            marginVertical: 20
          }}
          onPress={() => onRegisterPress()}
        // onPress={() => hideModal()}
        >
          Ingresar
        </Button>
      </View>
    </Gradient>
  )
}

export default LoginAthentication

const styles = StyleSheet.create({
  logoHome: {
    width: '100%',
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  content_glass: {
    flex: 1,
    width: '90%',
    height: '55%',
    position: 'absolute',
    bottom: 15,
    borderRadius: 20,
    margin: 'auto',
    marginLeft: 20,
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'rgba(192, 192, 192, .2)',
    alignItems: 'center',
    // justifyContent: "center",
    alignContent: 'center'
  }
})
